import Boton from '../components/Boton';

const Login = ({ toggleAuth }) => {
  return (
    <section className="login">
      <h2>Iniciar sesión</h2>
      <p>Simulación de login: al hacer clic, se activa el estado de autenticación.</p>
      <Boton texto="Iniciar sesión" tipo="primary" onClick={toggleAuth} />
    </section>
  );
};

export default Login;