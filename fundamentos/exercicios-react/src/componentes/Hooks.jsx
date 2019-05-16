import React, { useState, useEffect } from 'react'


export default props => {

    const [contador, setContador] = useState(0)
    const [status, setParOuImpar] = useState('Par')

    //Similar ao componente didmount e didupdate
    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <h3>Status: {status}</h3>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
        </div>
    )
}