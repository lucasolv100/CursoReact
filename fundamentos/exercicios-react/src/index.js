import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')

ReactDOM.render(
<div>
    <PrimeiroComponente texto={"Olá React"} />
</div>
, elemento)