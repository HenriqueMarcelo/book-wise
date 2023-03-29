import { CardBookSimple } from '@/src/components/CardBookSimple'
import { FakeInput } from '@/src/components/FakeInput'
import { PageTitle } from '@/src/components/PageTitle'
import { Lateral } from '@/src/components/Lateral'
import { Tag } from '@/src/components/Tag'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import Template from '../template'
import { Container, SearchForm, TagsContainer } from './styles'
import { useState } from 'react'
import { prisma } from '@/src/lib/prisma'
import { Book, Category } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { api } from '@/src/lib/axios'

export interface BookWithRatingAndCategories extends Book {
  rating: number
  categories: Category[]
  ratings: any[]
}

interface ExploreProps {
  categories: Category[]
  books: BookWithRatingAndCategories[]
}

export default function Explore({ categories, books }: ExploreProps) {
  const [booksList, setBooksList] =
    useState<BookWithRatingAndCategories[]>(books)
  const [bookSelected, setBookSelected] =
    useState<BookWithRatingAndCategories | null>(null)
  const [categorySelected, setCategorySelected] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm()

  const onSubmit = async (data: any) => {
    const response = await api.get(`/books?q=${data.search}`)
    if (response.data.booksWithRating) {
      setBooksList(response.data.booksWithRating)
    }
    setCategorySelected(null)
  }

  function handleSelectBook(book: BookWithRatingAndCategories) {
    setBookSelected(book)
  }

  function handleCloseLateral() {
    setBookSelected(null)
  }

  async function selectCategory(categoryId: string | null) {
    const query = categoryId ? `?category=${categoryId}` : ''
    const response = await api.get(`/books${query}`)
    if (response.data.booksWithRating) {
      setBooksList(response.data.booksWithRating)
    }
    setCategorySelected(categoryId)
    reset()
  }

  return (
    <Template>
      {bookSelected && (
        <Lateral book={bookSelected} onClose={handleCloseLateral} />
      )}
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <PageTitle>
          <Binoculars size={32} /> Explorar
        </PageTitle>
        <FakeInput
          placeholder="Buscar livro ou autor"
          {...register('search')}
          disabled={isSubmitting}
        >
          <MagnifyingGlass size={20} />
        </FakeInput>
      </SearchForm>
      <TagsContainer>
        <Tag selected={!categorySelected} onClick={() => selectCategory(null)}>
          Tudo
        </Tag>
        {categories.map((category) => (
          <Tag
            key={category.id}
            selected={categorySelected === category.id}
            onClick={() => selectCategory(category.id)}
          >
            {category.name}
          </Tag>
        ))}
      </TagsContainer>
      <Container>
        {booksList.map((book) => (
          <CardBookSimple
            key={book.id}
            onClick={() => handleSelectBook(book)}
            size="lg"
            author={book.author}
            name={book.name}
            cover={book.cover_url}
            rating={book.rating}
          />
        ))}
        <div />
        <div />
        <div />
      </Container>
    </Template>
  )
}

// export async function getStaticProps() {
export async function getServerSideProps() {
  const categories = await prisma.category.findMany()
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

  return {
    props: {
      // https://stackoverflow.com/a/72837265/6727029
      categories: JSON.parse(JSON.stringify(categories)),
      books: JSON.parse(JSON.stringify(booksWithRating)),
    },
    // revalidate: 60 * 60 * 24 * 1, // 1 day
  }
}
