import { useEffect, useState } from 'react';
import { Spin, Alert, Card, Button } from 'antd';

const { Meta } = Card;

function Talleres() {
  const [talleres, setTalleres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ipss.get',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al obtener los talleres');
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.data.servicios)) {
          setTalleres(data.data.servicios); // Acceder a data.servicios
        } else {
          setTalleres([]); // Asegurarse de que talleres sea un arreglo
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Error al cargar talleres');
        setLoading(false);
      });
  }, []);

  const handleInscripcion = (nombreTaller) => {
    alert(`Te inscribiste al taller: ${nombreTaller}`);
  };

  if (loading) return <Spin size="large" style={{ display: 'block', margin: '4rem auto' }} />;
  if (error) return <Alert type="error" message={error} showIcon />;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', padding: '2rem' }}>
      {talleres.length > 0 ? (
        talleres.map((taller) => (
          <Card
            key={taller.id}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt={taller.nombre}
                src={taller.imgs?.[0] || 'https://via.placeholder.com/300x200.png?text=Imagen+no+disponible'}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200.png?text=Imagen+no+disponible';
                }}
              />
            }
          >
            <Meta title={taller.nombre} description={`Ubicación: ${taller.ubicacion}`} />
            <p style={{ marginTop: '1rem' }}>Fecha: {taller.fecha}</p>
            <p>Cupos disponibles: {taller.cupos}</p>
            <Button type="primary" block onClick={() => handleInscripcion(taller.nombre)}>
              Inscribirse
            </Button>
          </Card>
        ))
      ) : (
        <Alert type="info" message="No hay talleres disponibles" showIcon />
      )}
    </div>
  );
}

export default Talleres;
