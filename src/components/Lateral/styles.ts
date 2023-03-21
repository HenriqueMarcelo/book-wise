import { styled } from '@/src/styles/stitches.config'

export const Container = styled('section', {
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'fixed',
  top: '0',
  left: '0',
  background: '#000000c0',
  height: '100vh',
  width: '100vw',

  overflow: 'auto',
})

export const SideMenu = styled('section', {
  background: '$gray800',
  flex: '0 0 660px',
  padding: '$12',
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
