import { Stars } from '@/src/components/Stars'
import Image from 'next/image'
import { Container, Header, User } from './styles'

export function Rating() {
  return (
    <Container>
      <Header>
        <User>
          <Image src="/images/books/Book.png" alt="" width="40" height="40" />
          <div>
            <h5>John Doe</h5>
            <time>Hoje</time>
          </div>
        </User>
        <Stars />
      </Header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        ratione modi? Corporis eveniet nesciunt, assumenda officia consequatur
        ratione fugiat incidunt vitae mollitia nobis labore maxime quia et nam
        tenetur. Earum?
      </p>
    </Container>
  )
}
