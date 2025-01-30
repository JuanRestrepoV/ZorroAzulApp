import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MesasSVG from "../MesasSVG";
import ModalTableInfo from "../Modals/ModalTableInfo";
import ModalAdditionalServices from "../Modals/ModalAdditionalServices";
import ModalSummary from "../Modals/ModalSummary";
import { getAditionalServices } from "../../../services/services";

const Floor11Map = () => {
  const [selectedMesa, setSelectedMesa] = useState(null);
  const [isTableInfoModalOpen, setIsTableInfoModalOpen] = useState(false);
  const [isAdditionalServicesModalOpen, setIsAdditionalServicesModalOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [validationMessage, setValidationMessage] = useState("");
  const [services, setServices] = useState([]);
  const [reservationDetails, setReservationDetails] = useState(JSON.parse(localStorage.getItem("reservationDetails")));

  const navigate = useNavigate();
  useEffect(() => {
    getAditionalServices().then((response) => {
      setServices(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

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
      <h1>Mapa Interactivo - Piso 11</h1>
      <MesasSVG onMesaClick={handleMesaClick} />
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
                ? prev.filter((s) => s.id !== service.id)
                : [...prev, service]
            )
          }
          validationMessage={validationMessage}
          aditionalServices={services}
        />
      )}
      {isSummaryModalOpen && (
        <ModalSummary
          reservationDetails={reservationDetails}
          closeModal={closeSummaryModal}
          confirmReservation={handleFinalConfirmation}
          Mesa={selectedMesa}
          aditionalServices={selectedServices}
          // aditionalServices={services}
        />
      )}
    </div>
  );
};

export default Floor11Map;
