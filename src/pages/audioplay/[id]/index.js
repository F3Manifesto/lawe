import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import moment from 'moment'

import playlist from 'src/data/playlist.json'
import Magritte from '@components/magritte'
import OldButton from '@components/old-button'

import styles from './styles.module.scss'

const AudioPlayer = dynamic(() => import('@components/audio-player'), {
  ssr: false
})

const AudioPlayPage = () => {
  const router = useRouter()

  const { id: playId } = router.query
  const playItem = playlist.find(item => item.id === playId)

  const getDateString = originalDateString => moment(originalDateString).format('MMM Do, YYYY')

  return (
    <div className={styles.wrapper}>
      <div className={styles.topPart}>
        <h1>
          {getDateString(playItem.date)}
        </h1>
        <div className={styles.audioPlayerWrapper}>
          <AudioPlayer
            file={playItem.url}
          />
        </div>
        <div className={styles.description}>
          { playItem.description }
        </div>

        <div className={styles.clickMe}>
          <OldButton
            text='Click Me'
            className={styles.clickMeButton}
            onClick={() => {
              window.open('/dancingman', '_self')
            }}
          />
        </div>
      </div>
      <Magritte />
    </div>
  )
}

export default AudioPlayPage