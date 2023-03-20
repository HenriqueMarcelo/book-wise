import { styled } from '@/src/styles/stitches.config'

export const LoginButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '$4',

  background: '$gray600',
  padding: '$5 $16 $5 $6',
  cursor: 'pointer',
  border: 'none',

  borderRadius: '$md',

  color: '$gray200',
  fontSize: '$lg',
  fontWeight: '$bold',

  transition: '.2s',

  '&:hover': {
    background: '$gray500',
  },
})
