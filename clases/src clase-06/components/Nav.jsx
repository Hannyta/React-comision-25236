import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li style={{ color: "white", textDecoration: "none" }}>
                    <Link to={'/'} >Inicio</Link>
                </li>  
                <li style={{ color: "white", textDecoration: "none" }}>
                    <Link to={'/Acerca de'} >Acerca de</Link>
                </li>  
                <li style={{ color: "white", textDecoration: "none" }}>
                    <Link to={'/contacto'} >Contacto</Link>
                </li>  
            </ul>  
        </nav>  
    );  
}  

export default Nav;