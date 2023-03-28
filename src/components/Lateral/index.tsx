import { api } from '@/src/lib/axios'
import { BookWithRatingAndCategories } from '@/src/pages/explore/index.page'
import { Rating as RatingPrisma, User as UserPrisma } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { CircleNotch, X } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import { LoginModalLink } from '../LoginModal/LoginModalLink'
import { Book } from './components/Book'
import { RateInput } from './components/RateInput'
import { Rating } from './components/Rating'
import { CloseButton, Container, SideMenu, Title } from './styles'

interface LateralProps {
  onClose: () => void
  book: BookWithRatingAndCategories
}

type RatingProps = RatingPrisma & {
  user: UserPrisma
}

export function Lateral({ onClose, book }: LateralProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [ratings, setRatings] = useState<RatingProps[] | null>(null)
  const [showRateInput, setShowRateInput] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const session = useSession()

  function onCloseModalClick() {
    setIsOpen(false)
    setTimeout(() => {
      onClose()
    }, 250)
  }

  useEffect(() => {
    setIsOpen(true)
  }, [])

  useEffect(() => {
    async function loadRatings() {
      // await new Promise((resolve) => setTimeout(resolve, 2000))
      const response = await api.get(`/books/${book.id}`)
      if (response.data) {
        setRatings(response.data.book.ratings)
      }
    }
    loadRatings()
  }, [book.id])

  if (containerRef.current) {
    containerRef.current.onclick = (e) => {
      if (e.target !== e.currentTarget) {
        return
      }
      onCloseModalClick()
    }
  }

  function handleShowRate() {
    setShowRateInput(true)
  }

  return (
    <Container open={isOpen} ref={containerRef}>
      <SideMenu open={isOpen}>
        <CloseButton onClick={onCloseModalClick}>
          <X size={24} />
        </CloseButton>
        <Book book={book} />
        <Title>
          <span>Avaliações</span>

          {session.status === 'unauthenticated' && (
            <LoginModalLink>
              <a>Avaliar</a>
            </LoginModalLink>
          )}

          {session.status === 'authenticated' && (
            <a onClick={handleShowRate}>Avaliar</a>
          )}
        </Title>
        {showRateInput && <RateInput />}
        {ratings ? (
          ratings?.map((rating) => (
            <Rating
              key={rating.id}
              text={rating.description}
              date={rating.created_at}
              name={rating.user.name}
              userId={rating.user.id}
              image={rating.user.image}
              rate={rating.rate}
            />
          ))
        ) : (
          <CircleNotch className="loading" size={52} />
        )}
      </SideMenu>
    </Container>
  )
}
