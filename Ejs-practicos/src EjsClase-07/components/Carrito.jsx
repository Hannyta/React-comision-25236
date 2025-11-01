import Boton from './Boton'

const Carrito = ({productos = [], vaciarCarrito}) => {

  const total = productos.reduce(( acc, producto) => acc + producto.price, 0);

  return (
    <div>
      <h2>Carrito</h2>
      {productos.length === 0 ?( 
        <p>No hay productos en el carrito.</p> ) : (
        <>
          {productos.map(producto => ( 
            <p key={producto.id}>
              {producto.title}: ${producto.price}
            </p> 
          ))}
          <hr />
          <h3>Total: ${total.toFixed(2)} </h3>
          <hr />
          <Boton 
            texto="🚮 Vaciar carrito"
            tipo="danger"
            onClick={() => {
              if (confirm('¿Seguro que querés vaciar el carrito?')) {
                vaciarCarrito();
              }
          }}/>

        </>
      )}
    </div>
  )
};

export default Carrito;































