import { styled } from '@/src/styles/stitches.config'

export const Container = styled('h1', {
  display: 'flex',
  gap: '$3',
  fontWeight: '$bold',
  marginBottom: '$10',

  svg: {
    color: '$green100',
  },
})
