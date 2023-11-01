'use client';
import React, { useState } from 'react';
import { TextField, Button, Callout, Text } from '@radix-ui/themes';
import { MdTitle } from 'react-icons/md';
import { BiErrorCircle } from 'react-icons/bi';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationShemas';
import { z } from 'zod';

type IssueForm = z.infer<typeof createIssueSchema>;

export default function NewIssue() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState('');
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-10">
          <Callout.Icon>
            <BiErrorCircle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/issues/', data);
            router.push('/issues');
          } catch (error) {
            setError('Произошла непредвиденная ошибка');
          }
        })}>
        <TextField.Root>
          <TextField.Slot>
            <MdTitle height="16" width="16" />
          </TextField.Slot>
          <TextField.Input size="3" placeholder="Тема обращения..." {...register('title')} />
        </TextField.Root>
        {errors.title && (
          <Text color="red" as="p">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Опишите Вашу проблему..." {...field} />
          )}></Controller>
        {errors.description && (
          <Text color="red" as="p">
            {errors.description.message as 'Описание отсутсвует'}
          </Text>
        )}

        <Button>Отправить</Button>
      </form>
    </div>
  );
}
