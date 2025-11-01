import { useEffect, useState } from 'react';
import Producto from './Producto';
import Carrito from './Carrito';

const Main = ({ carrito, agregarAlCarrito, vaciarCarrito, isAuthenticated }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(resp => resp.json())
      .then(dato => setProductos(dato));
  }, []);

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
      {isAuthenticated && (
        <aside>
        <Carrito productos={carrito} vaciarCarrito={vaciarCarrito} />
      </aside>
      )}
    </main>
  );
};

export default Main;