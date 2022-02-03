import React from 'react'
import styles from './styles.module.scss'

const RegratsTitleCard = props => {
  const { title } = props
  
  return (
    <div className={styles.wrapper}>
      <div id="rugMainBody">
        <div id="titleCard">
          <div className="jaggedShape1"></div>
          <div className="jaggedShape2"></div>
          <div className="jaggedShape3"></div>
          <div className="jaggedShape4"></div>
          <div className="jaggedShape5"></div>
        </div>
     
        <div id="titleCardblock"> 
          <div className="jaggedShape1B"></div>
          <div className="jaggedShape2B"></div>
          <div className="jaggedShape3B"></div>
          <div className="jaggedShape4B"></div>
          <div className="jaggedShape5B"></div>
        </div>
  
        <div className="mainBackground">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default RegratsTitleCard