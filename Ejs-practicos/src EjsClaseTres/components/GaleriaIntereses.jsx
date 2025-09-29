import { useState } from 'react';
import './GaleriaIntereses.css';


const GaleriaIntereses = ({ temas}) => {
    // guardamos los temas seleccionados en un array
    const [seleccionados, setSeleccionados] = useState([]);

    const toggleSeleccion = (tema) => {
        if (seleccionados.includes(tema)) {
            // si ya estaba, lo quitamos
            setSeleccionados(seleccionados.filter((t) => t !== tema));
        } else {
            // si no estaba, lo agregamos
            setSeleccionados([...seleccionados, tema]);
        }
    }

    return (
        <div className='galeria-container'>
            {temas.map((tema, index) => (
                <button
                    key={index}
                    className={`btn-interes ${seleccionados.includes(tema) ? 'activo' : ''}`}
                    onClick={() => toggleSeleccion(tema)}
                >
                    {tema}
                </button>
            ))}
        </div>
    );
};


export default GaleriaIntereses;