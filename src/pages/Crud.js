import React, { useState } from 'react';
import CrudLibroB from '../componentes/CrudLibro';
import ListaLibro from '../componentes/ListaLibro';
import Nav from '../componentes/Nav';

function App() {

  //nav
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Lógica para buscar libros en tu catálogo
    console.log("Buscando libros:", searchTerm);
  };


  const [books, setBooks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateBook = (newBook) => {
    if (editIndex !== null) {
      const updatedBooks = [...books];
      updatedBooks[editIndex] = newBook;
      setBooks(updatedBooks);
      setEditIndex(null);
    } else {
      setBooks([...books, newBook]);
    }
  };

  const editBook = (index) => {
    setEditIndex(index);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    
    <div>
      <Router>
        <NavBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/section" element={<Section />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      <h2>CRUD de Libros</h2>
      <CrudLibroB
        books={books}
        editIndex={editIndex}
        addOrUpdateBook={addOrUpdateBook}
        setEditIndex={setEditIndex}
      />
      <ListaLibro books={books} editBook={editBook} deleteBook={deleteBook} />
    </div>
  );
}

export default App;
