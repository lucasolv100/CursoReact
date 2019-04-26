import React from 'react'
import If from './If'

export default props => (
    <if test={!props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </if>
)
