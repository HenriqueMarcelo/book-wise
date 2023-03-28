import { Star } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Container, HiddenButton } from './styles'

interface StarsInputProps {
  value: number
  size?: 'sm' | 'md' | 'lg'
  onChange: (value: number) => void
}

export function StarsInput({ size = 'sm', onChange, value }: StarsInputProps) {
  const [rating, setRating] = useState(value)

  useEffect(() => {
    setRating(value)
  }, [value])

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

  function handleSetRating(rating: number) {
    setRating(rating)
    onChange(rating)
  }

  return (
    <Container>
      <HiddenButton onClick={() => handleSetRating(1)} type="button">
        <Star size={iconSize} weight={rating >= 1 ? 'fill' : undefined} />
      </HiddenButton>
      <HiddenButton onClick={() => handleSetRating(2)} type="button">
        <Star size={iconSize} weight={rating >= 2 ? 'fill' : undefined} />
      </HiddenButton>
      <HiddenButton onClick={() => handleSetRating(3)} type="button">
        <Star size={iconSize} weight={rating >= 3 ? 'fill' : undefined} />
      </HiddenButton>
      <HiddenButton onClick={() => handleSetRating(4)} type="button">
        <Star size={iconSize} weight={rating >= 4 ? 'fill' : undefined} />
      </HiddenButton>
      <HiddenButton onClick={() => handleSetRating(5)} type="button">
        <Star size={iconSize} weight={rating >= 5 ? 'fill' : undefined} />
      </HiddenButton>
    </Container>
  )
}
