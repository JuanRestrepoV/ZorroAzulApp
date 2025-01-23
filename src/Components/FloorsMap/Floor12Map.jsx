import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MesasPiso12SVG from "../MesasPiso12SVG";
import ModalTableInfo from "../Modals/ModalTableInfo";
import ModalAdditionalServices from "../Modals/ModalAdditionalServices";
import ModalSummary from "../Modals/ModalSummary";

const Floor12Map = () => {
  const [selectedMesa, setSelectedMesa] = useState(null);
  const [isTableInfoModalOpen, setIsTableInfoModalOpen] = useState(false);
  const [isAdditionalServicesModalOpen, setIsAdditionalServicesModalOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [validationMessage, setValidationMessage] = useState("");
  const [reservationDetails, setReservationDetails] = useState({
    event: "Cumpleaños",
    date: "2024-12-12",
    time: "7:00 PM",
    capacity: 5,
    floor: "12",
    tables: [],
    services: [],
  });

  const navigate = useNavigate();

  const handleMesaClick = (mesaId) => {
    setSelectedMesa(mesaId);
    setReservationDetails((prev) => ({
      ...prev,
      tables: [...new Set([...prev.tables, mesaId])],
    }));
    setIsTableInfoModalOpen(true);
  };

  const closeTableInfoModal = () => {
    setIsTableInfoModalOpen(false);
    setSelectedMesa(null);
  };

  const openAdditionalServicesModal = () => {
    setIsTableInfoModalOpen(false);
    setIsAdditionalServicesModalOpen(true);
  };

  const closeAdditionalServicesModal = () => {
    setIsAdditionalServicesModalOpen(false);
    setSelectedMesa(null);
  };

  const openSummaryModal = () => {
    setIsAdditionalServicesModalOpen(false);
    setIsSummaryModalOpen(true);
  };

  const closeSummaryModal = () => {
    setIsSummaryModalOpen(false);
  };

  const confirmReservation = () => {
    if (selectedServices.length === 0) {
      setValidationMessage("Debes seleccionar al menos un servicio.");
    } else {
      setReservationDetails((prev) => ({
        ...prev,
        services: selectedServices,
      }));
      setValidationMessage("");
      openSummaryModal();
    }
  };

  const handleFinalConfirmation = () => {
    console.log("Reserva confirmada con detalles:", reservationDetails);
    navigate("/confirmacion");
  };

  return (
    <div style={{ textAlign: "center", height: "100vh" }}>
      <h1>Mapa Interactivo - Piso 12</h1>
      <MesasPiso12SVG onMesaClick={handleMesaClick} />
      {isTableInfoModalOpen && (
        <ModalTableInfo
          mesaId={selectedMesa}
          closeModal={closeTableInfoModal}
          openAdditionalServicesModal={openAdditionalServicesModal}
        />
      )}
      {isAdditionalServicesModalOpen && (
        <ModalAdditionalServices
          closeServiceModal={closeAdditionalServicesModal}
          confirmReservation={confirmReservation}
          selectedServices={selectedServices}
          toggleService={(service) =>
            setSelectedServices((prev) =>
              prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
            )
          }
          validationMessage={validationMessage}
        />
      )}
      {isSummaryModalOpen && (
        <ModalSummary
          reservationDetails={reservationDetails}
          closeModal={closeSummaryModal}
          confirmReservation={handleFinalConfirmation}
        />
      )}
    </div>
  );
};

export default Floor12Map;
