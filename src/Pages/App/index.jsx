import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import NotFound from '../NotFound';
import Reservas from '../Reservas';
import DashBoard from '../DashBoard';
import Confirmation from '../Confirmation'; // Importa el componente de confirmación
import Navbar from '../../Components/Navbar';
import './App.css';

const AppRoutes = () => {
  // Definir las rutas y agregar el Navbar a cada una
  let routes = useRoutes([
    { path: '/', element: <><Navbar /><Home /></> },
    { path: '/Home', element: <><Navbar /><Home /></> },
    { path: '/Reservas', element: <><Navbar /><Reservas /></> },
    { path: '/dashboard/user', element: <><Navbar /><DashBoard userType="user" /></> },
    { path: '/dashboard/admin', element: <><Navbar /><DashBoard userType="admin" /></> },
    { path: '/confirmacion', element: <><Navbar /><Confirmation /></> },  // Agrega esta línea para la ruta de confirmación
    { path: '/*', element: <><Navbar /><NotFound /></> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
