import React from "react";
import './style.scss';

function Button(props:any) {
    const children = props.children;
    const type = props.type;
    const action = props.action;

    return (
        <button className={type === 'primary' ? 'btn-primary' : 'btn-secondary'} onClick={action}>
            {children}
        </button>
    )
}

export default Button;