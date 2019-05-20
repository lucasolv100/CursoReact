import React, { Component } from 'react'
import './Calculadora.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculadora extends Component {

    limpa() {
        console.log('limpou')
    }
    fazerOperacao(operacao) {
        console.log(operacao)
    }
    adicionaDigito(digito) {
        console.log(digito)
    }


    render() {

        const addDigito = digito => this.adicionaDigito(digito)
        const operacao = op => this.fazerOperacao(op)
        
        return (
            <div className='calculadora'>
                <Display value={1000} />
                <Button label="AC" triple={true} click={() => this.limpa()} />
                <Button label="/" operation={true} click={operacao} />
                <Button label="7" click={addDigito} />
                <Button label="8" click={addDigito} />
                <Button label="9" click={addDigito} />
                <Button label="*" operation={true} click={operacao} />
                <Button label="4" click={addDigito} />
                <Button label="5" click={addDigito} />
                <Button label="6" click={addDigito} />
                <Button label="-" operation={true} click={operacao} />
                <Button label="1" click={addDigito} />
                <Button label="2" click={addDigito} />
                <Button label="3" click={addDigito} />
                <Button label="+" operation={true} click={operacao} />
                <Button label="0" double={true} />
                <Button label="." click={addDigito} />
                <Button label="=" operation={true} />
            </div>
        )
    }
}