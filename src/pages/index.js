import React, { useEffect } from 'react'
import { Router } from 'next/router'
import Head from 'next/head'
import RegratsTitleCard from '@components/RugratsTitleCard'
import styles from './styles.module.scss'

const LandingPage = () => {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('485692459240447')
        ReactPixel.pageView()

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [])

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'PW3R Pirate web3 radio',
    title: 'AU.DEO - PW3R Pirate web3 radio',
    description:
      'AU.DEO focuses on open source and CC0 as a breakaway statement and essential embrace of the power open content and culture have that inspires people to move like they mean it, while annoying the hell out of the old control freaks that would rather we all just know our place and keep quiet.',
  }

  // console.log('products: ', products)

  return (
    <div className={styles.wrapper}>
      <Head>
        <meta
          name="description"
          content="AU.DEO focuses on open source and CC0 as a breakaway statement and essential embrace of the power open content and culture have that inspires people to move like they mean it, while annoying the hell out of the old control freaks that would rather we all just know our place and keep quiet."
        />
        <meta property="og:title" content="AU.DEO - PW3R Pirate web3 radio" />
        <meta
          property="og:description"
          content="AU.DEO focuses on open source and CC0 as a breakaway statement and essential embrace of the power open content and culture have that inspires people to move like they mean it, while annoying the hell out of the old control freaks that would rather we all just know our place and keep quiet."
        />
        <meta property="og:url" content="https://pw3r.au-deo.xyz/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AU.DEO" />
        <meta name="twitter:title" content="Patrons Landing page" />
        <meta
          name="twitter:description"
          content="AU.DEO focuses on open source and CC0 as a breakaway statement and essential embrace of the power open content and culture have that inspires people to move like they mean it, while annoying the hell out of the old control freaks that would rather we all just know our place and keep quiet."
        />
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <section className={[styles.titleWrapper].join(' ')}>
        <div className={styles.title}>
          PW3R
        </div>
        <p>
          Pirate web3 radio
        </p>
      </section>

      <section className={styles.contentWrapper}>
        <a href='/tunein'>
        <RegratsTitleCard title='write TUNE IN' />
        </a>
      </section>
      
    </div>
  )
}

export default LandingPage
