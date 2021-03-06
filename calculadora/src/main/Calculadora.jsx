import React, { Component } from 'react'
import './Calculadora.css'
import Button from '../components/Button'
import Display from '../components/Display'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    value: [0, 0],
    current: 0
}

export default class Calculadora extends Component {

    state = { ...initialState }

    limpa() {
        this.setState({ ...initialState })
    }
    fazerOperacao(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        }
        else {
            const equals = operation === '='
            const currentOperation = this.state.operation
            const value = [...this.state.value]
            try {
                value[0] = eval(`${value[0]} ${currentOperation} ${value[1]}`)
            } catch (e) {
                value[0] = this.state.value[0]
            }

            value[1] = 0

            this.setState({
                displayValue: value[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                value
            })
        }
    }
    adicionaDigito(digito) {
        if (digito === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digito
        this.setState({ displayValue, clearDisplay: false })

        if (digito != '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const value = [...this.state.value]
            value[i] = newValue
            this.setState({ value })
        }
    }


    render() {

        const addDigito = digito => this.adicionaDigito(digito)
        const operacao = op => this.fazerOperacao(op)

        return (
            <div className='calculadora'>
                <Display value={this.state.displayValue} />
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
                <Button label="0" click={addDigito} double={true} />
                <Button label="." click={addDigito} />
                <Button label="=" operation={true} click={operacao} />
            </div>
        )
    }
}