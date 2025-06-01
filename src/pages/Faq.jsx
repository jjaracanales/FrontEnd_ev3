import { useEffect, useState } from 'react';
import { Collapse, Spin, Alert } from 'antd';

const { Panel } = Collapse;

function Faq() {
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ipss.get',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al obtener las preguntas frecuentes');
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.data)) {
          setFaq(data.data); // Acceder a data
        } else {
          setFaq([]); // Asegurarse de que faq sea un arreglo
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Error al cargar preguntas frecuentes');
        setLoading(false);
      });
  }, []);

  if (loading) return <Spin size="large" style={{ display: 'block', margin: '4rem auto' }} />;
  if (error) return <Alert type="error" message={error} showIcon />;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2>Preguntas Frecuentes</h2>
      <Collapse accordion>
        {faq.map((item) => (
          <Panel header={item.titulo} key={item.id}>
            <p>{item.respuesta}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default Faq;
