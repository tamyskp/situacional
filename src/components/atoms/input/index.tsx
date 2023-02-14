import React from "react";
import './style.scss';

function Input(props:any) {
    const placeholder = props.placeholder;
    const type = props.type;
    const label = props.label;

    return (
        <div className="input-holder">
            <label className="input-label">{label}</label>
            <input
                className="input"
                placeholder={placeholder}
                type={type}
            />
        </div>
    )


}

export default Input;