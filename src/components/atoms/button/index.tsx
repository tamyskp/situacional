import React from "react";
import './style.scss';

function Button(props:any) {
    const children = props.children;
    const primary = props.primary;
    const big = props.big;
    const href = props.href;

    return (
        <a className={`btn ${primary ? 'btn-primary' : ''} ${big ? 'btn-big' : ''}`} href={href}>
            {children}
        </a>
        
    )
}

export default Button;