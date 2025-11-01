import { Link } from 'react-router-dom';
import Boton from './Boton';

const Tarjeta = ({ id, img, nombre, precio, boton, onClick }) => {
  return (
    <div className='tarjeta'>
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <p>Precio: ${precio} </p>
      <Boton texto={boton} onClick={onClick} />
      <Link to={`/producto/${id}`} className="btn secondary" style={{ marginTop: '10px' }}>
        Ver más
      </Link>
    </div>
  );
};

export default Tarjeta;