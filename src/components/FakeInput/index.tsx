import { forwardRef, HTMLProps, ReactNode } from 'react'
import { Container } from './styles'

interface FakeInputProps extends HTMLProps<HTMLInputElement> {
  children: ReactNode
}

export const FakeInput = forwardRef<HTMLInputElement, FakeInputProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Container>
        <input {...rest} ref={ref} />
        {children}
      </Container>
    )
  },
)

FakeInput.displayName = 'FakeInput'
