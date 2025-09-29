/* 
2) Crea un componente Tarjeta que reciba props para mostrar un título, una descripción y un botón personalizado. Ejemplo de uso:

<Tarjeta titulo="Oferta especial"
descripcion="20% de descuento en todos los productos"
botonTexto="Ver más" />
*/
import Boton from './Boton';

const Tarjeta = ({ titulo, descripcion, boton, onClick }) => {
  return (
    <div className='tarjeta'>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <Boton texto={boton} onClick={onClick} />
    </div>
  );
};

export default Tarjeta;