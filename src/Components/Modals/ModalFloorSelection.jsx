import React, { useState } from "react";

const ModalFloorSelection = ({
  closeFloorSelectionModal,
  openSpaceSelectionModal,
  selectedFloor,
  setSelectedFloor,
  goBack,
}) => {
  const handleFloorSelection = (floor) => {
    setSelectedFloor(floor); // Establecer el piso seleccionado
  };

  const isSelected = (floor) => selectedFloor === floor;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) closeFloorSelectionModal();
      }}
    >
      <div
        className="bg-black p-6 rounded-lg shadow-lg w-96 relative modal-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de retroceso */}
        <button
          onClick={goBack}
          className="absolute top-2 left-2 text-gray-400 hover:text-gray-600"
        >
          ←
        </button>

        {/* Botón de cerrar */}
        <button
          onClick={closeFloorSelectionModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-lg text-white font-semibold mb-4 text-center">
          Selecciona el piso
        </h2>
        <hr className="border-t-2 border-lime-500 mb-4" />

        {/* Opciones de pisos */}
        <div className="grid grid-cols-1 gap-4">
          {/* Piso 11 */}
          <div
            onClick={() => handleFloorSelection("Piso 11")}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              isSelected("Piso 11")
                ? "bg-black text-white border-lime-500"
                : "bg-gray-500 text-white border-white hover:bg-black hover:border-lime-500"
            }`}
          >
            <img
              src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=300" // Cambia esto por la URL real de la imagen del Piso 11
              alt="Piso 11"
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h3 className="text-center font-semibold">Piso 11</h3>
          </div>

          {/* Piso 12 */}
          <div
            onClick={() => handleFloorSelection("Piso 12")}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              isSelected("Piso 12")
                ? "bg-black text-white border-lime-500"
                : "bg-gray-500 text-white border-white hover:bg-black hover:border-lime-500"
            }`}
          >
            <img
              src="https://images.pexels.com/photos/3279692/pexels-photo-3279692.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" // Cambia esto por la URL real de la imagen del Piso 12
              alt="Piso 12"
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h3 className="text-center font-semibold">Piso 12</h3>
          </div>
        </div>

        {/* Botón de confirmar */}
        <button
          onClick={openSpaceSelectionModal}
          className="w-full mt-6 py-2 bg-lime-500 text-white font-semibold rounded hover:bg-lime-600 transition-all"
          disabled={!selectedFloor} // Deshabilitar si no hay selección
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModalFloorSelection;
