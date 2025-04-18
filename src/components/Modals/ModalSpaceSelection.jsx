import React, { useState } from "react";

const ModalSpaceSelection = ({
  closeSpaceSelectionModal,
  openDateSelectionModal,
  selectedSpace,
  setSelectedSpace,
  availableSpaces = [],
  goBack,
}) => {
  const handleSpaceClick = (space) => {
    setSelectedSpace(space); // Establecer el espacio seleccionado
  };

  const isSelected = (space) => selectedSpace === space;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) closeSpaceSelectionModal();
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
          onClick={closeSpaceSelectionModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-lg text-white font-semibold mb-4 text-center">
          Selecciona el espacio de la reserva
        </h2>
        <hr className="border-t-2 border-lime-500 mb-4" />

        {/* Lista de espacios */}
        <div className="flex flex-wrap gap-4 justify-center">
          {availableSpaces.map((space, index) => (
            <button
              key={index}
              onClick={() => handleSpaceClick(space)}
              className={`w-20 h-20 flex items-center justify-center rounded-lg text-center font-semibold border-2 transition-all ${
                isSelected(space)
                  ? "bg-black text-white border-lime-500"
                  : "bg-gray-500 text-white border-white hover:bg-black hover:border-lime-500"
              }`}
            >
              {space}
            </button>
          ))}
        </div>

        {/* Botón de siguiente */}
        <button
          onClick={openDateSelectionModal}
          className="w-full mt-6 py-2 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition-all"
          disabled={!selectedSpace} // Deshabilitar si no hay selección
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModalSpaceSelection;
