import { styled } from '@/src/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$16',

  '& > div': {
    width: '100%',
  },
})

export const RightColumn = styled('div', {
  flex: '0 0 324px',
})

export const Title = styled('h2', {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '$sm',
  fontWeight: '$medium',
  marginBottom: '$4',

  a: {
    color: '$purple100',
    fontWeight: '$bold',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',

    '&:hover': {
      color: 'mediumpurple',
    },
  },
})
