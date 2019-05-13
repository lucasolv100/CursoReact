import React from 'react'

export default props =>
[
        <h1>Parte 1</h1>,
        <h1>Parte 2</h1>
]

/* segunda solução
export default props =>
    <React.Fragment>
        <h1>Parte 1</h1>
        <h1>Parte 2</h1>
    </React.Fragment> */
/* Solução 01 mais usada;
export default props =>
    <div>
        <h1>Parte 1</h1>
        <h1>Parte 2</h1>
    </div> */