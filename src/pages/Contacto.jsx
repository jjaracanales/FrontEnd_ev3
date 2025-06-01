import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import { Spin, Alert } from 'antd';

function Contacto() {
  const [descripcion, setDescripcion] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ipss.get',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al obtener la descripción');
        }
        return res.json();
      })
      .then((data) => {
        setDescripcion(data.data || ''); // Acceder a data
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Error al cargar la descripción');
        setLoading(false);
      });
  }, []);

  if (loading) return <Spin size="large" style={{ display: 'block', margin: '4rem auto' }} />;
  if (error) return <Alert type="error" message={error} showIcon />;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Contáctanos</h2>
      <p style={{ marginBottom: '2rem' }}>{descripcion}</p>
      <p>¿Tienes dudas o quieres solicitar un producto? Escríbenos:</p>
      <ContactForm />
    </div>
  );
}

export default Contacto;
