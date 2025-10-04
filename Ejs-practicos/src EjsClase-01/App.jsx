/*Clase 1:

1. Crea una página HTML que incluya un botón estilizado con CSS.
2. Añade interactividad al botón usando JavaScript para mostrar un mensaje al hacer clic.
3. Configura un proyecto React con Vite e implementa un componente funcional que muestre un saludo personalizado*/

function ClaseUno({ nombre }) {
  return (
    <>
      <header>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Clases</a>
          <a href="#">Ejercicios</a>
        </nav>
        <h1>Bienvenido a la primera clase de React Js</h1>
        <h2>👋 Hola {nombre}, gracias por estar aquí</h2>
      </header>

      <main>
        <section>
          <h2>Contenido de la clase</h2>
          <ul>
              <li>Bienvenida al curso</li>
              <li>Presentación Staff académico</li>
              <li>Metodología de cursada</li>
              <li>Proyecto integrador final</li>
              <li>After Class</li>
              <li>Repaso HTML, CSS y JavaScript</li>
              <li>Instalación con Vite y Node.js</li>
              <li>Estructura básica del proyecto React</li>
              <li>Introducción a JSX y creación de componentes funcionales</li>
          </ul>
        </section>

        <section>
          <h2>Objetivos de la clase</h2>
          <ol>
            <li>Revisar los fundamentos de HTML, CSS y JavaScript</li>
            <li>Comprender el propósito de ReactJS y su lugar en el desarrollo web moderno</li>
            <li>Configurar un proyecto inicial de React con Vite</li>
            <li>Crear los primeros componentes funcionales usando JSX</li>
          </ol>
        </section>
        <section>
          <h2>HTML (HyperText Markup Language)</h2>
          <p>Es un lenguaje de marcado para estructurar el contenido de una página web</p>
          <p>Define qué elementos aparecen, como títulos, párrafos, imágenes o botones.</p>
          <button onClick={() => alert(`¡Muy bien ${nombre}! Pronto aprenderás más de HTML 🚀`)}>
            Ver más
          </button>
        </section>
        <section>
          <h2>CSS (Cascading Style Sheets)</h2>
          <p>Es lo que usamos para estilizar y dar formato visual al contenido definido con HTML.</p>
          <p>Con CSS podemos cambiar colores, tamaños, tipografías, márgenes y mucho más, logrando que nuestras páginas sean atractivas y fáciles de usar.</p>
          <button onClick={() => alert(`¡Muy bien ${nombre}! Pronto aprenderás más de CSS 🚀`)}>
            Ver más
          </button>
        </section>
        <section>
          <h2>JavaScript</h2>
          <p>Es el lenguaje que añade interactividad a nuestras páginas.</p>
          <p>Es lo que hace que los botones respondan a los clics, que aparezcan mensajes o que cambien dinámicamente los datos en pantalla.</p>
          <p>JavaScript permite que las páginas sean dinámicas y funcionales.</p>
          <button onClick={() => alert(`¡Muy bien ${nombre}! Pronto aprenderás más de JS 🚀`)}>
            Ver más
          </button>
        </section>
      </main>

      <footer>
        <p>Hasta la próxima práctica</p>
      </footer>
    </>
  );
}

export default ClaseUno;