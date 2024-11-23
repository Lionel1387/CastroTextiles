import React from 'react';

export default function Card({ 
    nombre = "Producto Ejemplo",
    precio = 999,
    descripcion = "Descripción del producto",
    imagen = "/placeholder.svg"
    }) {
    return (
    <div className="tarjeta">
        <img src={imagen} alt={nombre} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
            <h2 className="tarjeta-titulo">{nombre}</h2>
            <p className="tarjeta-descripcion">{descripcion}</p>
        <div style={{    display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="tarjeta-precio">${precio.toLocaleString()}</span>
        </div>
    </div>
    </div>
);
}

