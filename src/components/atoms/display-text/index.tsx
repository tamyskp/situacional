import React from "react";
import './style.scss';

function DisplayText(props:any) {
    const children = props.children;
    return (
        <span className="display-text">
            {children}
        </span>
    )

}

export default DisplayText;