import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

const DancingManPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        YOU FOUND THE LAWE FUNK MEME
      </h1>
      <div className={styles.dancingManImage}>
        <Image
          src='/images/funkmeme.gif'
          width='650'
          height='650'
        />
      </div>
    </div>
  )
}

export default DancingManPage
