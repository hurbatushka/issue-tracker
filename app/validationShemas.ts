import { z } from 'zod';

export const createIssueSchema = z.object({
  title: z.string().min(1, 'Тема отсутствует').max(255, 'Слишком длинная тема'),
  description: z.string().min(1, 'Описание отсутствует'),
});
