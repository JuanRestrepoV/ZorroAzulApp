import React, { useState } from "react";

const ModalCapacity = ({
  closeCapacityModal,
  openFloorSelectionModal,
  selectedCapacity,
  setSelectedCapacity,
  goBack,
}) => {
  const [localCapacity, setLocalCapacity] = useState(selectedCapacity || 0); // Inicializa en 0.

  const handleCapacityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) setLocalCapacity(value); // Permite 0 o valores positivos.
  };

  const handleConfirm = () => {
    setSelectedCapacity(localCapacity);
    openFloorSelectionModal();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) closeCapacityModal();
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
          onClick={closeCapacityModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-lg text-white font-semibold mb-4 text-center">
          Selecciona la cantidad de personas
        </h2>
        <hr className="border-t-2 border-lime-500 mb-4" />

        {/* Campo para seleccionar capacidad */}
        <div className="flex items-center justify-center mb-4">
          <input
            type="number"
            min="0" // Asegura que el valor mínimo sea 0.
            value={localCapacity}
            onChange={handleCapacityChange}
            className="w-20 p-2 text-center bg-gray-700 text-white rounded border-2 border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <span className="text-white ml-2">personas</span>
        </div>

        {/* Botón de confirmar */}
        <button
          onClick={handleConfirm}
          className="w-full py-2 bg-lime-500 text-white font-semibold rounded hover:bg-lime-600 transition-all"
          disabled={localCapacity === 0} // Deshabilitar si no se ha ingresado un valor válido.
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModalCapacity;
