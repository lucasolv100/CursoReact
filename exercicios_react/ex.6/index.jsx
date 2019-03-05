import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './memeber'

ReactDOM.render(
    
        <Family lastName="Souza">
            <Member name="Lucas" />
        </Family>
    
    , document.getElementById('app')
)