import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de importar BrowserRouter
import App from './Pages/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter> {/* Envuelve toda tu aplicación con BrowserRouter */}
      <App />
    </BrowserRouter>
  // </StrictMode>
);
