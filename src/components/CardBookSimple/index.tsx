import Image from 'next/image'
import { Stars } from '../Stars'
import { Container, Info } from './styles'

interface CardBookSimpleProps {
  size?: 'sm' | 'lg'
}

export function CardBookSimple({ size = 'sm' }: CardBookSimpleProps) {
  return (
    <Container>
      {size === 'sm' ? (
        <Image src="/images/books/Book.png" alt="" width="64" height="94" />
      ) : (
        <Image src="/images/books/Book.png" alt="" width="108" height="152" />
      )}
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
