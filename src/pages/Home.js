// Home.js
import React from 'react';
import Gallery from '../componentes/Gallery';
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
        <h2>What recent sold?</h2>        
        <Gallery cantidad={7} />

            
        <h2>What do you search?</h2>
        <Gallery cantidad={4} />

        <div className='contenedor'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <h2>Our principal aliance</h2>
        <div className='alianzas-ucsm'>
            <p>Universidad Catolica Santa Maria</p>
        </div>

        <div className='alianzas-pucp'>
            <p>Pontificia Universiad Catolica del peru</p>
        </div>


    </div>
    
  );
};

export default Home;
