'use client';
import React from 'react';
import { Dialog, TextField, Flex, Text, Button, TextArea } from '@radix-ui/themes';
import { MdTitle } from 'react-icons/md';

export default function NewIssue() {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Slot>
          <MdTitle height="16" width="16" />
        </TextField.Slot>
        <TextField.Input size="3" placeholder="Тема обращения..." />
      </TextField.Root>
      <TextArea size="3" className="mt-5" placeholder="Опишите проблему..." />
      <Button>Отправить</Button>
    </div>
  );
}
