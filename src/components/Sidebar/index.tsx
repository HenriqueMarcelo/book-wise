import {
  Container,
  LoginButton,
  NavButton,
  Navigation,
  TopItems,
} from './styles'
import logo from '../../assets/images/logo.svg'
import Image from 'next/image'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'
import { useRouter } from 'next/router'

export function Sidebar() {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <Container>
      <TopItems>
        <Image height={32} width={128} src={logo} alt="" />
        <Navigation>
          <NavButton href="/home" active={currentRoute === '/home'}>
            <ChartLineUp size={24} /> Início
          </NavButton>
          <NavButton href="/explore" active={currentRoute === '/explore'}>
            <Binoculars size={24} /> Explorar
          </NavButton>
          <NavButton href="/profile" active={currentRoute === '/profile'}>
            <User size={24} />
            Perfil
          </NavButton>
        </Navigation>
      </TopItems>
      <LoginButton>
        Fazer login <SignIn size={20} weight="fill" />
      </LoginButton>
    </Container>
  )
}
