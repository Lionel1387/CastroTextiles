import React from 'react';

export default function Card({
    nombre = 'Producto Ejemplo',
    precio = 0,
    descripcion = 'Descripción del producto',
}) {
    return (
        <div className="tarjeta">
            <div className="tarjeta-contenido">
                <h2 className="tarjeta-titulo">{nombre}</h2>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tarjeta-precio">{precio.toLocaleString()}</span>
                </div>
            </div>
        </div>
);
}
