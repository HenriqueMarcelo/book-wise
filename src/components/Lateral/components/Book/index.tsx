import { Stars } from '@/src/components/Stars'
import Image from 'next/image'
import { BookmarkSimple, BookOpen } from 'phosphor-react'
import {
  BookContainer,
  BookNumber,
  Container,
  Footer,
  Info,
  Number,
} from './styles'

export function Book() {
  return (
    <Container>
      <BookContainer>
        <Image src="/images/books/Book.png" alt="" width="171" height="242" />
        <Info>
          <div>
            <h3>A revolução dos bichos</h3>
            <h4>George Orwell</h4>
          </div>
          <div>
            <Stars size="md" />
            <Number>3 avaliações</Number>
          </div>
        </Info>
      </BookContainer>
      <Footer>
        <BookNumber>
          <BookmarkSimple size={32} />
          <div>
            <h5>Categoria</h5>
            <span>Computação, educação</span>
          </div>
        </BookNumber>
        <BookNumber>
          <BookOpen size={32} />
          <div>
            <h5>Páginas</h5>
            <span>160</span>
          </div>
        </BookNumber>
      </Footer>
    </Container>
  )
}
