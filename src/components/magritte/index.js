import React from 'react'
import styles from './styles.module.scss'

const Magritte = () => {
  return (
    <div className={styles.wrapper}>
      <div className="outerContainer">
      <div className="container">
        <div className="smallMen"></div>
        <img className="backHouses" alt="" src="/images/magritte/magritte-buildings-back.png" />
        <div className="mediumMen"></div>
        <div className="largeMen"></div>
        <img className="frontHouse" src="/images/magritte/magritte-building-front2.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Magritte