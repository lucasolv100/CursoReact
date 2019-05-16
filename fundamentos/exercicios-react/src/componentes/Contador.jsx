import React, { Component } from 'react'

export default class Contador extends Component {

    // Solução 01
    // constructor(props){
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    state = {
        numero: 0
    }


    //Solução 03
    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }
    menosUm = () => {
        if (this.state.numero > 0)
            this.setState({ numero: this.state.numero - 1 })
    }

    alterarNumero = dif => {
        this.setState({ numero: this.state.numero + dif })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Mais</button>
                {/* Solução 02
                <button onClick={() => this.maisUm()}>Mais</button> 
                */}
                <button onClick={this.menosUm}>Menos</button>
                <button onClick={() => this.alterarNumero(5)}>Adicionar 5</button>
                <button onClick={() => this.alterarNumero(-5)}>Tirar 5</button>
            </div>
        )
    }
}