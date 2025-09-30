import { useState } from "react";

const Carrito = () => {

    const ListaProducto = [
        {id: 1, nombre: 'Papas', precio: 1500},
        {id: 2, nombre: 'Tomates', precio: 1800},
        {id: 3, nombre: 'Cilantro', precio: 2000},
        {id: 4, nombre: 'Lechuga', precio: 2500},
    ];

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    }

    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

  return (
    <div>
        <h2>Productos</h2>
        <ul>
            {ListaProducto.map(producto => 
                <li key={producto.id}>
                    {producto.nombre}
                    : {producto.precio}$
                    <button onClick={() => agregarCarrito(producto)}> Agregar </button>
                </li>
            )}

        </ul>
        <hr />
        <h2>Carrito</h2>
        {carrito.map(producto => 
            <p key={producto.id} >
                {producto.nombre}
                : {producto.precio}$
            </p>,
        )}
        <h3> Total: {total}$ </h3>
    </div>
  );
}

export default Carrito;