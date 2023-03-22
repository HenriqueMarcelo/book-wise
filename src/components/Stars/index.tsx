import { Star, StarHalf } from 'phosphor-react'
import { Container } from './styles'

interface StarProps {
  size?: 'sm' | 'md' | 'lg'
  rating?: number
}

export function Stars({ size = 'sm', rating = 3.5 }: StarProps) {
  let iconSize = 14

  switch (size) {
    case 'sm':
      iconSize = 14
      break
    case 'md':
      iconSize = 18
      break
    case 'lg':
      iconSize = 24
      break
    default:
      iconSize = 14
      break
  }

  return (
    <Container>
      {Array.from({ length: 5 }).map((_, i) => {
        return rating < i + 1 && rating > i ? (
          <StarHalf key={i} size={iconSize} weight="fill" />
        ) : (
          <Star
            key={i}
            size={iconSize}
            weight={rating >= i + 1 ? 'fill' : undefined}
          />
        )
      })}
    </Container>
  )
}
