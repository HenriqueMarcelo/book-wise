import * as Dialog from '@radix-ui/react-dialog'
import { LoginModal } from '@/src/components/LoginModal'
import { ReactNode } from 'react'

export function LoginModalLink({ children }: { children: ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <LoginModal />
    </Dialog.Root>
  )
}
