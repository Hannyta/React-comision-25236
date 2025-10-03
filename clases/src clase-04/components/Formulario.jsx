import { useState } from "react";

const Formulario = () => {

    const [nombre, setNombre] = useState('');

    const manejarEnvio = (event) => {
        event.preventDefault();
        alert(`Enviaste el Form: ${nombre}`)
    }

  return (
    <form onSubmit={manejarEnvio}>
        <input 
            value={nombre}
            type='text'
            onChange={event => setNombre(event.target.value)}
        />
        <button type='submit'>
            Enviar
        </button>
    </form>
  )
};

export default Formulario;/*  */