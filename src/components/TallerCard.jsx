import { Card, Button } from 'antd';

const { Meta } = Card;

function TallerCard({ taller, onInscribirClick }) {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: 16 }}
      title={taller.nombre}
    >
      <Meta description={taller.descripcion} />
      <p style={{ marginTop: '1rem' }}><strong>Fecha:</strong> {taller.fecha}</p>
      <p><strong>Cupos disponibles:</strong> {taller.cupos}</p>
      <Button type="primary" onClick={() => onInscribirClick(taller.nombre)}>
        Quiero inscribirme
      </Button>
    </Card>
  );
}

export default TallerCard;
