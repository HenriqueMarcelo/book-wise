import Image from 'next/image'
import { Stars } from '../Stars'
import { Body, Container, Header, Info, User } from './styles'

export function CardBookFull() {
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
      <Body>
        <Image src="/images/books/Book.png" alt="" width="108" height="152" />
        <Info>
          <div>
            <h3>A revolução dos bichos</h3>
            <h4>George Orwell</h4>
          </div>
          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh... ver mais
          </p>
        </Info>
      </Body>
    </Container>
  )
}
