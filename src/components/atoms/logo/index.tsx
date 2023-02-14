import React from "react";
import './style.scss';

function Logo(props:any) {
    const isWhite = props.isWhite;

    return (
        <div className={`logo ${isWhite ? 'white' : ''}`}>
            <h1>Situacional</h1>
            <label>Administração e Acessoria Contábil</label>
        </div>
    )
}

export default Logo;