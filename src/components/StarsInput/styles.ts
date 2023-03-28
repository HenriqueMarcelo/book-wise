import { styled } from '@/src/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$1',
})

export const HiddenButton = styled('button', {
  lineHeight: 0,
  border: 'none',
  cursor: 'pointer',
  background: 'none',
  color: '$purple100',
  padding: 0,
})
