import React from "react";

const ModalTableInfo = ({ mesaId, closeModal, openAdditionalServicesModal }) => {
  const handleConfirm = () => {
    closeModal(); // Cierra el modal actual
    openAdditionalServicesModal(); // Abre el siguiente modal
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) closeModal();
      }}
    >
      <div
        className="bg-black p-6 rounded-lg shadow-lg w-96 relative modal-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Contenido del modal */}
        <h2 className="text-lg text-white font-medium mb-4 text-center">
          Detalles de la Mesa {mesaId}
        </h2>
        <hr className="border-t-2 border-lime-500 mb-4" />
        <p className="text-white mb-4">
          Aquí puedes añadir información específica de la mesa {mesaId}.
        </p>

        {/* Botón de confirmar */}
        <button
          onClick={handleConfirm} // Ejecuta la lógica para abrir el siguiente modal.
          className="w-full mt-6 py-2 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition-all"
        >
          Confirmar mesa
        </button>
      </div>
    </div>
  );
};

export default ModalTableInfo;
