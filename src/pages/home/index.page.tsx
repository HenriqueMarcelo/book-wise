import { CardBookFull } from '@/src/components/CardBookFull'
import { CardBookSimple } from '@/src/components/CardBookSimple'
import { PageTitle } from '@/src/components/PageTitle'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import Template from '../template'
import { Container, RightColumn, Title } from './styles'

export default function Home() {
  return (
    <Template>
      <PageTitle>
        <ChartLineUp size={32} /> Início
      </PageTitle>
      <Container>
        <div>
          <Title>
            <span>Sua última leitura</span>
            <a href="">
              Ver todas <CaretRight size={16} />
            </a>
          </Title>
          <CardBookFull user={false} />

          <br />
          <Title>
            <span>Avaliações mais recentes</span>
            <a href=""></a>
          </Title>
          <CardBookFull />
          <CardBookFull />
          <CardBookFull />
          <CardBookFull />
        </div>
        <RightColumn>
          <Title>
            <span>Livros Populares</span>
            <a href="">
              Ver todos <CaretRight size={16} />
            </a>
          </Title>
          <CardBookSimple />
          <CardBookSimple />
          <CardBookSimple />
        </RightColumn>
      </Container>
    </Template>
  )
}
