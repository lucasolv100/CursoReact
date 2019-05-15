import React from 'react'
import Filho from './Filho'

export default props => {
    const notificarSaida = lugar => alert(`Boa saida para o ${lugar} filhão!`)
    return (
        <div>
            <Filho notificarSaida={notificarSaida} />
        </div>
    )
}