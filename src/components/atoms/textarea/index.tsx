import React from "react";
import './style.scss';

function Textarea(props:any) {
    const placeholder = props.placeholder;
    const label = props.label;

    return (
        <div className="input-holder">
            <label className="input-label">{label}</label>
            <textarea
                className="textarea"
                placeholder={placeholder}
            />
        </div>
    )


}

export default Textarea;