import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./Admin.css";

const Admin = () => {
  const [libros, setLibros] = useState([]);
  const [nombre, setNombre] = useState("");
  const [autor, setAutor] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [imagen, setImagen] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setLibros(data.libros);
  }, []);

  const handleAddOrEdit = async () => {


    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("autor", autor);
    formData.append("precio", precio);
    formData.append("cantidad", cantidad);
    if (imagen) formData.append("imagen", imagen);

    try {
      const response = await fetch("http://localhost:5000/addBook", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      setLibros(data.libros); // Actualiza la lista de libros en el frontend
      setNombre("");
      setAutor("");
      setPrecio("");
      setCantidad("");
      setImagen(null);
      setEditIndex(null);
      
    } catch (error) {
      console.error("Error al agregar o modificar el libro:", error);
    }












/*     const newLibro = { nombre, autor, precio: parseFloat(precio), cantidad: parseInt(cantidad), imagen };

    if (editIndex !== null) {
      const updatedLibros = libros.map((libro, index) => (index === editIndex ? newLibro : libro));
      setLibros(updatedLibros);
      setEditIndex(null);
    } else {
      setLibros([...libros, newLibro]);
    }

    setNombre("");
    setAutor("");
    setPrecio("");
    setCantidad("");
    setImagen(null); */
  };

  const handleEdit = (index) => {
    const libro = libros[index];
    setNombre(libro.nombre);
    setAutor(libro.autor);
    setPrecio(libro.precio);
    setCantidad(libro.cantidad);
    setImagen(libro.imagen);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setLibros(libros.filter((_, i) => i !== index));
  };

  const handleImageUpload = (event) => {
    setImagen(event.target.files[0]);
  };

  return (
    <div className="crudContainer">
      <div className="agregarLibrosInput">
        <h2>Crear o Modificar Libro</h2>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
        <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        <input type="number" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button onClick={handleAddOrEdit}>{editIndex !== null ? "Modificar" : "Agregar"}</button>
      </div>

      <div className="listaLibros">
        <h2>Repositorio actual</h2>
        <ul>
          {libros.map((libro, index) => (
            <li key={index}>
              <img src={libro.imagen} alt={libro.nombre} width="50" />
              <p>{libro.nombre}</p>
              <p>{libro.autor}</p>
              <p>S/.{libro.precio.toFixed(2)}</p>
              <p>Cantidad: {libro.cantidad}</p>
              <button className="editar" onClick={() => handleEdit(index)}>Editar</button>
              <button className="eliminar" onClick={() => handleDelete(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
