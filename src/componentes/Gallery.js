// Gallery.js
import React, { useState } from 'react';

import data from '../pages/data.json';

const Gallery = ({ cantidad }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  // Muestra solo la cantidad de libros indicada
  const libros = data.libros.slice(0, cantidad);

  const handleClick = (libro) => {
    setSelectedBook(libro);
  };

  return (
    <div className="gallery">
      {!selectedBook ? (
        <div className="image-grid">
          {libros.map((libro, index) => (
            <div key={index} className="image-container" onClick={() => handleClick(libro)}>
              <img src={libro.imagen} alt={libro.nombre} />
            </div>
          ))}
        </div>
      ) : (
        <div className="book-details">
          <h2>{selectedBook.nombre}</h2>
          <p><strong>Autor:</strong> {selectedBook.autor}</p>
          <p><strong>Precio:</strong> S/.{selectedBook.precio.toFixed(2)}</p>
          <p><strong>Cantidad:</strong> {selectedBook.cantidad}</p>
          <img src={selectedBook.imagen} alt={selectedBook.nombre} width="200" />
          <button onClick={() => setSelectedBook(null)}>Volver</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
