import MiniBoton from "./MiniBoton";

const Boton = () => {
    const handleClick = () => {
        alert('¡Botón clickeado!')
    }

    return (
        <>
        <MiniBoton/>
        <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default Boton;