import Estudiante from "./Estudiante";

const ListaEstudiantes = () => {

    const datosEstudiantes= [
       { nombre: "Juan Perez", edad: 20},
       { nombre: "Maria Gomez", edad: 22},
       { nombre: "Luis Rodriguez", edad: 21},
    ];

  return (
    <div>
        {datosEstudiantes.map((estudiantes, index) => (
            <Estudiante key={index} datosEstudiantes={estudiantes} />
        ))}
    </div>
  );
}

export default ListaEstudiantes;