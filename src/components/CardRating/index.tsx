import { getDateFormattedAndRelative } from '@/src/utils/get-date-formatted-and-relative'
import { Book, Rating } from '@prisma/client'
import Image from 'next/image'
import { Stars } from '../Stars'
import { Time, Card, Info, CardHeader } from './styles'

interface CardRatingProps {
  book: Book
  rating: Rating
}

export function CardRating({ book, rating }: CardRatingProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(rating.created_at)
  return (
    <div>
      <Time title={dateFormatted} dateTime={dateString}>
        {dateRelativeToNow}
      </Time>
      <Card>
        <CardHeader>
          <Image src={`/${book.cover_url}`} alt="" width="108" height="152" />
          <Info>
            <div>
              <h3>{book.name}</h3>
              <h4>{book.author}</h4>
            </div>
            <Stars />
          </Info>
        </CardHeader>
        <p>{rating.description}</p>
      </Card>
    </div>
  )
}
