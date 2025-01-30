import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; 

function LoginModal({ onClose, openRegisterModal }) {
  const { login, error, message, setError, setMessage, loading, setLoading } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const email = e.target.email.value;
    const password = e.target.password.value;
    
    await login(email, password);

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm z-50">
      <div className="relative w-full max-w-lg h-[500px] bg-white rounded-lg shadow-lg flex overflow-hidden">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>

        <div className="w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-xl font-medium mb-4 text-center text-gray-900">Inicia sesión</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Correo Electrónico</span>
              <input 
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400"
                required
              />
            </label>
            
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Contraseña</span>
              <input 
                type="password"
                name="password"
                placeholder="********"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400"
                required
              />
            </label>

            {loading ? (
              <div className="flex justify-center items-center">
                <div className="loader border-t-2 border-gray-500 rounded-full w-6 h-6 animate-spin"></div>
                <span className="ml-2 text-gray-500">Validando credenciales...</span>
              </div>
            ) : (
              <button 
                type="submit" 
                className="w-full py-2 rounded-md bg-limeCustom text-black font-semibold mt-4 transition-all duration-300 hover:bg-[#b2e600] hover:border-2 hover:border-black hover:shadow-lg"
                style={{ backgroundColor: '#c9ff13' }}
              >
                Iniciar Sesión
              </button>
            )}
          </form>

          {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}
          {message && <p className="text-green-600 text-sm mt-4 text-center">{message}</p>}

          <p className="text-center text-sm mt-4">
            ¿Aún no tienes cuenta?{" "}
            <button className="text-blue-500 hover:underline" onClick={openRegisterModal}>
              Regístrate aquí
            </button>
          </p>
        </div>

        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://media-cdn.tripadvisor.com/media/photo-s/29/95/80/a7/un-zorro-de-arriba-y.jpg')" }}></div>
      </div>
    </div>
  );
}

export default LoginModal;
