import { ReactNode } from 'react'
import { Container } from './styles'

interface TagProps {
  selected?: boolean
  children: ReactNode
}

export function Tag({ children, selected }: TagProps) {
  return <Container selected={selected}>{children}</Container>
}
