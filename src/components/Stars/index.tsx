import { Star, StarHalf } from 'phosphor-react'
import { Container } from './styles'

interface StarProps {
  size?: 'sm' | 'md' | 'lg'
}

export function Stars({ size = 'sm' }: StarProps) {
  const rating = 3.5
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
          <StarHalf size={iconSize} weight="fill" />
        ) : (
          <Star size={iconSize} weight={rating >= i + 1 ? 'fill' : undefined} />
        )
      })}
    </Container>
  )
}
