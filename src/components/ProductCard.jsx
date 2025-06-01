import { Card, Button } from 'antd';

const { Meta } = Card;

function ProductCard({ producto, onContactClick }) {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: 16 }}
      cover={
        <img
          alt={producto.nombre}
          src={`https://via.placeholder.com/300x200.png?text=${producto.nombre}`}
        />
      }
    >
      <Meta title={producto.nombre} description={producto.descripcion} />
      <p style={{ marginTop: '1rem' }}><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock} unidades</p>
      <Button type="primary" onClick={() => onContactClick(producto.nombre)}>
        ¡Me interesa!
      </Button>
    </Card>
  );
}

export default ProductCard;
