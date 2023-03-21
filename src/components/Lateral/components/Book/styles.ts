import { styled } from '@/src/styles/stitches.config'

export const Container = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$10',

  background: '$gray700',
  padding: '$6 $8',
  borderRadius: '$md',
  transition: '.2s',
  marginBottom: '$10',

  '&>img': {
    borderRadius: '$sm',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const BookContainer = styled('div', {
  display: 'flex',
  gap: '$8',
  marginBottom: '$3',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h3: {
    lineHeight: '$short',
    fontSize: '$lg',
  },

  h4: {
    color: '$gray300',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$md',

    marginBottom: '$5',
  },
})

export const Number = styled('p', {
  color: '$gray400',
  fontSize: '$sm',
  marginTop: '$1',
})

export const Footer = styled('footer', {
  borderTop: '1px solid $gray600',
  padding: '$6 0',
  display: 'flex',
  gap: '$16',
})

export const BookNumber = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    color: '$green100',
  },

  h5: {
    lineHeight: '$base',
    fontSize: '$sm',
    color: '$gray300',
    fontWeight: '$regular',
  },

  span: {
    fontSize: '$md',
    color: '$gray200',
    fontWeight: '$bold',
  },
})
