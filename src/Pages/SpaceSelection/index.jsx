import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../../Components/Navbar/Layout";

const SpaceSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Datos preseleccionados (recibidos desde la ruta anterior)
  const { floor, capacity, date, time } = location.state || {};
  const [selectedSpace, setSelectedSpace] = useState(null);

  // Ejemplo de espacios disponibles (simulación de API)
  const spaces = [
    { id: 1, name: "Mesa 1", capacity: 4, available: true },
    { id: 2, name: "Mesa 2", capacity: 6, available: false },
    { id: 3, name: "Mesa 3", capacity: 2, available: true },
    { id: 4, name: "Mesa 4", capacity: 8, available: true },
  ];

  const handleSpaceClick = (space) => {
    if (space.available) {
      setSelectedSpace(space.id === selectedSpace ? null : space.id);
    }
  };

  const confirmSelection = () => {
    if (selectedSpace) {
      alert(`Has seleccionado ${spaces.find((s) => s.id === selectedSpace)?.name}`);
      // Aquí podrías redirigir al siguiente paso o enviar la selección al backend.
      navigate("/confirmation");
    } else {
      alert("Por favor selecciona un espacio antes de continuar.");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto relative">
        {/* Título y descripción */}
        <div className="text-center text-white py-6">
          <h1 className="text-3xl font-bold mb-4">Selecciona tu espacio</h1>
          <p className="text-lg">
            Piso seleccionado: {floor || "N/A"}, Capacidad: {capacity || "N/A"} personas
          </p>
        </div>

        {/* Mapa interactivo */}
        <div className="grid grid-cols-3 gap-6 p-6">
          {spaces.map((space) => (
            <div
              key={space.id}
              className={`flex items-center justify-center h-20 rounded-lg cursor-pointer transition-all ${
                space.available
                  ? selectedSpace === space.id
                    ? "bg-blue-500 text-white"
                    : "bg-green-500 hover:bg-blue-500 hover:text-white"
                  : "bg-gray-500 text-gray-300 cursor-not-allowed"
              }`}
              onClick={() => handleSpaceClick(space)}
            >
              {space.name} ({space.capacity})
            </div>
          ))}
        </div>

        {/* Botones de acción */}
        <div className="flex justify-between px-6 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Volver
          </button>
          <button
            onClick={confirmSelection}
            className="px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600"
          >
            Confirmar selección
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SpaceSelection;
