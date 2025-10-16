import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Clicker from './components/Clicker';
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import DetalleProducto from './components/DetalleProducto';

function App() {
  
  return (
    <>
    <Header/>
    <Nav/>
    <Routes>
      <Route path={'/'} element={<Inicio/>} />
      <Route path={'/contacto'} element={<Contacto/>} />
      <Route path={'/productos/:id'} element={<DetalleProducto/>} />
    </Routes>
    <Clicker/>
    <Footer/>
    </>
  )
}

export default App