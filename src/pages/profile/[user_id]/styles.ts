import { styled } from '@/src/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$16',
  alignItems: 'flex-start',
})

export const LeftBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})

export const UserBlock = styled('div', {
  flex: '0 0 308px',
  borderLeft: '1px solid $gray700',
  //   padding: '0 $14',
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '$5',

  img: {
    objectFit: 'cover',
    border: '1px solid $green100',
    borderRadius: '$full',
  },

  h5: {
    lineHeight: '$base',
    fontSize: '$lg',
  },

  time: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const HR = styled('div', {
  width: '32px',
  height: '4px',
  borderRadius: '$full',
  backgroundImage: '$gradient-horizontal',
  margin: '$8 auto',
})

export const UserNumbers = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  padding: '$5 $14',
})

export const UserNumber = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    color: '$green100',
  },

  h5: {
    lineHeight: '$base',
    fontSize: '$md',
  },

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },
})
