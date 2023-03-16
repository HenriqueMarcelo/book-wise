import { styled } from '@/src/styles/stitches.config'
import Link from 'next/link'

export const Container = styled('aside', {
  width: '232px',
  height: 'calc(100vh - var(--space-5) - var(--space-5))',
  borderRadius: '$md',
  margin: '$5',
  backgroundImage: `url(/images/sidebar-bg.png)`,
  backgroundSize: 'cover',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',

  padding: '$10 $4 $6',
})

export const TopItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
})

export const Navigation = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const NavButton = styled(Link, {
  color: '$gray400',
  textDecoration: 'none',
  display: 'flex',
  gap: '$3',
  padding: '$2',
  transition: '.2s',

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',
        position: 'relative',

        '&::before': {
          content: '',
          position: 'absolute',
          width: '4px',
          height: '24px',
          left: '-20px',
          top: 'calc(50% - 24px/2)',
          background: '$gradient-vertical',
          borderRadius: '$full',
        },
      },
    },
  },
})

export const LoginButton = styled('button', {
  border: 'none',
  background: 'none',
  fontSize: '$4',

  fontWeight: 'bold',
  display: 'flex',
  gap: '$3',
  cursor: 'pointer',
  color: '$gray200',

  borderRadius: '$sm',
  padding: '$2 $3',
  transition: '.2s',

  svg: {
    color: '$green100',
  },

  '&:hover': {
    background: '$gray500',
  },
})
