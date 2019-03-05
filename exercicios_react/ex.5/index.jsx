import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './memeber'

ReactDOM.render(
    
        <Family>
            <Member name="Lucas" lastName="Souza" />
        </Family>
    
    , document.getElementById('app')
)