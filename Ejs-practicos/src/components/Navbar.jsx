import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">Inicio</Link>
      <Link to="/">Productos</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  )
}

export default Navbar