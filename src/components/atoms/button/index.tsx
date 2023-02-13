import React from "react";
import './style.scss';

function Button(props:any) {
    const children = props.children;
    const type = props.type;
    const href = props.href;

    return (
        <a className={type === 'primary' ? 'btn-primary' : 'btn-secondary'} href={href}>
            {children}
        </a>
    )
}

export default Button;