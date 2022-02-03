import React from 'react'
import Interference from '@components/interference'
import playlist from 'src/data/playlist.json'
import styles from './styles.module.scss'
import moment from 'moment'

const getDateString = fromDateString => {
  return moment(fromDateString).format('dddd MMMM Do, YYYY')
}

const Tunein = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          PW3R
        </div>
        <p>
          Pirate web3 radio
        </p>
        <div className={styles.description}>
          Welcome to PW3R, the highest fidelity Pirate Web3 Radio.
          <br /><br />
          From the heights of the underground we are bringing you the latest and greatest music x fashion collaborations, entirely indie, enticingly original, all too loud to put down.
          <br /><br />
          Turn that sweet dial beyond 11 to number go up. Like, way up. PW3R has start streaming into revolutionary pocket radio receivers and the earbuds of all who just want to catch that vibe.
          <br /><br />
          All streamed songs have been CC0 open sourced to the AU.DEO Treasury Vault by native web3 music pioneers.
          <br /><br />
          <span>
            AU.DEO focuses on open source and CC0 as a breakaway statement and essential embrace of the power open content and culture have that inspires people to move like they mean it, while annoying the hell out of the old control freaks that would rather we all just know our place and keep quiet.
          </span>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <Interference />
        <h1>
          Season One
        </h1>
        <div className={styles.playlistWrapper}>
          <ul>
            {
              playlist.map(item => {
                return (
                  <li key={item.id}>
                    {
                      `${getDateString(item.date)} PW3R Session `
                    }
                    <a href={`/audioplay/${item.id}`}>
                      {item.title}
                    </a>
                  </li>
                )
              })
            }
            
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Tunein