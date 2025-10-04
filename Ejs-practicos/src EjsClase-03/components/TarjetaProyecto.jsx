import Boton from './Boton';
import './TarjetaProyecto.css'

const TarjetaProyecto = ({ titulo, descripcion, botonTexto}) => {
    return (
        <div className='tarjeta-proyecto'>
            <h3 className='tarjeta-titulo'>{titulo}</h3>
            <p className='tarjeta-descripcion'>{descripcion}</p>
            <Boton 
                texto={botonTexto}
                onClick={() => alert (`Explorando: ${titulo}`)}
                tipo='primary'
            />
        </div>
    );
};

export default TarjetaProyecto