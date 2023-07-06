// import React from 'react'
type inputProps = { ischecked: boolean }
const Input: React.FC<inputProps> = (ischecked) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)

  }
  return (

    <input type="checkbox" {...ischecked} onChange={handleChange} />

  )
}

export default Input
