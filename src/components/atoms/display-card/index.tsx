import React from "react";
import './style.scss';

// icon
import * as I from '../../../utils/icons/arrows';

function DisplayCard(props:any) {
    const children = props.children;
    const label = props.label;
    const title = props.title;
    const text = props.text;
    const route = props.route;
    return (
        <a href={route} className="display-card">
            <div><label>{label}</label> {children}</div>
            <h3>{title}</h3>
            <p>{text}</p>
            <span>Saiba mais <i>{I.arrowRight}</i></span>
        </a>
    )

}

export default DisplayCard;