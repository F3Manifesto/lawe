import React, { memo } from 'react'
import fairyDustCursor from '@utils/fairly-dust-cursor'
import styles from './styles.module.scss'

const FairlyContainer = () => {
  React.useEffect(() => {
    fairyDustCursor()
  }, [])


  return (
    <div className={[styles.containerWrapper, 'fairly-container'].join(' ')}></div>
  )
}

export default memo(FairlyContainer)
