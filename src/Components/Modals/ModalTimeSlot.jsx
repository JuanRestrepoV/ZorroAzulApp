import React from "react";

const ModalTimeSlot = ({
  closeTimeSlotModal,
  openHourSelectionModal,
  setTimeSlot,
  selectedTimeSlot,
  goBack,
}) => {
  const timeSlots = ["Mañana", "Tarde", "Noche"];

  const handleTimeSlotClick = (slot) => {
    setTimeSlot(slot); // Establecer la franja horaria seleccionada

  };

  const isSelected = (slot) => selectedTimeSlot === slot;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundImage: `url('../../Assets/1ModalBackground.jpg')`, // Uso del path proporcionado
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) closeTimeSlotModal();
      }}
    >
      <div
        className="bg-black p-6 rounded-lg shadow-lg w-96 relative modal-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de retroceso */}
        <button
          onClick={goBack}
          className="absolute top-2 left-2 text-gray-600 hover:text-gray-800"
        >
          ←
        </button>

        {/* Botón de cerrar */}
        <button
          onClick={closeTimeSlotModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-lg text-white font-FuenteTitulos mb-4 text-center">
          Selecciona una franja horaria
        </h2>
        <hr className="border-t-2 border-lime-500 mb-4" />

        {/* Opciones de franja horaria */}
        <div className="flex flex-col space-y-4">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => handleTimeSlotClick(slot)}
              className={`px-4 py-2 rounded-lg text-center font-Textos border-2 transition-all ${
                isSelected(slot)
                  ? "bg-black text-white border-lime-500"
                  : "bg-gray-500 text-white border-white hover:bg-black hover:border-lime-500"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Botón de siguiente */}
        <button
          onClick={openHourSelectionModal}
          className={`w-full mt-6 py-2 rounded-lg font-semibold transition-all ${
            selectedTimeSlot
              ? "bg-lime-500 text-white hover:bg-lime-600"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={!selectedTimeSlot} // Deshabilitar si no hay selección
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModalTimeSlot;
