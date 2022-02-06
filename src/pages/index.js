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
    '@type': 'LAWE Live At the Worlds Edge',
    title: 'LAWE- Live At the Worlds Edge,
    description:
      'LAWE is the web3 underground free radio. With a new session streamed late night every week, we bring open source nomadic tunes from curated NFT music artists and storytellers.',
  }

  // console.log('products: ', products)

  return (
    <div className={styles.wrapper}>
      <Head>
        <meta
          name="description"
          content="LAWE is the web3 underground free radio. With a new session streamed late night every week, we bring open source nomadic tunes from curated NFT music artists and storytellers."
        />
        <meta property="og:title" content="LAWE- Live At the World's Edge" />
        <meta
          property="og:description"
          content="LAWE is the web3 underground free radio. With a new session streamed late night every week, we bring open source nomadic tunes from curated NFT music artists and storytellers."
        />
        <meta property="og:url" content="https://pw3r.au-deo.xyz/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@LAWE" />
        <meta name="twitter:title" content="Patrons Landing page" />
        <meta
          name="twitter:description"
          content="LAWE is the web3 underground free radio. With a new session streamed late night every week, we bring open source nomadic tunes from curated NFT music artists and storytellers."
        />
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <section className={[styles.titleWrapper].join(' ')}>
        <div className={styles.title}>
          
          LAWE

        </div>
        <p>
          
          Live At the World's Edge

        </p>
      </section>

      <section className={styles.contentWrapper}>
        <a href='/tunein'>
        <RegratsTitleCard title='TUNE IN' />
        </a>
      </section>
      
    </div>
  )
}

export default LandingPage
