import React from "react";
import './style.scss';

function DisplayCard(props:any) {
    const children = props.children;
    const title = props.title;
    const text = props.text;
    const route = props.route;
    return (
        <a href={route} className="display-card">
            <span>{children}</span>
            <h3>{title}</h3>
            <p>{text}</p>
        </a>
    )

}

export default DisplayCard;