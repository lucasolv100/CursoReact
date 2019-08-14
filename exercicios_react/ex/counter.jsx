import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Inc, Dec, StepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.StepChanged}
        value={props.counter.step}
        type='number' />
        <button onClick={props.Inc}>Incrementar</button>
        <button onClick={props.Dec}>Decrementar</button>
    </div>
)

const mapStateToProps = state => ({counter: state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({Inc, Dec, StepChanged}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Counter)