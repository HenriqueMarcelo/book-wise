import { X } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import { LoginModalLink } from '../LoginModal/LoginModalLink'
import { Book } from './components/Book'
import { Rating } from './components/Rating'
import { CloseButton, Container, SideMenu, Title } from './styles'

interface LateralProps {
  onClose: () => void
}

export function Lateral({ onClose }: LateralProps) {
  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  function onCloseModalClick() {
    setIsOpen(false)
    setTimeout(() => {
      onClose()
    }, 250)
  }

  useEffect(() => {
    setIsOpen(true)
  }, [])

  if (containerRef.current) {
    containerRef.current.onclick = (e) => {
      if (e.target !== e.currentTarget) {
        return
      }
      onCloseModalClick()
    }
  }

  return (
    <Container open={isOpen} ref={containerRef}>
      <SideMenu open={isOpen}>
        <CloseButton onClick={onCloseModalClick}>
          <X size={24} />
        </CloseButton>
        <Book />
        <Title>
          <span>Avaliações</span>
          <LoginModalLink>
            <a>Avaliar</a>
          </LoginModalLink>
        </Title>
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
      </SideMenu>
    </Container>
  )
}
