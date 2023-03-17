import { CardBookSimple } from '@/src/components/CardBookSimple'
import { FakeInput } from '@/src/components/FakeInput'
import { PageTitle } from '@/src/components/PageTitle'
import { Tag } from '@/src/components/Tag'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import Template from '../template'
import { Container, SearchForm, TagsContainer } from './styles'

export default function Explore() {
  return (
    <Template>
      <SearchForm>
        <PageTitle>
          <Binoculars size={32} /> Explorar
        </PageTitle>
        <FakeInput>
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
