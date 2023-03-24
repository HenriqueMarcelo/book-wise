import { getDateFormattedAndRelative } from '@/src/utils/get-date-formatted-and-relative'
import { Book, Rating, User as UserPrisma } from '@prisma/client'
import Image from 'next/image'
import { Stars } from '../Stars'
import { Body, Container, Header, Info, ShortHeader, User } from './styles'

interface CardRatingFullProps {
  user?: UserPrisma
  book: Book
  rating: Rating
}

export function CardRatingFull({ user, book, rating }: CardRatingFullProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(rating.created_at)

  return (
    <Container short={!user}>
      {user && (
        <Header>
          <User href={`/profile/${user.id}`}>
            <img
              src={user.avatar_url || 'images/logo-rocket.png'}
              alt=""
              width="40"
              height="40"
            />
            <div>
              <h5>{user.name}</h5>
              <time title={dateFormatted} dateTime={dateString}>
                {dateRelativeToNow}
              </time>
            </div>
          </User>
          <Stars />
        </Header>
      )}
      <Body>
        <Image src={`/${book.cover_url}`} alt="" width="108" height="152" />
        <Info>
          {!user && (
            <ShortHeader>
              <time title={dateFormatted} dateTime={dateString}>
                {dateRelativeToNow}
              </time>
              <Stars />
            </ShortHeader>
          )}
          <div>
            <h3>{book.name}</h3>
            <h4>{book.author}</h4>
          </div>
          <p>{rating.description}</p>
        </Info>
      </Body>
    </Container>
  )
}
