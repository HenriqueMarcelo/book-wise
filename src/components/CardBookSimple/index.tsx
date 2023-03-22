import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'
import { Stars } from '../Stars'
import { Container, Info } from './styles'

interface CardBookSimpleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'lg'
  cover: string
  name: string
  author: string
  rating: number
}

export function CardBookSimple({
  size = 'sm',
  cover,
  name,
  author,
  rating,
  ...rest
}: CardBookSimpleProps) {
  return (
    <Container {...rest}>
      {size === 'sm' ? (
        <Image src={`/${cover}`} alt="" width="64" height="94" />
      ) : (
        <Image src={`/${cover}`} alt="" width="108" height="152" />
      )}
      <Info>
        <div>
          <h3>{name}</h3>
          <h4>{author}</h4>
        </div>
        <Stars rating={rating} />
      </Info>
    </Container>
  )
}
