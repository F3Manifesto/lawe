import React from 'react'
import styles from './styles.module.scss'

const OldButton = props => {
  const { text, className, onClick } = props
  return (
    <button className={[styles.button, className].join(' ')} onClick={onClick}>
      {
        text
      }
    </button>
  )
}

export default OldButton