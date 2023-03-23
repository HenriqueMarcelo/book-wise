import { HTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

interface TagProps extends HTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  children: ReactNode
}

export function Tag({ children, selected, ...rest }: TagProps) {
  return (
    <Container selected={selected} {...rest}>
      {children}
    </Container>
  )
}
