import React from 'react'

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

export default props => {
    
    let num = 0
    const gerarItens = itens => {
        return itens.map(item => <li>{item} {num++}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}