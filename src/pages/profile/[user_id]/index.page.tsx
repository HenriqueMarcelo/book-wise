import { CardRating } from '@/src/components/CardRating'
import { FakeInput } from '@/src/components/FakeInput'
import { PageTitle } from '@/src/components/PageTitle'
import { api } from '@/src/lib/axios'
import { prisma } from '@/src/lib/prisma'
import { getDateFormattedAndRelative } from '@/src/utils/get-date-formatted-and-relative'
import {
  Book,
  CategoriesOnBooks,
  Category,
  Rating,
  User as UserPrisma,
} from '@prisma/client'
import { GetServerSideProps } from 'next'
import {
  BookmarkSimple,
  BookOpen,
  Books,
  MagnifyingGlass,
  User,
  UserList,
} from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Template from '../../template'
import {
  Container,
  HR,
  LeftBlock,
  UserBlock,
  UserInfo,
  UserNumber,
  UserNumbers,
} from './styles'

interface ExploreProps {
  infos: {
    pages: number
    booksCount: number
    authorsCount: number
    bestGenre: Category
  }
  user: UserPrisma & {
    ratings: (Rating & {
      book: Book & {
        categories: (CategoriesOnBooks & {
          category: Category
        })[]
      }
    })[]
  }
  ratings: (Rating & {
    book: Book & {
      categories: (CategoriesOnBooks & {
        category: Category
      })[]
    }
  })[]
}

export default function Explore({ infos, ratings, user }: ExploreProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(user.created_at)

  const [listRatings, setRatingsList] = useState(ratings)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()

  const onSubmit = async (data: any) => {
    const response = await api.get(`/users/${user.id}/ratings?q=${data.search}`)
    if (response.data.rating) {
      setRatingsList(response.data.rating)
    }
  }

  return (
    <Template>
      <PageTitle>
        <User size={32} /> Perfil
      </PageTitle>
      <Container>
        <LeftBlock as="form" onSubmit={handleSubmit(onSubmit)}>
          <FakeInput
            placeholder="Buscar livro avaliado"
            {...register('search')}
            disabled={isSubmitting}
          >
            <MagnifyingGlass size={20} />
          </FakeInput>
          {listRatings.map((rating) => (
            <CardRating key={rating.id} book={rating.book} rating={rating} />
          ))}
        </LeftBlock>
        <UserBlock>
          <UserInfo>
            <img
              src={user.avatar_url || 'images/logo-rocket.png'}
              alt=""
              width="72"
              height="72"
            />
            <div>
              <h5>{user.name}</h5>
              <time title={dateFormatted} dateTime={dateString}>
                membro(a) {dateRelativeToNow}
              </time>
            </div>
          </UserInfo>
          <HR />
          <UserNumbers>
            <UserNumber>
              <BookOpen size={32} />
              <div>
                <h5>{infos.pages}</h5>
                <span>Páginas lidas </span>
              </div>
            </UserNumber>
            <UserNumber>
              <Books size={32} />
              <div>
                <h5>{infos.booksCount}</h5>
                <span>Livros avaliados </span>
              </div>
            </UserNumber>
            <UserNumber>
              <UserList size={32} />
              <div>
                <h5>{infos.authorsCount}</h5>
                <span>Autores lidos </span>
              </div>
            </UserNumber>
            <UserNumber>
              <BookmarkSimple size={32} />
              <div>
                <h5>{infos.bestGenre.name}</h5>
                <span>Categoria mais lida </span>
              </div>
            </UserNumber>
          </UserNumbers>
        </UserBlock>
      </Container>
    </Template>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const userId = String(params?.user_id)

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: userId,
      },
      include: {
        ratings: {
          include: {
            book: {
              include: {
                categories: {
                  include: {
                    category: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    const pages = user.ratings.reduce((acc, rating) => {
      return (acc += rating.book.total_pages)
    }, 0)

    const books = user.ratings.map((rating) => rating.book)

    const authors = user.ratings.map((rating) => rating.book.author)

    const uniqueAuthors = authors.filter(
      (value, index, array) => array.indexOf(value) === index,
    )

    const genres = books
      .map((book) => book.categories.map((category) => category.category))
      .flat()

    const genreNumbers = genres
      .reduce((acc: any, genre) => {
        const qtd = genres.filter((i: any) => i.id === genre.id).length
        return [
          ...acc,
          {
            ...genre,
            qtd,
          },
        ]
      }, [])
      .sort((a: any, b: any) => b.qtd - a.qtd)

    const infos = {
      pages,
      booksCount: books.length,
      authorsCount: uniqueAuthors.length,
      bestGenre: genreNumbers[0],
    }

    return {
      props: {
        ratings: JSON.parse(JSON.stringify(user.ratings)),
        user: JSON.parse(JSON.stringify(user)),
        infos,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
