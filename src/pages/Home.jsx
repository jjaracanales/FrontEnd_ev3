import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Sección del Hero */}
      <div
        style={{
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Capa semitransparente */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro con transparencia
            zIndex: 1,
          }}
        ></div>
        {/* Título */}
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            zIndex: 2, // Asegura que el texto esté encima de la capa
          }}
        >
          Bienvenid@ a Tejelanas 🧶
        </h1>
      </div>

      {/* Contenido principal */}
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Descubre la magia de los productos hechos a mano, creados con amor en Chile. 
          En Tejelanas, celebramos la tradición y la creatividad a través de piezas únicas y sostenibles.
          <br /><br />
          Cada uno de nuestros productos es confeccionado cuidadosamente por artesanas locales, quienes ponen dedicación y pasión en cada detalle. Nos inspira la naturaleza, los colores y las texturas de nuestra tierra, y buscamos transmitir esa esencia en cada creación.
          <br /><br />
          Además de ofrecer productos exclusivos, en Tejelanas fomentamos el aprendizaje y la comunidad. Organizamos talleres donde puedes aprender técnicas ancestrales como el telar y el crochet, ideales para quienes desean explorar su creatividad y conectar con la cultura textil chilena.
          <br /><br />
          Nuestro compromiso es con la calidad, la sostenibilidad y el comercio justo. Utilizamos fibras naturales y procesos responsables, apoyando a pequeñas productoras y promoviendo el consumo consciente.
        </p>
        <img
          src="/made.png"
          alt="Hecho en Chile"
          style={{ width: '200px', marginBottom: '2rem' }}
        />
        <Card
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'left',
            padding: '1rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>¿Qué ofrecemos?</h2>
          <ul style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            <li>Productos hechos a mano con fibras naturales.</li>
            <li>Talleres para aprender técnicas como telar y crochet.</li>
            <li>Envíos a todo Chile a través de Starken y Chilexpress.</li>
            <li>Atención personalizada y asesoría para elegir el producto ideal.</li>
            <li>Regalos únicos y personalizados para ocasiones especiales.</li>
          </ul>
        </Card>
        <div style={{ marginTop: '2rem' }}>
          <Button
            type="primary"
            size="large"
            style={{ marginRight: '1rem' }}
            onClick={() => navigate('/productos')}
          >
            Ver Productos
          </Button>
          <Button
            type="default"
            size="large"
            onClick={() => navigate('/talleres')}
          >
            Conoce Nuestros Talleres
          </Button>
        </div>
      </div>
    </div>
  );
}
