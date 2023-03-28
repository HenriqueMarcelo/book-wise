import { CustomTextArea } from '@/src/components/CustomTextArea'
import { StarsInput } from '@/src/components/StarsInput'
import { Check, X } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ActionButton, Buttons, Container, Header, User } from './styles'

export function RateInput() {
  const [rate, setRate] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm()

  function onSubmit(data: any) {
    console.log(data, rate)
  }

  function onReset() {
    setRate(0)
    reset()
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <User>
          <img src={'images/logo-rocket.png'} alt="" width="40" height="40" />
          Cristofer Rosser
        </User>
        <StarsInput
          value={rate}
          onChange={(value) => setRate(value)}
          size="lg"
        />
      </Header>
      <CustomTextArea
        maxLength={450}
        placeholder="Escreva sua avaliação"
        currentLength={0}
        disabled={isSubmitting}
        {...register('description')}
      />
      <Buttons>
        <ActionButton type="reset" disabled={isSubmitting} onClick={onReset}>
          <X size={24} color="#8381D9" />
        </ActionButton>
        <ActionButton type="submit" disabled={isSubmitting}>
          <Check size={24} color="#50B2C0" />
        </ActionButton>
      </Buttons>
    </Container>
  )
}
