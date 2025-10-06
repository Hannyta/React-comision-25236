import Carrito from './Carrito'
import Producto from './Producto'
import { useEffect, useState } from 'react';

const Main = () => {

  const [productos, setProductos] = useState
([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/
`)
    .then(resp => resp.json())
    .then(dato => setProductos(dato));
  },[]);

  const agregarAlCarrito = (producto) => {
    if (!carrito.find(p => p.id === producto.
id)) {
      setCarrito([...carrito, producto]);
    }
  };
  
  return (
    <main>
      <section>
        <h2>Productos</h2>
        <Producto
          productos={productos}
          carrito={carrito}
          agregarAlCarrito={agregarAlCarrito}
        />
      </section>
      <aside>
        <Carrito productos={carrito} />
      </aside>
    </main>
  )
}

export default Main;