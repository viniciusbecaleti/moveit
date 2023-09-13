import type { AppProps } from 'next/app'
import { Inter, Rajdhani } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-rajdhani',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} ${rajdhani.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
