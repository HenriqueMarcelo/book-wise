/* eslint-disable @next/next/no-img-element */
import { Stars } from '@/src/components/Stars'
import { getDateFormattedAndRelative } from '@/src/utils/get-date-formatted-and-relative'
import { Container, Header, User } from './styles'

interface RatingProps {
  image: string | null
  name: string
  date: Date
  text: string
  rate: number
}

export function Rating({ image, name, date, text, rate }: RatingProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(date)
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
            <time title={dateFormatted} dateTime={dateString}>
              {dateRelativeToNow}
            </time>
          </div>
        </User>
        <Stars rating={rate} />
      </Header>
      <p>{text}</p>
    </Container>
  )
}
