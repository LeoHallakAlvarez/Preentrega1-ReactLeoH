import React, { useState } from 'react';
import '../app.css';
import CartWidget from './cartwidget'; 

function Navbar() {
    

    return (
        <nav className="navbar">
            <div className="titulo">
                <h1>shoes-store</h1>
            </div>
            <ul className="nav-list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        <CartWidget />

        </nav>
    );
}

export default Navbar;