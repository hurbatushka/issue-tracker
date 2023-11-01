'use client';
import { Table } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createIssueSchema } from '../validationShemas';
import { z } from 'zod';

interface Issue {
  title: string;
  description: string;
}

export default function IssuesPage() {
  const [data, setData] = useState<Issue[]>([]);
  useEffect(() => {
    axios.get('/api/issues').then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="max-w-xl">
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Тема</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Описание</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((data) => (
            <>
              <Table.Row>
                <Table.RowHeaderCell>{data.title}</Table.RowHeaderCell>
                <Table.Cell>{data.description}</Table.Cell>
              </Table.Row>
            </>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
