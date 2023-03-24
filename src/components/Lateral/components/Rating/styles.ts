import { styled } from '@/src/styles/stitches.config'
import Link from 'next/link'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$4',

  background: '$gray700',
  padding: '$6',
  borderRadius: '$md',
  transition: '.2s',
  marginBottom: '$3',

  p: {
    color: '$gray400',
    fontSize: '$sm',
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
    lineHeight: '$shorter',
    fontSize: '$md',
  },

  time: {
    color: '$gray400',
    fontSize: '$sm',
  },
})
