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
            <b> Nombre </b> 
          </label>
          <br/>
          <input 
            type="text"
            name="nombre"
            required
          />
          <br />
          <label for="email">
            <b>Correo Electronico</b>
            <br />
         </label>
          <input type="Mensaje" />
        </form>
      </div>
    </section>
  );
};

export default Contact;