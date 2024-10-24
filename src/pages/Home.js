import React from 'react';
import './Home.css'; // Importa el archivo CSS para los estilos

const Home = () => {
    const mejoresLibros = ['Libro 1', 'Libro 2', 'Libro 3', 'Libro 4', 'Libro 5', 'Libro 6', 'Libro 7'];
    const generos = ['Acción', 'Crecimiento personal', 'Académico', 'Anime'];
    const alianzas = [
        { nombre: 'UCSM', logo: 'ucsm.png' },
        { nombre: 'PUCP', logo: 'pucp.png' }
    ];

    return (
        <div className="home">
            {/* Sección Popular */}
            <section className="seccion-popular">
                <h2>7 Mejores Libros</h2>
                <ul>
                    {mejoresLibros.map((libro, index) => (
                        <li key={index}>{libro}</li>
                    ))}
                </ul>
            </section>

            {/* Sección Géneros */}
            <section className="seccion-generos">
                <h2>Géneros</h2>
                <ul>
                    {generos.map((genero, index) => (
                        <li key={index}>{genero}</li>
                    ))}
                </ul>
            </section>

            {/* Sección Acerca de Nosotros */}
            <section className="seccion-acerca-nosotros">
                <h2>Acerca de Nosotros</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>

            {/* Sección Alianzas */}
            <section className="seccion-alianzas">
                <h2>Alianzas</h2>
                <div className="alianzas-container">
                    {alianzas.map((alianza, index) => (
                        <div key={index} className="alianza">
                            <img src={alianza.logo} alt={alianza.nombre} />
                            <p>{alianza.nombre}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;