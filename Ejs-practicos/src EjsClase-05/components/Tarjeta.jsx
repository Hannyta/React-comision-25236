import Boton from './Boton';

const Tarjeta = ({ img, nombre, precio, boton, onClick }) => {
  return (
    <div className='tarjeta'>
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <p>Precio: ${precio} </p>
      <Boton texto={boton} onClick={onClick} />
    </div>
  );
};

export default Tarjeta;