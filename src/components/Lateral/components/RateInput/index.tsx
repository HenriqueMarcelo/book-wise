import { CustomTextArea } from '@/src/components/CustomTextArea'
import { Stars } from '@/src/components/Stars'
import { Check, X } from 'phosphor-react'
import { ActionButton, Buttons, Container, Header, User } from './styles'

export function RateInput() {
  return (
    <Container>
      <Header>
        <User>
          <img src={'images/logo-rocket.png'} alt="" width="40" height="40" />
          Cristofer Rosser
        </User>
        <Stars size="lg" />
      </Header>
      <CustomTextArea
        maxLength={450}
        placeholder="Escreva sua avaliação"
        currentLength={0}
      />
      <Buttons>
        <ActionButton>
          <X size={24} color="#8381D9" />
        </ActionButton>
        <ActionButton>
          <Check size={24} color="#50B2C0" />
        </ActionButton>
      </Buttons>
    </Container>
  )
}
