import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo
        title="Book Wise"
        description="Uma rede social para amantes da leitura que gostam de compartilhar suas opiniões sobre os livros que já leram."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://book-wise-two.vercel.app/',
          siteName: 'Book Wise',
          images: [{ url: 'https://book-wise-two.vercel.app/og-image.png' }],
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
