import { forwardRef, HTMLProps } from 'react'
import { Container } from './styles'

interface CustomTextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  currentLength: number
}

export const CustomTextArea = forwardRef<
  HTMLTextAreaElement,
  CustomTextAreaProps
>(({ maxLength, currentLength, ...rest }, ref) => {
  return (
    <Container>
      <textarea {...rest} ref={ref} maxLength={maxLength} />
      <span>
        {currentLength}/{maxLength}
      </span>
    </Container>
  )
})

CustomTextArea.displayName = 'CustomTextArea'
