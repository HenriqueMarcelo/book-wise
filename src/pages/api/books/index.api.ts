// /api/books

// Find any user where at least one of their likes abides by this condition.
// Replace with "every" to only search for users where ALL of their likes abide by this condition,
// or "none" to only search for users where NONE of their likes abide by this condition.

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let categoriesQuery
  let searchQuery

  if (req.query.category) {
    const categoryId = String(req.query.category)
    categoriesQuery = {
      some: {
        categoryId,
      },
    }
  }

  if (req.query.q) {
    const qQuery = {
      contains: String(req.query.q),
    }
    searchQuery = [
      {
        name: qQuery,
      },
      {
        author: qQuery,
      },
    ]
  }

  const books = await prisma.book.findMany({
    where: {
      categories: categoriesQuery,
      OR: searchQuery,
    },
    take: 5,
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
      // https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/working-with-many-to-many-relations
      categories: {
        include: {
          category: true,
        },
      },
    },
  })

  const booksFixedRelationWithCategory = books.map((book) => {
    return {
      ...book,
      categories: book.categories.map((category) => category.category),
    }
  })

  const booksWithRating = booksFixedRelationWithCategory.map((book) => {
    const avgRate =
      book.ratings.reduce((sum, rateObj) => {
        return sum + rateObj.rate
      }, 0) / book.ratings.length

    return {
      ...book,
      rating: avgRate,
    }
  })

  return res.json({ booksWithRating })
}
