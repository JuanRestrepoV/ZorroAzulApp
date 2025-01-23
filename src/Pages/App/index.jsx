import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import NotFound from '../NotFound';
import Reservas from '../Reservas';
import DashBoard from '../DashBoard';
import Confirmation from '../Confirmation';
import Navbar from '../../Components/Navbar';
import Floor11Map from '../../Components/FloorsMap/Floor11Map';
import Floor12Map from '../../Components/FloorsMap/Floor12Map';
import KanbanTable from '../../Components/KanbanTable'; // Importa el tablero Kanban
import './App.css';

const AppRoutes = () => {
  const dummyFeedbacks = [
    { _id: '1', status: 'Not Started', archived: '', title: 'Reserva 1' },
    { _id: '2', status: 'In Progress', archived: '', title: 'Reserva 2' },
    { _id: '3', status: 'Done', archived: '', title: 'Reserva 3' },
    { _id: '4', status: 'Archived', archived: 'Archived', title: 'Reserva 4' },
  ];

  let routes = useRoutes([
    { path: '/', element: <><Navbar /><Home /></> },
    { path: '/Home', element: <><Navbar /><Home /></> },
    { path: '/Reservas', element: <><Navbar /><Reservas /></> },
    { path: '/dashboard/user', element: <><Navbar /><DashBoard userType="user" /></> },
    { path: '/dashboard/admin', element: <><Navbar /><KanbanTable feedbacks={dummyFeedbacks} /></> },
    { path: '/confirmacion', element: <><Navbar /><Confirmation /></> },
    { path: '/piso-11', element: <><Navbar /><Floor11Map /></> },
    { path: '/*', element: <><Navbar /><NotFound /></> },
    { path: '/piso-12', element: <><Navbar /><Floor12Map /></> },
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

export default AppRoutes;
