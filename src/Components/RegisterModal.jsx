import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

const RegisterModal = ({ onClose, openLoginModal }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerData, error, message, setError, setMessage, loading, setLoading } = useAuth();


  const registerUser = async (user) => {
    setLoading(true);
    setError("");
    setMessage("");

    await registerData(user.username, user.email, user.password);

  };
  //   try {
  //     const response = await fetch('http://localhost:8000/auth/api/register/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(user),
  //     });

  //     if (response.ok) {
  //       setSuccessMessage("Usuario registrado exitosamente. Redirigiendo al inicio de sesión...");
  //       setTimeout(() => {
  //         openLoginModal();
  //       }, 1500); // Retraso antes de abrir el modal de login
  //     } else {
  //       const errorData = await response.json();
  //       setErrorMessage(errorData.error || "Error al registrar usuario.");
  //     }
  //   } catch (error) {
  //     setErrorMessage("Error al conectar con el servidor.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm z-50">
      <div className="relative w-full max-w-lg h-[600px] bg-white rounded-lg shadow-lg flex overflow-hidden">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>

        <div className="w-1/2 p-6 flex flex-col justify-center">
          <h4 className="text-2xl font-medium text-center mb-4">Registrate</h4>
          <form onSubmit={handleSubmit(registerUser)} className="space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Nombre de Usuario</span>
              <input
                {...register('username', { required: true })}
                placeholder="Ingresa tu nombre de usuario"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400"
              />
              {errors.username && <p className="text-red-600">Se requiere un nombre de usuario</p>}
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Correo Electrónico</span>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="Ingresa tu correo"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400"
              />
              {errors.email && <p className="text-red-600">Se requiere un correo</p>}
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Contraseña</span>
              <input
                {...register('password', { required: true })}
                type="password"
                placeholder="********"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400"
              />
              {errors.password && <p className="text-red-600">Se requiere una contraseña</p>}
            </label>

            {loading ? (
              <div className="flex justify-center items-center">
                <div className="loader border-t-2 border-gray-500 rounded-full w-6 h-6 animate-spin"></div>
                <span className="ml-2 text-gray-500">Registrando usuario...</span>
              </div>
            ) : (
              <button 
                type="submit" 
                className="w-full py-2 rounded-md bg-limeCustom text-black font-semibold mt-4 transition-all duration-300 hover:bg-[#b2e600] hover:border-2 hover:border-black hover:shadow-lg"
                style={{ backgroundColor: '#c9ff13' }}
              >
                Registrate
              </button>
            )}
          </form>

          {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}
          {message && <p className="text-green-600 text-sm mt-4 text-center">{message}</p>}

          <p className="text-center text-sm mt-4">
            Ya tienes cuenta?{" "}
            <button className="text-blue-500 hover:underline" onClick={openLoginModal}>
              Inicia sesión
            </button>
          </p>
        </div>

        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://media-cdn.tripadvisor.com/media/photo-s/29/95/80/a7/un-zorro-de-arriba-y.jpg')" }}></div>
      </div>
    </div>
  );
};

export default RegisterModal;
