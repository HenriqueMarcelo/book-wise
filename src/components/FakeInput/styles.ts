import { styled } from '@/src/styles/stitches.config'

export const Container = styled('label', {
  display: 'flex',
  border: '1px solid $gray500',
  padding: '$3 $5',
  borderRadius: '$sm',
  color: '$gray500',
  cursor: 'text',
  transition: '.2s',

  '&:focus-within': {
    border: '1px solid $green200',
    color: '$green200',
  },

  input: {
    flex: '1',
    border: 'none',
    maxWidth: '100%',
    display: 'block',
    background: 'none',
    color: '$gray100',
    fontSize: '$sm',
    width: '371px',

    '&:focus': {
      outline: 'none',
    },
  },
  svg: {},
})
