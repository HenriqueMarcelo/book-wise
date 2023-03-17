import { styled } from '@/src/styles/stitches.config'

export const Container = styled('button', {
  border: '1px solid $purple100',
  borderRadius: '$full',
  background: 'none',
  color: '$purple100',
  padding: '$1 $4',
  lineHeight: '$tall',

  cursor: 'pointer',

  variants: {
    selected: {
      true: {
        border: '1px solid $purple200',
        background: '$purple200',
        color: '$gray100',
      },
    },
  },

  '&:hover': {
    color: '$gray100',
    border: '1px solid $gray100',
  },
})
