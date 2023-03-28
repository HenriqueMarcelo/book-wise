import { Stars } from '@/src/components/Stars'
import { getDateFormattedAndRelative } from '@/src/utils/get-date-formatted-and-relative'
import { useSession } from 'next-auth/react'
import { Container, Header, User } from './styles'

interface RatingProps {
  image: string | null
  userId: string
  name: string
  date: Date
  text: string
  rate: number
}

export function Rating({ image, name, date, text, rate, userId }: RatingProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(date)

  const session = useSession()

  return (
    <Container self={userId === session?.data?.user.id}>
      <Header>
        <User href={`/profile/${userId}`}>
          <img
            src={image || 'images/logo-rocket.png'}
            alt=""
            width="40"
            height="40"
          />
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
