# Tejelanas - Frontend

Este proyecto es el frontend de **Tejelanas**, una plataforma que celebra la tradición y creatividad a través de productos hechos a mano en Chile. Además, fomenta el aprendizaje mediante talleres y ofrece envíos a todo el país.

## Descripción del Proyecto

El proyecto fue desarrollado como parte de la **Unidad 3 de Frontend** por **José Jara Canales**. Utiliza tecnologías modernas como React y Vite para ofrecer una experiencia rápida y eficiente.

### Funcionalidades principales:
- **Productos hechos a mano**: Visualización de productos únicos creados con fibras naturales.
- **Talleres**: Información sobre talleres para aprender técnicas como telar y crochet.
- **Envíos**: Detalles sobre envíos a través de Starken y Chilexpress.
- **Formulario de contacto**: Permite a los usuarios enviar mensajes directamente desde la plataforma.

## Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para proyectos modernos.
- **Ant Design**: Librería de componentes para un diseño elegante y responsivo.
- **Fetch API**: Para consumir datos desde una API REST.

## Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:
   ```bash
   git clone git@github.com:jjaracanales/FrontEnd_ev3.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd FrontEnd_ev3
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta el proyecto:
   ```bash
   npm run dev
   ```
5. Abre tu navegador y visita `http://localhost:5173` para ver el proyecto en acción.

## Guía de Buenas Prácticas para el Desarrollo

Esta guía tiene como objetivo establecer convenciones y recomendaciones para garantizar un desarrollo eficiente, accesible y mantenible utilizando React y Ant Design.

### 1. Convenciones de Nomenclatura
- **Componentes**: Usa `PascalCase` para los nombres de los componentes. Ejemplo: `ProductCarousel.jsx`.
- **Archivos**: Los nombres de los archivos deben coincidir con el nombre del componente principal que contienen. Ejemplo: `MainLayout.jsx`.
- **Variables y funciones**: Usa `camelCase` para las variables y funciones. Ejemplo: `fetchProductos`.
- **Constantes**: Usa `SCREAMING_SNAKE_CASE` para constantes globales. Ejemplo: `API_BASE_URL`.

### 2. Estructura de Archivos
Organiza los archivos del proyecto de manera clara y modular:
```
src/
├── components/       # Componentes reutilizables
│   ├── ProductCarousel.jsx
│   ├── Header.jsx
│   └── Footer.jsx
├── pages/            # Páginas principales
│   ├── Home.jsx
│   ├── Productos.jsx
│   └── Contacto.jsx
├── assets/           # Imágenes, íconos y otros recursos estáticos
├── styles/           # Archivos CSS o SCSS globales
├── utils/            # Funciones auxiliares y helpers
└── App.jsx           # Componente raíz
```

### 3. Uso de Variables
- Centraliza las configuraciones y constantes en un archivo como `src/utils/constants.js`. Ejemplo:
  ```javascript
  export const API_BASE_URL = 'https://api.tejelanas.com/v1';
  export const DEFAULT_IMAGE = 'https://via.placeholder.com/300x200.png?text=Imagen+no+disponible';
  ```

- Usa variables descriptivas y evita abreviaturas ambiguas. Ejemplo:
  ```javascript
  const productosDisponibles = productos.filter((producto) => producto.stock > 0);
  ```

### 4. Recomendaciones para Accesibilidad
- **Etiquetas `alt`**: Asegúrate de que todas las imágenes tengan un atributo `alt` descriptivo.
- **Contraste de colores**: Usa colores con suficiente contraste para garantizar la legibilidad.
- **Navegación por teclado**: Verifica que todos los elementos interactivos sean accesibles mediante el teclado.
- **Roles y atributos ARIA**: Usa roles y atributos ARIA cuando sea necesario para mejorar la accesibilidad. Ejemplo:
  ```jsx
  <button aria-label="Cerrar menú" onClick={handleCloseMenu}>
    Cerrar
  </button>
  ```

### 5. Recomendaciones para Usabilidad
- **Diseño responsivo**: Usa unidades relativas como `%`, `em` o `rem` y componentes como `Grid` de Ant Design para garantizar que el diseño se adapte a diferentes tamaños de pantalla.
- **Feedback visual**: Proporciona retroalimentación visual para las acciones del usuario, como botones que cambian de color al hacer clic.
- **Carga de datos**: Usa indicadores de carga (`Spin` de Ant Design) mientras se obtienen datos de la API.
- **Errores claros**: Muestra mensajes de error claros y útiles cuando algo falla.

### 6. Estilo de Código
- Usa un linter como `ESLint` para mantener un estilo de código consistente.
- Configura un archivo `.editorconfig` para alinear las configuraciones de formato entre los desarrolladores.
- Usa `Prettier` para formatear automáticamente el código.

### 7. Pruebas
- Escribe pruebas unitarias para los componentes clave utilizando herramientas como `Jest` y `React Testing Library`.
- Asegúrate de probar la accesibilidad con herramientas como `axe-core`.

---

Siguiendo estas buenas prácticas, garantizamos un código más limpio, accesible y fácil de mantener. 😊

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos para contribuir:

1. Haz un fork de este repositorio.
2. Crea una nueva rama para tu característica o corrección de bug:
   ```bash
   git checkout -b mi-nueva-caracteristica
   ```
3. Realiza tus cambios y haz commit de ellos:
   ```bash
   git commit -m 'Agrega una nueva característica'
   ```
4. Haz push a la rama de tu fork:
   ```bash
   git push origin mi-nueva-caracteristica
   ```
5. Crea un Pull Request en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por visitar el repositorio de Tejelanas Vivi - Frontend! Esperamos que disfrutes explorando el código y aprendiendo sobre el desarrollo de aplicaciones web con React y Vite.