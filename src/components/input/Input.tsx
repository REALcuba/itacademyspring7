// import { useState } from "react"

// import React from 'react'

type inputProps = { handleOnChange: (position: number) => void, index: number }
const Input: React.FC<inputProps> = ({ handleOnChange , index}) => {

  return (
    <>
      <input type="checkbox" onChange={() => handleOnChange(index)} />
    </>
  )
}

export default Input
