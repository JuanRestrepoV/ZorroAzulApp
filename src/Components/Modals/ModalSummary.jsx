import React from "react";
import { useNavigate } from "react-router-dom";
import { createReserve } from "../../../services/reserves";
import { toast } from "sonner";

const ModalSummary = ({
  // reservationDetails,
  closeModal,
}) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const reservationDetails = JSON.parse(localStorage.getItem("reservationDetails"));
  const handleConfirm = () => {
    console.log("Reserva confirmada con detalles:", reservationDetails);
    createReserve({
      id_event: reservationDetails.event.id,
      reservation_time: reservationDetails.hour,
      reservation_date: reservationDetails.date.split('T')[0],
      capacity: reservationDetails.capacity,
      id_floor: reservationDetails.floor.id,
      guest: {
        full_name: reservationDetails.guestName,
        identification: reservationDetails.documentNumber,
        email: reservationDetails.guestEmail,
        phone_number: reservationDetails.phone,
        ident_type: reservationDetails.documentType,
      },
      additional_services: reservationDetails.services,
      id_reserve_status: 1,
      table: reservationDetails.tables[0],
    }).then(() => {
      toast.success("Reserva creada correctamente");
    }).catch((error) => {
      toast.error("Error al crear la reserva");
      console.log(error);
    });
    // navigate("/confirmacion");
  };

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
        <h2 className="text-lg font-medium mb-4 text-center">Resumen de la Reserva</h2>
        <hr className="border-t-2 border-lime-500 mb-4" />

        {/* Contenido */}
        <div className="space-y-4">
          <p><strong>Evento Escogido:</strong> {reservationDetails.event.type_event || "N/A"}</p>
          <p><strong>Fecha:</strong> {new Date(reservationDetails.date).toLocaleDateString() || "N/A"}</p>
          <p><strong>Hora:</strong> {reservationDetails.hour || "N/A"}</p>
          <p><strong>Cantidad de Personas:</strong> {reservationDetails.capacity || "N/A"}</p>
          <p><strong>Piso:</strong> {reservationDetails.floor.name || "N/A"}</p>
          <p><strong>Mesa(s):</strong> {reservationDetails.tables?.map((table) => table).join(", ") || "N/A"}</p>
          <p><strong>Servicios Adicionales:</strong> {reservationDetails.services?.map((service) => service.name).join(", ") || "N/A"}</p>
        </div>

        {/* Botón de confirmar */}
        <button
          onClick={handleConfirm}
          className="w-full mt-6 py-2 bg-lime-500 text-black font-semibold rounded hover:bg-lime-600 transition-all cursor-pointer"
        >
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
};

export default ModalSummary;
