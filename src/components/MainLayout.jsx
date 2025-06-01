import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function MainLayout() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" style={{ color: '#fff', float: 'left', fontWeight: 'bold' }}>
          Tejelanas 🧶
        </div>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">Inicio</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/productos">Productos</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/talleres">Talleres</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/faq">Preguntas</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/contacto">Contacto</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '2rem' }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} Tejelanas | Desarrollado con 🧵 y 💻 by Jose Jara Canales
      </Footer>
    </Layout>
  );
}

export default MainLayout;
