import { styled } from '@/src/styles/stitches.config'
import Link from 'next/link'

export const Container = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  background: '$gray700',
  padding: '$6',
  borderRadius: '$md',
  transition: '.2s',
  marginBottom: '$3',

  variants: {
    short: {
      true: {
        background: '$gray600',
      },
    },
  },

  time: {
    lineHeight: '$base',
    fontSize: '$sm',
    color: '$gray400',
  },

  '&:hover, &:focus': {
    boxShadow: '0 0 0 2px $gray600',
  },

  '&>img': {
    borderRadius: '$sm',
  },
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const User = styled(Link, {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$4',

  img: {
    objectFit: 'cover',
    border: '1px solid $green100',
    borderRadius: '$full',
  },

  h5: {
    lineHeight: '$base',
    fontSize: '$md',
  },
})

export const Body = styled('div', {
  display: 'flex',
  gap: '$5',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h3: {
    lineHeight: '$short',
    fontSize: '$md',
  },

  h4: {
    color: '$gray400',
    fontWeight: '$regular',
    lineHeight: '$base',

    marginBottom: '$5',
  },
})

export const ShortHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$3',
})
