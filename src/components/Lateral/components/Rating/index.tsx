/* eslint-disable @next/next/no-img-element */
import { Stars } from '@/src/components/Stars'
// import Image from 'next/image'
import { Container, Header, User } from './styles'

interface RatingProps {
  image: string | null
  name: string
  date: Date
  text: string
  rate: number
  rating: any
}

export function Rating({ image, name, date, text, rate, rating }: RatingProps) {
  const dateString = new Date(date).toDateString()
  return (
    <Container>
      <Header>
        <User>
          {image ? (
            <img src={image} alt="" width="40" height="40" />
          ) : (
            <img src="images/logo-rocket.png" alt="" width="40" height="40" />
          )}
          <div>
            <h5>{name}</h5>
            <time>{dateString}</time>
          </div>
        </User>
        <Stars rating={rate} />
      </Header>
      <p>{text}</p>
    </Container>
  )
}
