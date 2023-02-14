import React from "react";
import './style.scss';

// Components
import Button from '../../atoms/button';


function Form(props:any) {
    const children = props.children;
    
    return (
        <div className="form-container">
            <form>
                {children}
            </form>
            <Button primary big type="submit">Enviar</Button>
        </div>
    )
}

export default Form;