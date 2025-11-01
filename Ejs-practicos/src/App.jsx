import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import DetalleProducto from './pages/DetalleProducto';
import CarritoPage from './pages/CarritoPage';
import AdminPage from './pages/AdminPage';
import RutaProtegida from './components/RutaProtegida';
import Login from './pages/Login';

import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(prev => !prev);
  };

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    if (!carrito.find(p => p.id === producto.id)) {
      setCarrito([...carrito, producto]);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} toggleAuth={toggleAuth} />
      <Routes>
        <Route path="/" element={
          <Main 
            carrito={carrito}
            agregarAlCarrito={agregarAlCarrito}
            vaciarCarrito={vaciarCarrito}
            isAuthenticated={isAuthenticated}
          />
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/login" element={<Login toggleAuth={toggleAuth} />} />
        <Route
          path="/carrito"
          element={
            <RutaProtegida isAuthenticated={isAuthenticated}>
              <CarritoPage 
                carrito={carrito}
                vaciarCarrito={vaciarCarrito}
              />
            </RutaProtegida>
          }
        />
        <Route
          path="/admin"
          element={
            <RutaProtegida isAuthenticated={isAuthenticated}>
              <AdminPage />
            </RutaProtegida>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;