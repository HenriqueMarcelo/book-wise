import { Container, Login, Logo } from './styles'
import logo from '../../assets/images/logo.svg'
import Image from 'next/image'
import { LoginButton } from '@/src/components/LoginButton'
import { signIn, useSession } from 'next-auth/react'
import { CircleNotch } from 'phosphor-react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth].api'

export default function Home() {
  const session = useSession()

  async function handleSignInGithub() {
    await signIn('github')
  }

  async function handleSignInGoogle() {
    await signIn('google')
  }

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
          <LoginButton as={Link} href="/home">
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  if (session?.user) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
