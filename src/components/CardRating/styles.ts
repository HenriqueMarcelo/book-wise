import { styled } from '@/src/styles/stitches.config'

export const Time = styled('time', {
  fontSize: '$sm',
  color: '$gray300',
  marginBottom: '$2',
  display: 'inline-block',
})

export const Card = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  background: '$gray700',
  padding: '$6',
  borderRadius: '$md',
  transition: '.2s',
  marginBottom: '$3',

  '&:hover, &:focus': {
    boxShadow: '0 0 0 2px $gray600',
  },
})

export const CardHeader = styled('div', {
  display: 'flex',
  gap: '$5',

  '&>img': {
    borderRadius: '$sm',
  },
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h3: {},

  h4: {
    color: '$gray400',
    fontWeight: '$regular',
  },
})
