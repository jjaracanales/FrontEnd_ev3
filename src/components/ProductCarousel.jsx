import { Carousel } from 'antd';

const ProductCarousel = ({ productos }) => {
  return (
    <Carousel
      autoplay
      arrows
      dotPosition="bottom"
      style={{ maxWidth: '800px', margin: '0 auto' }}
    >
      {productos.slice(0, 3).map((producto, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <img
            src={producto.imgs?.[0] || 'https://via.placeholder.com/800x400.png?text=Imagen+no+disponible'}
            alt={producto.nombre}
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <h3 style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#333' }}>{producto.nombre}</h3>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;