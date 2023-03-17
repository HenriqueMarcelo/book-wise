import { Star, StarHalf } from 'phosphor-react'
import { Container } from './styles'

export function Stars() {
  const rating = 3.5
  return (
    <Container>
      {Array.from({ length: 5 }).map((_, i) => {
        return rating < i + 1 && rating > i ? (
          <StarHalf size={14} weight="fill" />
        ) : (
          <Star size={14} weight={rating >= i + 1 ? 'fill' : undefined} />
        )
      })}
    </Container>
  )
}
