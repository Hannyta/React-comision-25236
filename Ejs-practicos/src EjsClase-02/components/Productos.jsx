/*
1) Crea un componente que reciba un array de productos como prop y los muestre en una lista ordenada.

Ejemplo de array:

const productos = ['Manzanas', 'Peras', 'Naranjas'];

3) Usa el componente Boton que creamos para estilizar diferentes acciones en una página.

*/

import Tarjeta from "./Tarjeta";

export const ListaDeProductos = ({productos}) => {
    return (
        <ol>
            { productos.map((producto, index) => (
                <li key={index} >
                    <Tarjeta 
                    titulo={producto.nombre}
                    descripcion={producto.descripcion}
                    boton='Ver'
                    onClick={() => alert(`Estas viendo ${producto.nombre} `)}
                    />
                </li>
            ))}
        </ol>
    )
};