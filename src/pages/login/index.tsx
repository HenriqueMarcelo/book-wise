import { Container, Login, Logo } from './styles'
import logo from '../../assets/images/logo.svg'
import Image from 'next/image'
import { LoginButton } from '@/src/components/LoginButton'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { CircleNotch } from 'phosphor-react'

export default function Home() {
  const router = useRouter()
  const session = useSession()

  async function handleSignInGithub() {
    await signIn('github')
  }

  async function handleSignInGoogle() {
    await signIn('google')
  }

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/home')
    }
  }, [session, router])

  return (
    <Container>
      <Logo>
        <Image height={186} width={419} src={logo} alt="" />
      </Logo>
      {session.status !== 'unauthenticated' ? (
        <Login>
          <CircleNotch className="loading" size={52} />
        </Login>
      ) : (
        <Login>
          <h1>Boas vindas!</h1>
          <h2>Faça seu login ou acesse como visitante.</h2>
          <LoginButton onClick={handleSignInGoogle}>
            <Image
              src="/images/logo-google.png"
              alt=""
              width="32"
              height="32"
            />
            Entrar com Google
          </LoginButton>
          <LoginButton onClick={handleSignInGithub}>
            <Image
              src="/images/logo-github.png"
              alt=""
              width="32"
              height="32"
            />
            Entrar com Github
          </LoginButton>
          <LoginButton>
            <Image
              src="/images/logo-rocket.png"
              alt=""
              width="32"
              height="32"
            />
            Acessar como visitante
          </LoginButton>
        </Login>
      )}
    </Container>
  )
}
