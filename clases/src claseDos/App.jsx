import './App.css';
import Boton from './components/Boton';
import ListaEstudiantes from './components/ListaEstudiantes';

function App() {
  
  return (
    <>
      <h1>Bienvenido a mi aplicacion</h1>
      <p>Esta es una aplicación de ejemplo utilizando Vite y React</p>
      <Boton/>
      <ListaEstudiantes nombre="Pedro Perez" edad="20"/>
      <ListaEstudiantes nombre="Maria Gonzalez" edad="15"/>
      <ListaEstudiantes nombre="Pedro Perez" edad="22"/>
      <ListaEstudiantes nombre="Juana Perez" edad="18"/>
      <ListaEstudiantes nombre="Maria Gonzalez" edad="22"/>
      <ListaEstudiantes nombre="Pedro Perez" edad="21"/>
    </>
  )
}

export default App
