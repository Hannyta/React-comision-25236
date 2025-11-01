import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import DetalleProducto from './pages/DetalleProducto';

import './App.css';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App