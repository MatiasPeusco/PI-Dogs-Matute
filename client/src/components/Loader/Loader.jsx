import React from 'react'
import { LoaderContainer } from './StyledLoader'

const Loader = () => {
  return (
    <LoaderContainer>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </LoaderContainer>
  )
}

export default Loader