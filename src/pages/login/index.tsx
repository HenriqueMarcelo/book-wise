import { Container, Login, Logo } from './styles'
import logo from '../../assets/images/logo.svg'
import Image from 'next/image'
import { LoginButton } from '@/src/components/LoginButton'
import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  async function handleSignInGithub() {
    const r = await signIn('github')
    console.log('Resposta Autenticação', r)
  }

  const session = useSession()

  console.log(session)

  return (
    <Container>
      <Logo>
        <Image height={186} width={419} src={logo} alt="" />
      </Logo>
      <Login>
        <h1>Boas vindas!</h1>
        <h2>Faça seu login ou acesse como visitante.</h2>
        <LoginButton>
          <Image src="/images/logo-google.png" alt="" width="32" height="32" />
          Entrar com Google
        </LoginButton>
        <LoginButton onClick={handleSignInGithub}>
          <Image src="/images/logo-github.png" alt="" width="32" height="32" />
          Entrar com Github
        </LoginButton>
        <LoginButton>
          <Image src="/images/logo-rocket.png" alt="" width="32" height="32" />
          Acessar como visitante
        </LoginButton>
      </Login>
    </Container>
  )
}
