import React from 'react'
import { filhosComProps } from '../utils/util';

export default props => <div>
    {filhosComProps(props)}
    {/* {React.Children.map(props.children, filho => {
        return React.cloneElement(filho, props)
    })} */}
    {/* {React.cloneElement(props.children, props)} */}
    {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}
    {/* {props.children}  */}
</div>