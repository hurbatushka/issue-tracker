import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/prisma/client';

const createIssueSchema = z.object({
  title: z.string().min(1, 'Тема отсутствует').max(255, 'Слишком длинная тема'),
  description: z.string().min(1, 'Описание отсутствует'),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const valid = createIssueSchema.safeParse(body);
  if (!valid.success) {
    return NextResponse.json(valid.error.format(), { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
