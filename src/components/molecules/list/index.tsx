import React from "react";
import './style.scss';

function List(props:any) {

    const items = props.items;

    return(
        <ul className="list-group">
            {items.map((items:any, index:any) => (
                <li key={index}>
                    {items.icon ? <span>{items.icon}</span> : null}
                    <div>
                        <h4>{items.name}</h4>
                        <p>{items.email}</p>
                        <p>{items.phone}</p>
                    </div>
                </li>
            ))}
        </ul>
    );

}

export default List;