import './App.css';
import EquipoTalentoLab from './components/EquipoTalentoLab';
import GaleriaIntereses from './components/GaleriaIntereses';
import TarjetaProyecto from './components/TarjetaProyecto';

function App() {

  const equipo = [
  { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://api.dicebear.com/9.x/personas/svg?seed=Aidan',  },
  { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://api.dicebear.com/9.x/micah/svg?seed=Christopher' },
  { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Kingston' },
  { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://api.dicebear.com/9.x/big-smile/svg?seed=Kimberly' },
  ];

  const proyectos = [
  { titulo: 'Plataforma de Gestión', descripcion: 'Una herramienta para optimizar la gestión de equipos.', botonTexto: 'Explorar proyecto' },
  { titulo: 'App de Finanzas', descripcion: 'Controla tus gastos y ahorros de manera simple.', botonTexto: 'Ver detalles' },
  { titulo: 'Chat-bots', descripcion: 'Da atención efectiva y rápida a tus clientes.', botonTexto: 'Ver más' },
  { titulo: 'Gestión de inventarios', descripcion: 'Controla tus productos en tiempo real.', botonTexto: 'Explorar proyecto' },
  ];

  const intereses =['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js', 'Java', 'Python', 'AWS', 'CSS', 'HTML5', 'Ridux', 'Github', 'MySQL' ];

  return (
    <>
    <h1>TalentoLab</h1>
      <h2>Equipos</h2>
      <div className='equipo-container'>
        {equipo.map((equipo, index) => (
          <EquipoTalentoLab key={index} equipo={equipo} />
        ))}
      </div>

      <h2>Proyectos</h2>
      <div className='proyectos-container'>
        {proyectos.map((proyecto, index) => (
          <TarjetaProyecto
            key={index}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            botonTexto={proyecto.botonTexto}
          />
        ))}
      </div>

      <div>
        <h2> Mis Intereses</h2>
        <GaleriaIntereses temas={intereses} />
      </div>
    </>
  )
}

export default App