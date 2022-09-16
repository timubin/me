import React from 'react'
import "./Button.css"

const Button = ({BtnName}) => {
  return (
    <>
   <button className="glow-on-hover" type="button">{BtnName}</button>
    </>
  )
}

export default Button