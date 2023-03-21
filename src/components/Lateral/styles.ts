import { styled } from '@/src/styles/stitches.config'

export const Container = styled('section', {
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'fixed',
  top: '0',
  left: '0',
  background: 'none',
  height: '100vh',
  width: '100vw',

  transition: 'all .15s ease-in',
  transictionDelay: '.1',

  variants: {
    open: {
      true: {
        background: '#000000c0',
        transition: 'all .25s ease-out',
      },
    },
  },
})

export const CloseButton = styled('button', {
  border: 'none',
  cursor: 'pointer',
  color: '$gray400',
  display: 'inline-flex',
  background: 'none',
  alignSelf: 'flex-end',
  marginBottom: '$4',

  '&:hover': {
    color: '$gray200',
  },
})

export const Title = styled('h6', {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '$sm',
  fontWeight: '$regular',
  marginBottom: '$4',
  color: '$gray200',

  'a, button': {
    color: '$purple100',
    fontWeight: '$bold',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '$md',

    '&:hover': {
      color: 'mediumpurple',
    },
  },
})

export const SideMenu = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  background: '$gray800',
  flex: '0 0 660px',
  padding: '$12',
  overflow: 'auto',

  transition: 'transform .25s ease-in',
  transform: 'translate(100%, 0)',

  [`> ${Title}`]: {
    marginBottom: '$4',
  },

  variants: {
    open: {
      true: {
        transform: 'translate(0, 0)',
        transition: 'transform .25s ease-out',
      },
    },
  },
})
