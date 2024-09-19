import Script from 'next/script'
import { Html, Main, NextScript, Head } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script id="trust-pulse">
          {`
          !function(w,d,s,n,r,a){(w._tpq=w._tpq||[]).push(['init',n]),(r=d.createElement(s)).type='text/javascript',r.src='https://a.trstplse.com/app/js/api.min.js',r.async=!0,(a=d.getElementsByTagName(s)[0]).parentNode.insertBefore(r,a)}(window,document,'script',10418);
          `}
        </Script>
      </body>
    </Html>
  )
}
