import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FaBeer } from "react-icons/fa";
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return(
<Component {...pageProps} />
  )
}

export default MyApp
