import { ReactNode } from 'react'
import { Container } from './styles'

export function FakeInput({ children }: { children: ReactNode }) {
  return (
    <Container>
      <input />
      {children}
    </Container>
  )
}
