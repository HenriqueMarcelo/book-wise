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

interface BookWithRating extends Book {
  rating: number
}

interface ExploreProps {
  categories: Category[]
  books: BookWithRating[]
}

export default function Explore({ categories, books }: ExploreProps) {
  const [bookSelected, setBookSelected] = useState(false)

  function handleSelectBook() {
    setBookSelected(true)
  }

  function handleCloseLateral() {
    setBookSelected(false)
  }

  return (
    <Template>
      {bookSelected && <Lateral onClose={handleCloseLateral} />}
      <SearchForm>
        <PageTitle>
          <Binoculars size={32} /> Explorar
        </PageTitle>
        <FakeInput placeholder="Buscar livro ou autor">
          <MagnifyingGlass size={20} />
        </FakeInput>
      </SearchForm>
      <TagsContainer>
        <Tag selected>Tudo</Tag>
        {categories.map((category) => (
          <Tag key={category.id}>{category.name}</Tag>
        ))}
      </TagsContainer>
      <Container>
        {books.map((book) => (
          <CardBookSimple
            key={book.id}
            onClick={handleSelectBook}
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

export async function getStaticProps() {
  const categories = await prisma.category.findMany()
  const books = await prisma.book.findMany({
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  })

  const booksWithRating = books.map((book) => {
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
    revalidate: 60 * 60 * 24 * 1, // 1 day
  }
}
