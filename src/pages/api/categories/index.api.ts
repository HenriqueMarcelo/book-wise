// /api/categories

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const category = await prisma.category.findMany()

  return res.json({ category })
}
