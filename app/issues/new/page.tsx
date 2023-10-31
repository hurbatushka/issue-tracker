'use client';
import React from 'react';
import { TextField, Button } from '@radix-ui/themes';
import { MdTitle } from 'react-icons/md';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

export default function NewIssue() {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Slot>
          <MdTitle height="16" width="16" />
        </TextField.Slot>
        <TextField.Input size="3" placeholder="Тема обращения..." />
      </TextField.Root>
      <SimpleMDE placeholder="Опишите Вашу проблему..." />
      <Button>Отправить</Button>
    </div>
  );
}
