import Document, { Head, Html, Main, NextScript } from 'next/document'
// eslint-disable-next-line
import Script from 'next/script'

import { Footer, Github, NavBar, SponsoredBy } from '@thegametools/utils'

export const title = 'TheGame.tools' as const
const descr = 'Tools for RPGS & Boardgames' as const

const ogImg = 'https://storage.googleapis.com/thegametools/ogimg.png' as const

const config = {
  title,
  twitter: '@_mawburn',
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={descr} />
          <meta property="og:title" content={config.title} />
          <meta property="og:description" content={descr} />
          <meta property="og:image" content={ogImg} />
          <meta property="og:image:url" content={ogImg} />
          <meta property="og:image:secure_url" content={ogImg} />
          <meta property="og:site_name" content={descr} />
          <meta name="twitter:title" content={config.title} />
          <meta name="twitter:description" content={descr} />
          <meta name="twitter:image" content={ogImg} />
          <meta name="twitter:card" content="summary" />
          <meta name="description" content={descr} />
          <meta name="og:description" content={descr} />
          <meta name="twitter:creator" content={`@${config.twitter}`} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans:ital,wght@0,500;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SE0N2YF08V"></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-SE0N2YF08V');
            `}
          </Script>
        </Head>
        <body className="mb-10  min-h-screen bg-gradient-to-b from-slate-300 to-white">
          <NavBar subText="Tools for RPGS &amp; Boardgames" links={[]} />
          <SponsoredBy />
          <Main />
          <Footer />
          <NextScript />
          <Github />
        </body>
      </Html>
    )
  }
}

export default MyDocument
