import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <title>DARTHGART</title>
      <link rel="icon" type="image/png" href="/favicon.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="darthgar.dev"
        content="This is my personal website where I share my experiences and knowledge about my interests in the world of programming"
      />
      <script src="https://kit.fontawesome.com/08fa0f78f5.js" crossOrigin="anonymous"></script>
      <body className='bg-emerald-950'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
