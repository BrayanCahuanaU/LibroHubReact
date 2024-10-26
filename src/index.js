import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './index.css';
import Admin from './pages/Admin';
import Nav from './componentes/Nav';
import Footer from "./componentes/Footer";
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
    <Footer/>
  </React.StrictMode>
);
