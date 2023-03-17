import { PageTitle } from '@/src/components/PageTitle'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import Template from '../template'
import { Container, Title } from './styles'

export default function Home() {
  return (
    <Template>
      <PageTitle>
        <ChartLineUp size={32} /> Início
      </PageTitle>
      <Container>
        <div>
          <Title>
            <span>Avaliações mais recentes</span>
            <a href=""></a>
          </Title>
        </div>
        <div>
          <Title>
            <span>Livros Populares</span>
            <a href="">
              Ver todos <CaretRight size={16} />
            </a>
          </Title>
        </div>
      </Container>
    </Template>
  )
}
