import React, { useState, useEffect } from 'react';

function CrudLibro({ books, editIndex, addOrUpdateBook, setEditIndex }) {
  const [book, setBook] = useState({
    nombre: '',
    autor: '',
    precio: '',
    cantidad: '',
    imagenPortada: '',
  });

  useEffect(() => {
    if (editIndex !== null) {
      setBook(books[editIndex]);
    } else {
      setBook({
        nombre: '',
        autor: '',
        precio: '',
        cantidad: '',
        imagenPortada: '',
      });
    }
  }, [editIndex, books]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBook({
        ...book,
        imagenPortada: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    addOrUpdateBook(book);
    setBook({
      nombre: '',
      autor: '',
      precio: '',
      cantidad: '',
      imagenPortada: '',
    });
    setEditIndex(null);
  };

  return (
    <div>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={book.nombre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="autor"
        placeholder="Autor"
        value={book.autor}
        onChange={handleChange}
      />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={book.precio}
        onChange={handleChange}
      />
      <input
        type="number"
        name="cantidad"
        placeholder="Cantidad"
        value={book.cantidad}
        onChange={handleChange}
      />
      <input
        type="file"
        name="imagenPortada"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={handleSubmit}>
        {editIndex !== null ? 'Actualizar Libro' : 'Agregar Libro'}
      </button>
    </div>
  );
}

export default CrudLibro;
