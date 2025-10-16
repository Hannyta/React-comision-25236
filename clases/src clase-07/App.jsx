import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Clicker from './components/Clicker';
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import DetalleProducto from './components/DetalleProducto';
import Admin from './components/Admin';
import Login from './components/Login';
import RutaProtegida from './components/RutaProtegida';
import { useState } from 'react';

function App() {

  const [estaAutenticado, setEstaAutenticado] = useState(true);

  const iniciarSesion= () => setEstaAutenticado(true);
  const cerrarSesion= () => setEstaAutenticado(false);

  return (
    <>
      <Header/>
      <Nav/>
      { estaAutenticado ?
          (<button onClick={cerrarSesion}>Cerrar sesion</button>) :
          (<button onClick={iniciarSesion}>Iniciar sesion</button>)
      }
      <Routes>
        <Route path={'/'} element={<Inicio/>} />
        <Route path={'/contacto'} element={<Contacto/>} />
        <Route path={'/admin'} element={
          <RutaProtegida estaAutenticado={estaAutenticado}>
            <Admin/>
          </RutaProtegida>
        } />
        <Route path={'/login'} element={<Login/>} />
        <Route path={'/productos/:id'} element={<DetalleProducto/>} />
      </Routes>
      <Clicker/>
      <Footer/>
    </>
  )
}

export default App