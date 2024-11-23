import React from 'react';
import Header from './components/header';
import Card from './components/card';
import Footer from './components/Footer';

export default function App() {
  const productos = [
    {
      nombre: "Tela de Algodón Premium",
      precio: 1299,
      descripcion: "Tela de algodón 100% natural, perfecta para confección de prendas de alta calidad",
      imagen: "/placeholder.svg?height=400&width=400"
    },
    {
      nombre: "Seda Natural",
      precio: 2499,
      descripcion: "Seda natural de la más alta calidad, ideal para prendas elegantes",
      imagen: "/placeholder.svg?height=400&width=400"
    }
  ];

  return (
    <>
    <div>
      <Header />
      <main className="contenedor" style={{ padding: '2rem 0' }}>
        <div className="grid">
          {productos.map((producto, index) => (
            <Card key={index} {...producto} />
          ))}
        </div>
      </main>
    </div>
      <Footer />
    </>
  );
}

