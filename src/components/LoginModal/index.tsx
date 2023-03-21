import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { LoginButton } from '../LoginButton'
import { Close, Content, Overlay } from './styles'

export function LoginModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Faça login para deixar sua avaliação</Dialog.Title>
        <Close>
          <X size={24} />
        </Close>
        <LoginButton>
          <Image src="/images/logo-google.png" alt="" width="32" height="32" />
          Entrar com Google
        </LoginButton>
        <LoginButton>
          <Image src="/images/logo-github.png" alt="" width="32" height="32" />
          Entrar com Github
        </LoginButton>
      </Content>
    </Dialog.Portal>
  )
}
