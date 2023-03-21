import { X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Book } from './components/Book'
import { Rating } from './components/Rating'
import { CloseButton, Container, SideMenu, Title } from './styles'

interface LateralProps {
  onClose: () => void
}

export function Lateral({ onClose }: LateralProps) {
  const [isOpen, setIsOpen] = useState(false)

  function onCloseModalClick() {
    setIsOpen(false)
    setTimeout(() => {
      onClose()
    }, 250)
  }

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <Container open={isOpen}>
      <SideMenu open={isOpen}>
        <CloseButton onClick={onCloseModalClick}>
          <X size={24} />
        </CloseButton>
        <Book />
        <Title>
          <span>Avaliações</span>
          <a href="">Avaliar</a>
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
