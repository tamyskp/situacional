import React from "react";
import './style.scss';

// Components
import Logo from "../../atoms/logo"
import Button from "../../atoms/button"

function header() {
    return (
        <div className="header">
            <div className="header__info">
                <div className="header__container">
                    <p>Entre em contato:</p>
                    <p>021 2456 1447</p>
                    <p>jrprj@situacional.com.br</p>
                </div>
            </div>
            <div className="header__content">
                <div className="header__container">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <ul className="header__menu">
                        <li><a href="/">Início</a></li>
                        <li><a href="/servicos">Serviços</a></li>
                        <li><a href="/contato">Contato</a></li>
                        <li><Button type="primary" href="https://situacional.superlogica.net/clients/areadocondomino">Área do cliente</Button></li>
                        <li><Button href="/primeiro-acesso">Primeiro acesso</Button></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default header;