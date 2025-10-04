const Boton = ({ texto, onClick, tipo='primary' }) => {
    return (
        <button className={`btn ${tipo}`} onClick={onClick}>{ texto }</button>
    )
};

export default Boton;