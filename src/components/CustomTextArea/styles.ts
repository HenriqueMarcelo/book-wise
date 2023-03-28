import { styled } from '@/src/styles/stitches.config'

export const Container = styled('label', {
  display: 'flex',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  color: '$gray500',
  cursor: 'text',
  transition: '.2s',
  position: 'relative',
  background: '$gray800',

  '&:focus-within': {
    border: '1px solid $green200',
    color: '$green200',
  },

  textarea: {
    padding: '$3 $5',
    flex: '1',
    border: 'none',
    maxWidth: '100%',
    display: 'block',
    background: 'none',
    color: '$gray100',
    fontSize: '$sm',
    width: '371px',

    resize: 'none',
    height: '164px',

    '&:focus': {
      outline: 'none',
    },
  },

  span: {
    position: 'absolute',
    bottom: 5,
    right: 8,
    fontSize: '$xs',
  },
})
