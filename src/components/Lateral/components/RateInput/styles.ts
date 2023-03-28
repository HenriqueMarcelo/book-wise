import { styled } from '@/src/styles/stitches.config'

export const Container = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$4',

  background: '$gray700',
  padding: '$6',
  borderRadius: '$md',
  transition: '.2s',
  marginBottom: '$3',

  p: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const User = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$4',

  img: {
    objectFit: 'cover',
    border: '1px solid $green100',
    borderRadius: '$full',
  },

  h5: {
    lineHeight: '$shorter',
    fontSize: '$md',
  },

  time: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const Buttons = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',
})

export const ActionButton = styled('button', {
  padding: '$2',
  lineHeight: '0',
  border: 'none',
  borderRadius: '$sm',
  background: '$gray600',
  cursor: 'pointer',
  transition: '.2s',

  '&:hover': {
    background: '$gray500',
  },
})
