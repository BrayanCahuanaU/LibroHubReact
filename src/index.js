import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Admin from './pages/Admin';
import Nav from './componentes/Nav';
import Footer from "./componentes/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Admin/>
    <Footer/>
  </React.StrictMode>
);
