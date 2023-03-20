import { CardRating } from '@/src/components/CardRating'
import { FakeInput } from '@/src/components/FakeInput'
import { PageTitle } from '@/src/components/PageTitle'
import Image from 'next/image'
import {
  BookmarkSimple,
  BookOpen,
  Books,
  MagnifyingGlass,
  User,
  UserList,
} from 'phosphor-react'
import Template from '../template'
import {
  Container,
  HR,
  LeftBlock,
  UserBlock,
  UserInfo,
  UserNumber,
  UserNumbers,
} from './styles'

export default function Explore() {
  return (
    <Template>
      <PageTitle>
        <User size={32} /> Perfil
      </PageTitle>
      <Container>
        <LeftBlock>
          <FakeInput placeholder="Buscar livro ou autor">
            <MagnifyingGlass size={20} />
          </FakeInput>
          <CardRating />
          <CardRating />
          <CardRating />
          <CardRating />
          <CardRating />
        </LeftBlock>
        <UserBlock>
          <UserInfo>
            <Image src="/images/books/Book.png" alt="" width="72" height="72" />
            <div>
              <h5>John Doe</h5>
              <time>membro desde 2019</time>
            </div>
          </UserInfo>
          <HR />
          <UserNumbers>
            <UserNumber>
              <BookOpen size={32} />
              <div>
                <h5>3853</h5>
                <span>Páginas lidas </span>
              </div>
            </UserNumber>
            <UserNumber>
              <Books size={32} />
              <div>
                <h5>10</h5>
                <span>Livros avaliados </span>
              </div>
            </UserNumber>
            <UserNumber>
              <UserList size={32} />
              <div>
                <h5>8</h5>
                <span>Autores lidos </span>
              </div>
            </UserNumber>
            <UserNumber>
              <BookmarkSimple size={32} />
              <div>
                <h5>Computação</h5>
                <span>Categoria mais lida </span>
              </div>
            </UserNumber>
          </UserNumbers>
        </UserBlock>
      </Container>
    </Template>
  )
}
