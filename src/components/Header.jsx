import React from 'react';

export default function Header() {
    return (
        <header className="encabezado">
            <div className="contenedor encabezado-contenido">
                <img 
                src="../../public/jg.png" 
                alt="Castro Textiles Logo" 
                className="logo"/>
                <h1 className="titulo">Castro Textiles</h1>
            </div>
        </header>
);
}

