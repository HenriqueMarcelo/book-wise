import { styled } from '@/src/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'
import { LoginButton } from '../LoginButton'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: '0',
  backgroundColor: '#000000c0',
})

export const Content = styled(Dialog.Content, {
  width: '30rem',
  borderRadius: '$md',
  padding: '$14 $18',
  background: '$gray700',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  h2: {
    textAlign: 'center',
    color: '$gray200',
    fontSize: '$md',

    marginBottom: '$10',
  },
  [`> ${LoginButton}`]: {
    width: '100%',
  },
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  backgroundColor: 'transparent',
  border: '0',
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: '0',
  cursor: 'pointer',
  color: '$gray100',
})
