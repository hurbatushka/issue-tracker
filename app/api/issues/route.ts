import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { createIssueSchema } from '../../validationShemas';

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

export async function GET(request: NextRequest) {
  const allIssue = await prisma.issue.findMany();
  return NextResponse.json(allIssue, { status: 201 });
}
