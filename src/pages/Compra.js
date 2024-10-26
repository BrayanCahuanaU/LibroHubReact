// LibroDetalle.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import "./Compra.css";

const Compra = () => {
  const { nombreLibro } = useParams();
  const libro = data.libros.find((libro) => libro.nombre === nombreLibro);
  const [cantidadCompra, setCantidadCompra] = useState(1);
  const [cantidadDisponible, setCantidadDisponible] = useState(libro?.cantidad || 0);

  if (!libro) {
    return <p>Libro no encontrado</p>;
  }

  const handleComprar = () => {
    if (cantidadCompra <= cantidadDisponible) {
      setCantidadDisponible(cantidadDisponible - cantidadCompra);
      alert(`Has comprado ${cantidadCompra} unidad(es) de ${libro.nombre}`);
    }
  };

  return (
    <div className="libro-detalle">
      <h2>{libro.nombre}</h2>
      <img src={libro.imagen} alt={libro.nombre} width="150" />
      <p>Autor: {libro.autor}</p>
      <p>Precio: S/.{libro.precio.toFixed(2)}</p>
      <p>Cantidad disponible: {cantidadDisponible}</p>
      <input
        type="number"
        min="1"
        max={cantidadDisponible}
        value={cantidadCompra}
        onChange={(e) => setCantidadCompra(parseInt(e.target.value) || 1)}
        disabled={cantidadDisponible === 0}
      />
      <button onClick={handleComprar} disabled={cantidadDisponible === 0}>
        {cantidadDisponible > 0 ? "Comprar" : "Agotado"}
      </button>
    </div>
  );
};

export default Compra;
