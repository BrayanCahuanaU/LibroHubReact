import React from 'react';

function ListaLibro({ books, editBook, deleteBook }) {
  return (
    <div>
      <h3>Lista de Libros</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h4>{book.nombre}</h4>
            <p>Autor: {book.autor}</p>
            <p>Precio: {book.precio}</p>
            <p>Cantidad: {book.cantidad}</p>
            {book.imagenPortada && (
              <img src={book.imagenPortada} alt={book.nombre} width="100" />
            )}
            <button onClick={() => editBook(index)}>Editar</button>
            <button onClick={() => deleteBook(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaLibro;
