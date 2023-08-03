import '@/styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import type { AppProps } from 'next/app';

// Add the brands (fab) icons to the library
library.add(fab);


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
