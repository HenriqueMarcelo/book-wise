import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'
import { Stars } from '../Stars'
import { Container, Info } from './styles'

interface CardBookSimpleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'lg'
}

export function CardBookSimple({ size = 'sm', ...rest }: CardBookSimpleProps) {
  return (
    <Container {...rest}>
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
