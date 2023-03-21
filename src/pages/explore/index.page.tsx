import { CardBookSimple } from '@/src/components/CardBookSimple'
import { FakeInput } from '@/src/components/FakeInput'
import { PageTitle } from '@/src/components/PageTitle'
import { Lateral } from '@/src/components/Lateral'
import { Tag } from '@/src/components/Tag'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import Template from '../template'
import { Container, SearchForm, TagsContainer } from './styles'
import { useState } from 'react'

export default function Explore() {
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
        <Tag>Computação</Tag>
        <Tag>Educação</Tag>
        <Tag>Fantasia</Tag>
        <Tag>Ficção científica</Tag>
        <Tag>Horror</Tag>
        <Tag>HQs</Tag>
        <Tag>Suspense</Tag>
      </TagsContainer>
      <Container>
        <button onClick={handleSelectBook}> abrir</button>
        <CardBookSimple size="lg" />
        <CardBookSimple size="lg" />
        <CardBookSimple size="lg" />
        <CardBookSimple size="lg" />
        <CardBookSimple size="lg" />
        <CardBookSimple size="lg" />
        <div />
        <div />
        <div />
      </Container>
    </Template>
  )
}
