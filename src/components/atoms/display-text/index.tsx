import React from "react";
import './style.scss';

function DisplayText(props:any) {
    const children = props.children;
    const type = props.type;
    return (
        <span className={`display-text ${type === 'outdoor' ? 'outdoor' : 'default'}`} >
            {children}
        </span>
    )
}

export default DisplayText;