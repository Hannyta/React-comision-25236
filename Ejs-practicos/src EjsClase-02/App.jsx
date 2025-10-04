import './App.css';
import {ListaDeProductos} from './components/Productos';
import Boton from './components/Boton';
//import ClaseUno from './Components/ClaseUno'

function App() {

  const productos = [
    { nombre: 'Teclado', descripcion: 'Teclado mecánico RGB'},
    { nombre: 'Mouse', descripcion: 'Mouse gamer ergonómico'},
    { nombre: 'Auriculares', descripcion: 'Auriculares con cancelación de ruido'},
    { nombre: 'Corneta', descripcion: 'Corneta con cargador puerto C'},
    { nombre: 'Silla', descripcion: 'Silla Gamer color azul y negro'},
  ];

  return (
    <>
      <h2>Productos disponibles:</h2>
      <ListaDeProductos productos={productos}/>

      <Boton texto='Guardar' tipo='success' onClick={()=> alert("Guardado!")} />
      <Boton texto='Eliminar' tipo='danger' onClick={()=> alert("Eliminado!")} />
      <Boton texto='Cancelar' tipo='secondary' onClick={()=> alert("Cancelado!")} />
    </>
  )
}

export default App