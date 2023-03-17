import { styled } from '@/src/styles/stitches.config'

export const Container = styled('section', {
  display: 'flex',
  padding: '$5',

  '&>main': {
    padding: '$13 $24',
  },
})
