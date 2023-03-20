import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  padding: '$5',
})

export const Logo = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 40px)',
  backgroundImage: `url(/images/login.png)`,
  backgroundSize: 'cover',
  width: '589px',
  borderRadius: '$md',
})

export const Login = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
  },

  h2: {
    fontSize: '$md',
    color: '$gray200',
    fontWeight: 'normal',

    marginBottom: '$10',
  },
})
