import React from "react";

const ModalSummary = ({
  reservationDetails,
  closeModal,
  confirmReservation,
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) closeModal();
      }}
    >
      <div
        className="bg-black text-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-lg font-semibold mb-4 text-center">Resumen de la Reserva</h2>
        <hr className="border-t-2 border-lime-500 mb-4" />

        {/* Contenido */}
        <div className="space-y-4">
          <p><strong>Evento Escogido:</strong> {reservationDetails.event || "N/A"}</p>
          <p><strong>Fecha:</strong> {reservationDetails.date || "N/A"}</p>
          <p><strong>Hora:</strong> {reservationDetails.time || "N/A"}</p>
          <p><strong>Cantidad de Personas:</strong> {reservationDetails.capacity || "N/A"}</p>
          <p><strong>Piso:</strong> {reservationDetails.floor || "N/A"}</p>
          <p><strong>Mesa(s):</strong> {reservationDetails.tables?.join(", ") || "N/A"}</p>
          <p><strong>Servicios Adicionales:</strong> {reservationDetails.services?.join(", ") || "N/A"}</p>
        </div>

        {/* Botón de confirmar */}
        <button
          onClick={confirmReservation}
          className="w-full mt-6 py-2 bg-lime-500 text-black font-semibold rounded hover:bg-lime-600 transition-all cursor-pointer"
        >
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
};

export default ModalSummary;
