import ReactDOM from 'react-dom'
import React from 'react'
/* import PrimeiroComponente from './componentes/PrimeiroComponente' */
/* import CompA, {CompB as B} from './componentes/DoisComponentes'
import FamiliaSilva from './componentes/FamiliaSilva' */
/* import Familia from './componentes/Familia'
import Membro from './componentes/Membro'; */
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import TabelaComRowSpan from './componentes/TabelaComRowSpan'
// import MultiElementos from './componentes/MultiElementos'

const elemento = document.getElementById('root')

ReactDOM.render(
<div>
    {/* <PrimeiroComponente texto={"Olá React"} /> */}
    {/* <CompA valor={"componente a"}/>
    <B valor={"componente b"}/> */}
    {/* <MultiElementos /> */}
    {/* <FamiliaSilva/> */}
    {/* <Familia sobrenome="Pereira">
        <Membro nome="Lucas" />
        <Membro nome="André" />
    </Familia> */}
    {/* <ComponenteComFuncao /> */}
    <TabelaComRowSpan/>
    </div>
, elemento)