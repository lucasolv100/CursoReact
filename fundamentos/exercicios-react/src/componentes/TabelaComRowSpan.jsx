import React from 'react'

const aprovados = [
    {
        nome: 'Paula',
        nota: [5, 7, 3],
        valor: 5
    },
    {
        nome: 'Roberta',
        nota: [5, 2],
        valor: 2
    },
    {
        nome: 'José',
        nota: [5],
        valor: 3
    },

]

export default props => {

    const gerarTr = ({ nome, nota, valor }) => {
        let num = 0
        return nota.map(i => {
            {num++}
            return <tr>
                {
                    num === 1 ?
                        <>
                            <td rowspan={nota.length}>{nome}</td>
                            <td>{i}</td>
                            <td rowspan={nota.length}>{valor}</td>
                        </>
                        :
                        <td>{i}</td>
                }</tr>
                
        })
    }

    const gerarTd = nomes => {

        return nomes.map(nome => {
            return gerarTr(nome, nome.nota, nome.valor)
           
        })
    }

    return (
        <table>
            <thead>
                <th>
                    Nome
                </th>
                <th>
                    Nota
                </th>
                <th>
                    Valor
                </th>
            </thead>
            <tbody>
                {gerarTd(aprovados)}
            </tbody>
        </table>
    )
}