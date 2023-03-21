import { Book } from './components/Book'
import { Rating } from './components/Rating'
import { Container, SideMenu, Title } from './styles'

export function Lateral() {
  return (
    <Container>
      <SideMenu>
        <Book />
        <Title>
          <span>Avaliações</span>
          <a href="">Avaliar</a>
        </Title>
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
      </SideMenu>
    </Container>
  )
}
