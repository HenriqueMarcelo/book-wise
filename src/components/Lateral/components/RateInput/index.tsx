import { CustomTextArea } from '@/src/components/CustomTextArea'
import { StarsInput } from '@/src/components/StarsInput'
import { api } from '@/src/lib/axios'
import { useSession } from 'next-auth/react'
import { Check, X } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RatingWithUserProps } from '../..'
import { ActionButton, Buttons, Container, Header, User } from './styles'

interface RateInputProps {
  bookId: string
  finished: (rating: RatingWithUserProps) => void
}

export function RateInput({ bookId, finished }: RateInputProps) {
  const [rate, setRate] = useState(0)

  const session = useSession()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm()

  async function onSubmit(data: any) {
    const rating = await api.post(`/ratings/${bookId}`, {
      rate,
      description: data.description,
    })
    onReset()
    finished(rating.data as RatingWithUserProps)
  }

  function onReset() {
    setRate(0)
    reset()
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <User>
          <img
            src={session?.data?.user.image || 'images/logo-rocket.png'}
            alt=""
            width="40"
            height="40"
          />
          {session?.data?.user.name}
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
