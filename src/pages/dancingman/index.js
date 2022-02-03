import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

const DancingManPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        YOU FOUND THE PW3R DANCING MANNNNNNN
      </h1>
      <div className={styles.dancingManImage}>
        <Image
          src='/images/dancingman.gif'
          width='650'
          height='650'
        />
      </div>
    </div>
  )
}

export default DancingManPage