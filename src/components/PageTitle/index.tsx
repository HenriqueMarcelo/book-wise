import { Container } from './styles'

import { ReactNode } from 'react'

export function PageTitle({
  children, // will be a page or nested layout
}: {
  children: ReactNode
}) {
  return <Container>{children}</Container>
}
