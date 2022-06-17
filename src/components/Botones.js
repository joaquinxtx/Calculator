import React from 'react'
import '../css/Botones.css'

export const Botones = (props) => {
    const esOperador = valor => {
        return isNaN(valor) && (valor!=".")
    }
  return (
    <div className={`botonContenedor ${esOperador(props.children)?"operador": ""} `.trimEnd()}
    onClick={()=> props.manejaClick(props.children)}>
        {props.children}
    </div>
  )
}
