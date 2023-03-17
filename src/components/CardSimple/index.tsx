import Image from 'next/image'
import { Stars } from '../Stars'
import { Container, Info } from './styles'

export function CardSimple() {
  return (
    <Container>
      <Image src="/images/books/Book.png" alt="" width="64" height="94" />
      <Info>
        <div>
          <h3>A revolução dos bichos</h3>
          <h4>George Orwell</h4>
        </div>
        <Stars />
      </Info>
    </Container>
  )
}
