import { styled } from '@/src/styles/stitches.config'

export const Container = styled('section', {
  display: 'flex',
  gap: '$24',
  padding: '$5',

  '&>main': {
    paddingTop: '$13',
  },
})
