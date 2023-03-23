import { CardRatingFull } from '@/src/components/CardRatingFull'
import { CardBookSimple } from '@/src/components/CardBookSimple'
import { PageTitle } from '@/src/components/PageTitle'
import { prisma } from '@/src/lib/prisma'
import { Book, Category, Rating, User } from '@prisma/client'
import Link from 'next/link'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import Template from '../template'
import { Container, RightColumn, Title } from './styles'

export interface BookWithRatingAndCategories extends Book {
  rating: number
  categories: Category[]
  ratings: any[]
}

export interface RatingWithUserAndBook extends Rating {
  user: User
  book: Book
}
interface HomeProps {
  ratings: RatingWithUserAndBook[]
  books: BookWithRatingAndCategories[]
}

export default function Home({ books, ratings }: HomeProps) {
  return (
    <Template>
      <PageTitle>
        <ChartLineUp size={32} /> Início
      </PageTitle>
      <Container>
        <div>
          {/* <Title>
            <span>Sua última leitura</span>
            <a href="">
              Ver todas <CaretRight size={16} />
            </a>
          </Title>
          <CardRatingFull user={false} />
          <br /> */}

          <Title>
            <span>Avaliações mais recentes</span>
            <a href=""></a>
          </Title>

          {ratings.map((rating) => (
            <CardRatingFull
              key={rating.id}
              rating={rating}
              book={rating.book}
              user={rating.user}
            />
          ))}
        </div>
        <RightColumn>
          <Title>
            <span>Livros Populares</span>
            <Link href="/explore">
              Ver todos <CaretRight size={16} />
            </Link>
          </Title>
          {books.map((book) => (
            <CardBookSimple
              key={book.id}
              author={book.author}
              name={book.name}
              cover={book.cover_url}
              rating={book.rating}
            />
          ))}
        </RightColumn>
      </Container>
    </Template>
  )
}

export async function getServerSideProps() {
  const books = await prisma.book.findMany({
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

    take: 4,
    orderBy: {
      ratings: {
        _count: 'desc',
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

  // ----------------------------------------------------------------

  const ratings = await prisma.rating.findMany({
    include: {
      user: true,
      book: true,
    },
    take: 3,
    orderBy: {
      created_at: 'desc',
    },
  })

  return {
    props: {
      books: JSON.parse(JSON.stringify(booksWithRating)),
      ratings: JSON.parse(JSON.stringify(ratings)),
    },
  }
}
