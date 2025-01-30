import { createContext, useState, useContext } from 'react';
import { loginUser, registerUserData } from '../../services/auth';
import  jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await loginUser(email, password);
      setMessage('Inicio de sesión exitoso');
      setLoading(false);
      // const token = response.data.token;
      localStorage.setItem('user', JSON.stringify({
        username: response.data.user.username,
        email: response.data.user.email,
        id: response.data.user.id,
        role: response.data.user.role,
      }));
      // const decoded = jwt_decode(token);
      setUser(response.data.user);
      setTimeout(() => {
        setMessage(null);
        navigate("/dashboard/user");
      }, 1500); // Retraso antes de redirigir
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setTimeout(() => {
        setError(null);
      }, 1500); // Retraso antes de mostrar el error
      console.error("Error al iniciar sesión:", error);
    }
  };

  const registerData = async (username, email, password) => {
    try {
      const response = await registerUserData(username, email, password);
      setMessage('Registro exitoso');
      setLoading(false);
      // const token = response.data.token;
      localStorage.setItem('user', JSON.stringify({
        username: response.data.user.username,
        email: response.data.user.email,
        id: response.data.user.id,
        role: response.data.user.role,
      }));
      // const decoded = jwt_decode(token);
      setUser(response.data.user);
      setTimeout(() => {
        setMessage(null)
        navigate("/dashboard/user");
      }, 1500); // Retraso antes de redirigir
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setTimeout(() => {
        setError(null);
      }, 1500); // Retraso antes de mostrar el error
      console.error("Error al registrarse:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('Token');
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, registerData, logout, error, message, setError, setMessage, setLoading, loading }}>
      {children}
    </AuthContext.Provider>
  );
};