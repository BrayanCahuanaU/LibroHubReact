const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Set up multer for file storage in the public/img directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique filenames
  }
});

const upload = multer({ storage });

// Load existing books data
let books = require('./src/pages/data.json').libros;

// Ruta API para agregar o editar un libro
app.post('/addBook', upload.single('imagen'), (req, res) => {
  const { nombre, autor, precio, cantidad, editIndex } = req.body;
  const imagenPath = req.file ? `/img/${req.file.filename}` : books[editIndex]?.imagen;

  const newBook = { nombre, autor, precio: parseFloat(precio), cantidad: parseInt(cantidad), imagen: imagenPath };

  if (editIndex !== undefined && editIndex >= 0) {
    books[editIndex] = newBook; // Actualiza el libro en la posición dada
  } else {
    books.push(newBook); // Agrega un nuevo libro si no es edición
  }

  fs.writeFile('./src/pages/data.json', JSON.stringify({ libros: books }, null, 2), (err) => {
    if (err) return res.status(500).json({ message: 'Error al guardar los datos' });
    res.status(200).json({ message: 'Libro agregado o modificado exitosamente', libros: books });
  });
});



// Serve the frontend files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});


/* // Ruta API para agregar o editar un libro
app.post('/addBook', upload.single('imagen'), (req, res) => {
  const { nombre, autor, precio, cantidad } = req.body;
  const imagenPath = req.file ? `/img/${req.file.filename}` : null;

  const newBook = { nombre, autor, precio: parseFloat(precio), cantidad: parseInt(cantidad), imagen: imagenPath };

  // Verificar si es edición o adición
  if (req.body.editIndex !== undefined) {
    books[req.body.editIndex] = newBook;
  } else {
    books.push(newBook);
  }

  // Guardar en data.json
  fs.writeFile('./src/pages/data.json', JSON.stringify({ libros: books }, null, 2), (err) => {
    if (err) return res.status(500).json({ message: 'Error al guardar los datos' });
    res.status(200).json({ message: 'Libro agregado o modificado exitosamente', libros: books });
  });
}); */
