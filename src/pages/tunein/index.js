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
          LAWE
        </div>
        <p>
          live at the world’s edge
        </p>
        <div className={styles.description}>
          Coming to you live from key auxillary satellites around NYC, LAWE is the web3 underground free radio. With a new session streamed late night every week, we bring open source nomadic tunes from curated NFT music artists and storytellers— everything from EDM, to urban hip hop to slam poetry and more.  
          <br /><br />
          Turn up the volume and tune out the noise as we stream the sounds, stories and skills the old broadcast shills don't want you to hear. 
          <br /><br />
          Jack in that VPN Aux, you're bluetooth speaker is about get heated. 
          <br /><br />
          <span>
            Welcome to PW3R, the highest fidelity Pirate Web3 Radio.
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