import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Boton from '../components/Boton';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(resp => resp.json())
      .then(data => setProducto(data));
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <section className="about">
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} style={{ width: '200px' }} />
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
      <Boton texto="Volver" tipo="secondary" onClick={() => history.back()} />
    </section>
  );
};

export default DetalleProducto;