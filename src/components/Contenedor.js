import React, { useState } from 'react'

import { Botones } from './Botones'
import { Pantalla } from './Pantalla'
import {Clear } from './Clear'
import {evaluate} from 'mathjs';


import '../css/Contenedor.css'

export const Contenedor = () => {
    const [input,setInput]= useState('')
    const aggInput = valor =>{
    setInput(input + valor)
    };
    const calcularResultado = ()=>{
      if(input){
        setInput(evaluate(input));

      }else{
        alert("Syntax error")
      }
    };

  return (
    <>
    <div className="contenedorLogo">
        <h1 className="tituloPrincipal"> Calculadora JDev🧮</h1>
        
      </div>
      <div className="contenedorCalculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Botones manejaClick={aggInput}>1</Botones>
          <Botones manejaClick={aggInput}>2</Botones>
          <Botones manejaClick={aggInput}>3</Botones>
          <Botones manejaClick={aggInput}>+</Botones>
        </div>
        <div className="fila">
          <Botones manejaClick={aggInput}>4</Botones>
          <Botones manejaClick={aggInput}>5</Botones>
          <Botones manejaClick={aggInput}>6</Botones>
          <Botones manejaClick={aggInput}>-</Botones>
        </div>
        <div className="fila">
          <Botones manejaClick={aggInput}>7</Botones>
          <Botones manejaClick={aggInput}>8</Botones>
          <Botones manejaClick={aggInput}>9</Botones>
          <Botones manejaClick={aggInput}>*</Botones>
        </div>
        <div className="fila">
          <Botones manejaClick={calcularResultado}>=</Botones>
          <Botones manejaClick={aggInput}>0</Botones>
          <Botones manejaClick={aggInput}>.</Botones>
          <Botones manejaClick={aggInput}>/</Botones>
        </div>
         <div className="fila">
            <Clear manejaClear={()=> setInput('')}>
                Clear
            </Clear>
        </div> 
      </div>
    </>
  )
}
