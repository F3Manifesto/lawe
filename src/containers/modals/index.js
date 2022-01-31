import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const Modals = () => {
  const modals = useSelector((state) => state.modals.toJS())
  const {

  } = modals

  return (
    <>

    </>
  )
}

export default memo(Modals)
