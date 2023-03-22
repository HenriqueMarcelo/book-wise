// /api/books/48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const bookId = String(req.query.book_id)

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  })

  return res.json({ book })
}
