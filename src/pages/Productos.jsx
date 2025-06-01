import { useEffect, useState } from 'react';
import { Spin, Alert, Card, Button } from 'antd';

const { Meta } = Card;

function Productos() {
  const [productos, setProductos] = useState([]);
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
          throw new Error('Error al obtener los productos');
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.data.productos)) {
          setProductos(data.data.productos); // Acceder a data.productos
        } else {
          setProductos([]); // Asegurarse de que productos sea un arreglo
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Error al cargar los productos');
        setLoading(false);
      });
  }, []);

  const handleContacto = (producto) => {
    alert(`Interesado en: ${producto.nombre}`);
  };

  if (loading) return <Spin size="large" style={{ display: 'block', margin: '4rem auto' }} />;
  if (error) return <Alert type="error" message={error} showIcon />;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', padding: '2rem' }}>
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Card
            key={producto.id}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt={producto.nombre}
                src={producto.imgs?.[0] || 'https://via.placeholder.com/300x200.png?text=Imagen+no+disponible'}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200.png?text=Imagen+no+disponible';
                }}
              />
            }
          >
            <Meta title={producto.nombre} description={`Precio: $${producto.precio}`} />
            <p style={{ marginTop: '1rem' }}>{producto.descripcion}</p>
            <Button type="primary" block onClick={() => handleContacto(producto)}>
              Contactar
            </Button>
          </Card>
        ))
      ) : (
        <Alert type="info" message="No hay productos disponibles" showIcon />
      )}
    </div>
  );
}

export default Productos;
