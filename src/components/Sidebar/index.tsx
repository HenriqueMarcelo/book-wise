import {
  Aside,
  Container,
  LoginButton,
  NavButton,
  Navigation,
  TopItems,
} from './styles'
import logo from '../../assets/images/logo.svg'
import Image from 'next/image'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'

export function Sidebar() {
  const session = useSession()
  const router = useRouter()
  const currentRoute = router.pathname

  function handleLogout() {
    signOut({ callbackUrl: '/' })
  }

  function handleGoToLogin() {
    router.push('/')
  }

  return (
    <Container>
      <Aside>
        <TopItems>
          <Image height={32} width={128} src={logo} alt="" />
          <Navigation>
            <NavButton href="/home" active={currentRoute === '/home'}>
              <ChartLineUp size={24} /> Início
            </NavButton>
            <NavButton href="/explore" active={currentRoute === '/explore'}>
              <Binoculars size={24} /> Explorar
            </NavButton>
            {session.status === 'authenticated' && (
              <NavButton
                href={`/profile/${session.data.user.id}`}
                active={currentRoute.includes('profile')}
              >
                <User size={24} />
                Perfil
              </NavButton>
            )}
          </Navigation>
        </TopItems>

        {session.status === 'unauthenticated' && (
          <LoginButton onClick={handleGoToLogin}>
            <strong>Fazer login</strong>
            <SignIn size={20} weight="fill" />
          </LoginButton>
        )}

        {session.status === 'authenticated' && (
          <LoginButton onClick={handleLogout}>
            <img
              src={session.data.user?.image || 'images/logo-rocket.png'}
              alt=""
              width="32"
              height="32"
            />
            {String(session.data.user?.name).split(' ')[0]}
            <SignOut size={20} color="#F75A68" />
          </LoginButton>
        )}
      </Aside>
    </Container>
  )
}
