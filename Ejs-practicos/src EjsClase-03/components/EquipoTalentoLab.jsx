import './EquipoTalentoLab.css';

const EquipoTalentoLab = ({equipo}) => {
    return (
        <div className='equipo-card'>
            <img className='talento-img' src={equipo.imagen} alt={equipo.nombre} />
            <h3 className='talento-nombre'>{equipo.nombre}</h3>
            <p className='talento-rol'>{equipo.rol}</p>
        </div>
    );
};

export default EquipoTalentoLab