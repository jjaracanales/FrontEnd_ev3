import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';
import './index.css';

import MainLayout from './components/MainLayout';
import Home from './pages/home';
import Productos from './pages/Productos';
import Talleres from './pages/Talleres';
import Faq from './pages/Faq';
import Contacto from './pages/Contacto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="talleres" element={<Talleres />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
