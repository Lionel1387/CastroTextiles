import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header'
import Card from './components/Card';
import Footer from './components/Footer';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1pzaI0TCKDtexd2HPUxM1GRULzSCi5SsP0O7Vi5jpZvQ/export?format=csv';

export default function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get(SHEET_URL)
      .then((response) => {
        const data = parseCSV(response.data);
        setProductos(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  const parseCSV = (csv) => {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map((line) => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header.trim()] = values[index]?.trim();
        return obj;
      }, {});
    });
  };

  return (
    <>
      <div>
        <Header />
        <main className="contenedor" style={{ padding: '2rem 0' }}>
          <div className="grid">
            {productos.map((producto, index) => (
              <Card
                key={index}
                nombre={producto.nombre || 'Sin nombre'}
                precio={producto.precio || 0}
                descripcion={producto.descripcion || 'Sin descripción'}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
