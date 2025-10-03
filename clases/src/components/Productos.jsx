import { useEffect, useState } from "react";

const Productos = () => {

    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch('https://68e037b793207c4b4793fe2f.mockapi.io/productos')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProducto(datos); 
                setCargando(false)
            })
            .catch(error => {
                setError('Error al cargar tus productos'); 
                setCargando(false)
            });
    }, []);

    if(cargando)
        return <p>Estamos cargando sus productos.</p>
    if (error)
        return <p> {error} </p>    
    
  return (
    <>
    <h2>Productos</h2>
    <ul>
        {producto.map(producto => (
            <li key={producto.id}> Producto: {producto.nombre} = Precio: {producto.precio}$ </li>   
        ))}
    </ul>
    </>
  )
};

export default Productos;
