import Carrito from '../components/Carrito';

const CarritoPage = ({ carrito, vaciarCarrito }) => {
  return (
    <main>
      <section>
        <Carrito productos={carrito} vaciarCarrito={vaciarCarrito} />
      </section>
    </main>
  );
};

export default CarritoPage;