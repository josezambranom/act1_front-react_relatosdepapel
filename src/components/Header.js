import React from "react";
import '../css/header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className='header__imagen'></div>
            <h1 className='header__titulo'>Relatos de Papel</h1>
        </header>
    );
}