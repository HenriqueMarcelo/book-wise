import { styled } from '@/src/styles/stitches.config'

export const Container = styled('article', {
  display: 'flex',
  gap: '$5',
  background: '$gray700',
  padding: '$5',
  borderRadius: '$md',
  transition: '.2s',
  marginBottom: '$3',

  '&:hover, &:focus': {
    boxShadow: '0 0 0 2px $gray600',
  },

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
