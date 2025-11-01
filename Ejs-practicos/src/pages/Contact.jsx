import Boton from '../components/Boton'

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <p>
        ¡ Dejanos un mensaje, a la brevedad nos comunicamos contigo !
      </p>

      <div className="form-placeholder">
        <form>
          <label for="nombre">
            <span> Nombre </span> <sup>*</sup>
          </label>
          <br/>
          <input 
            type="text"
            name="nombre"
            required
          />
          <br />
          <label for="email">
            <span>Correo electrónico</span> <sup>*</sup>
            <br />
         </label>
          <input 
            type="email"
            name="email"
            required
          />
          <br />
          <label for="telefono">
            <span>Número de teléfono</span>
            <br />
          </label>
          <input 
            type="tel"
            name="telefono"
          />
          <br />
          <label for="mensaje">
            <span>Mensaje</span>
            <br />
          </label>
          <input 
            type="text"
            name="mensaje"
          />
          <br />
          <Boton
            texto="Enviar"
            tipo="primary"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;