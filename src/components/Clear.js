import React from 'react'
import '../css/Clear.css'

export const Clear = (props) => {
  return (
    <div className='botonClear' 
    onClick={props.manejaClear}>
        {props.children}
    </div>
  )
}
