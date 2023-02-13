import React from "react";
import './style.scss';

function Logo(props:any) {
    const isWhite = props.isWhite;

    return (
        <div className={`logo ${isWhite ? 'white' : ''}`}>
            Situacional
        </div>
    )
}

export default Logo;