// /api/users/4383f783-6ce1-4f92-b1dd-7a7a693c4aef/rating

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userId = String(req.query.user_id)

  let bookQuery

  if (req.query.q) {
    bookQuery = {
      name: {
        contains: String(req.query.q),
      },
    }
  }

  const rating = await prisma.rating.findMany({
    where: {
      user_id: userId,
      book: bookQuery,
    },
    include: {
      book: true,
    },
  })

  return res.json({ rating })
}
