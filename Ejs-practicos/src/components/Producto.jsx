import Tarjeta from './Tarjeta';

const Producto = ({ productos, carrito, agregarAlCarrito }) => {
  if (!productos.length) return <p>Cargando productos...</p>;

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {productos.map(producto => (
        <li key={producto.id}>
          <Tarjeta
            img={producto.image}
            nombre={producto.title}
            precio={producto.price}
            boton={carrito.find(p => p.id === producto.id) ? '✅ Agregado' : 'Agregar'}
            onClick={() => agregarAlCarrito(producto)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Producto;