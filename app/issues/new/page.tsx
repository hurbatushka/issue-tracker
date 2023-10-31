'use client';
import React from 'react';
import { TextField, Button } from '@radix-ui/themes';
import { MdTitle } from 'react-icons/md';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

export default function NewIssue() {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues/', data);
        router.push('/issues');
      })}>
      <TextField.Root>
        <TextField.Slot>
          <MdTitle height="16" width="16" />
        </TextField.Slot>
        <TextField.Input size="3" placeholder="Тема обращения..." {...register('title')} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Опишите Вашу проблему..." {...field} />
        )}></Controller>
      <Button>Отправить</Button>
    </form>
  );
}
