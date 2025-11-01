import { useContext } from 'react';
import Carrito from '../components/Carrito';
import { CarritoContext } from '../context/CarritoContext.jsx';

const CarritoPage = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  return (
    <main>
      <section>
        <h2>Tu carrito</h2>
        <Carrito />
      </section>
    </main>
  );
};

export default CarritoPage;