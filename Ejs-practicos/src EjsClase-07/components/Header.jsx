import { Link, useNavigate } from 'react-router-dom';
import Boton from "./Boton";
import Navbar from "./Navbar";

const Header = ({ isAuthenticated, toggleAuth }) => {

  const navigate = useNavigate();

  const manejarClickCarrito = () => {
    if (isAuthenticated) {
      navigate('/carrito');
    } else {
      navigate('/login')
    }
  };
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <span className="logo-principal">🛒</span>
          <h1>Detutti Store</h1>
        </div>

        <Navbar />

       <div className="header-actions">
          <Link to="/carrito" className="carrito-icon" title="Ver carrito">
            🛍️
          </Link>

          <Boton
            texto={isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión'}
            tipo={isAuthenticated ? 'danger' : 'primary'}
            onClick={toggleAuth}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;