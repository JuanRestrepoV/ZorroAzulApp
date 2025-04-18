// import { useRoutes, BrowserRouter } from 'react-router-dom';
// import Home from '../Home';
// import NotFound from '../NotFound';
// import Reservas from '../Reservas';
// import DashBoard from '../DashBoard';
// import Confirmation from '../Confirmation';
// import Navbar from '../../Components/Navbar';
// import Floor11Map from '../../Components/FloorsMap/Floor11Map';
// import Floor12Map from '../../Components/FloorsMap/Floor12Map';
// import KanbanTable from '../../Components/KanbanTable'; // Importa el tablero Kanban
// import './App.css';
// import { AuthProvider } from '../../context/AuthContext';

// const AppRoutes = () => {
//   const dummyFeedbacks = [
//     { _id: '1', status: 'Not Started', archived: '', title: 'Reserva 1' },
//     { _id: '2', status: 'In Progress', archived: '', title: 'Reserva 2' },
//     { _id: '3', status: 'Done', archived: '', title: 'Reserva 3' },
//     { _id: '4', status: 'Archived', archived: 'Archived', title: 'Reserva 4' },
//   ];

//   let routes = useRoutes([
//     { path: '/', element: <><Navbar /><Home /></> },
//     { path: '/Home', element: <><Navbar /><Home /></> },
//     { path: '/Reservas', element: <><Navbar /><Reservas /></> },
// { path: '/dashboard/user', element: <><Navbar /><DashBoard userType="user" /></> },
// { path: '/dashboard/admin', element: <><Navbar /><KanbanTable feedbacks={dummyFeedbacks} /></> },
//     { path: '/confirmacion', element: <><Navbar /><Confirmation /></> },
//     { path: '/piso-11', element: <><Navbar /><Floor11Map /></> },
//     { path: '/*', element: <><Navbar /><NotFound /></> },
//     { path: '/piso-12', element: <><Navbar /><Floor12Map /></> },
//   ]);

//   return routes;
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <AppRoutes />
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default AppRoutes;
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import Reservas from "../Reservas";
import DashBoard from "../DashBoard";
import Confirmation from "../Confirmation";
import Navbar from "@/components/Navbar";
import "./App.css";
import { AuthProvider, useAuth } from "../../context/AuthContext";
import FloorMap from "../../components/FloorsMap/FloorMap";
import KanbanBoardPage from "../KanbanBoard";
import { LoaderProvider } from "@/context/Loader";
import { Toaster } from "sonner";

// Componente PrivateRoute para proteger rutas
const PrivateRoute = ({ element, requiredRole, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  // Si el usuario no está autenticado, redirige a la página de login
  if (!user) {
    return <Navigate to="/home" />;
  }

  // Si el usuario no tiene el rol adecuado, redirige a una página de "no encontrado"
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/not-found" />;
  }

  // Si pasa las verificaciones, renderiza el componente de la ruta
  return element;
};

const AppRoutes = () => {
  const dummyFeedbacks = [
    { _id: "1", status: "Not Started", archived: "", title: "Reserva 1" },
    { _id: "2", status: "In Progress", archived: "", title: "Reserva 2" },
    { _id: "3", status: "Done", archived: "", title: "Reserva 3" },
    { _id: "4", status: "Archived", archived: "Archived", title: "Reserva 4" },
  ];

  let routes = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Home",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Reservas",
      element: (
        <>
          <Navbar />
          <Reservas />
        </>
      ),
    },
    // Rutas privadas, protegidas por autenticación
    {
      path: "/dashboard/user",
      element: (
        <PrivateRoute
          element={
            <>
              <Navbar />
              <DashBoard userType="user" />
            </>
          }
        />
      ),
    },
    // { path: '/dashboard/admin', element: <PrivateRoute element={<><Navbar /><KanbanTable feedbacks={dummyFeedbacks} /></>} requiredRole="admin" /> },
    {
      path: "/confirmacion",
      element: (
        <>
          <Navbar />
          <Confirmation />
        </>
      ),
    },
    {
      path: "/piso",
      element: (
        <>
          <Navbar />
          <FloorMap />
        </>
      ),
    },
    {
      path: "/*",
      element: (
        <>
          <Navbar />
          <NotFound />
        </>
      ),
    },
    // { path: '/piso-12', element: <><Navbar /><FloorMap /></> },
    {
      path: "/dashboard/admin",
      element: (
        <div className="font-medium min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 overflow-y-auto">
            <KanbanBoardPage />
          </div>
        </div>
      ),
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <AuthProvider>
      <LoaderProvider>
        <AppRoutes />
        <Toaster richColors={true} />
      </LoaderProvider>
    </AuthProvider>
  );
};

export default App;
