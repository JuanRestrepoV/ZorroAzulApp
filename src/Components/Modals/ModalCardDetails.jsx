import React from "react";

const ModalCardDetails = ({ selectedCard, closeModal, openReserveModal, goBack }) => {
  if (!selectedCard) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target.classList.contains("fixed")) closeModal(); // Cierra el modal al hacer clic fuera
      }}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-3xl relative flex flex-col md:flex-row gap-6"
        onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro
      >
        {/* Botón de retroceso */}
        <button
          onClick={goBack}
          className="absolute top-2 left-2 text-gray-600 hover:text-gray-800 z-10"
        >
          ←
        </button>

        {/* Botón de cerrar */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
        >
          ✕
        </button>

        {/* Imagen grande en el lado izquierdo */}
        <div className="w-full md:w-1/2">
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Detalles del card en el lado derecho */}
        <div className="w-full md:w-1/2 flex flex-col justify-between overflow-auto">
          <div>
            <h2 className="text-xl font-bold mb-2">{selectedCard.title}</h2>
            <p className="text-sm font-semibold mb-2">{selectedCard.capacity}</p>
            <p className="text-sm mb-4">{selectedCard.description}</p>
          </div>
          {selectedCard.services && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Servicios incluidos:</h3>
              <div className="grid grid-cols-2 gap-2">
                {selectedCard.services.map((service, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 object-cover rounded mb-1"
                    />
                    <span className="text-xs font-semibold">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mt-4">
            <p className="text-sm font-bold mb-4">Precio: {selectedCard.price}</p>
            <button
              onClick={openReserveModal}
              className="px-4 py-2 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCardDetails;
