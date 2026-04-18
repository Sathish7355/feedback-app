import React from 'react'

const ButtonControl = ({btnName,onClick,className}) => {
  return (
    <button onClick={onClick} className={`default-btn ${className}`}>{btnName}</button>
  )
}

export default ButtonControl