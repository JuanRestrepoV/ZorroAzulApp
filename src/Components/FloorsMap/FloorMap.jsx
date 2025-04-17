import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MesasSVG from "../MesasSVG";
import ModalTableInfo from "../Modals/ModalTableInfo";
import ModalAdditionalServices from "../Modals/ModalAdditionalServices";
import ModalSummary from "../Modals/ModalSummary";
import { getAditionalServices } from "../../../services/services";
import { getFloor } from "../../../services/floors";
import backgroundImage from "../../Assets/dashboardBackground.png";
import { useLoader } from "@/context/Loader";

const FloorMap = () => {
  const [selectedMesa, setSelectedMesa] = useState(null);
  const [isTableInfoModalOpen, setIsTableInfoModalOpen] = useState(false);
  const [isAdditionalServicesModalOpen, setIsAdditionalServicesModalOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [validationMessage, setValidationMessage] = useState("");
  const [services, setServices] = useState([]);
  const [reservationDetails, setReservationDetails] = useState(JSON.parse(localStorage.getItem("reservationDetails")));
  const [floor, setFloor] = useState(null)
  const { showSpinner, hideSpinner } = useLoader();
  const navigate = useNavigate();

  useEffect(() => {
    showSpinner();
    Promise.all([getFloor(localStorage.getItem("selectedFloor")), getAditionalServices()]).then(([floors, services]) => {
      setFloor(floors.data);
      setServices(services.data);
      hideSpinner();
    }).catch((error) => {
      hideSpinner();
      console.log(error);
    });
  }, []);

  const handleMesaClick = (table) => {
    console.log(table)
    setSelectedMesa(table);
    setReservationDetails((prev) => ({
      ...prev,
      tables: [...new Set([...prev.tables, table.id])],
    }));
    console.log(reservationDetails);
    setIsTableInfoModalOpen(true);
  };

  const closeTableInfoModal = () => {
    localStorage.setItem("reservationDetails", JSON.stringify(reservationDetails));
    setIsSummaryModalOpen(true);
    setIsTableInfoModalOpen(false);
    setSelectedMesa(null);
  };

  const openAdditionalServicesModal = () => {
    setIsTableInfoModalOpen(false);
    setIsAdditionalServicesModalOpen(true);
  };

  // const closeAdditionalServicesModal = () => {
  //   setIsAdditionalServicesModalOpen(false);
  //   setSelectedMesa(null);
  // };

  // const openSummaryModal = () => {
  //   setIsAdditionalServicesModalOpen(false);
    // setIsSummaryModalOpen(true);
  // };

  const closeSummaryModal = () => {
    setIsSummaryModalOpen(false);
  };

  // const confirmReservation = () => {
  //   if (selectedServices.length === 0) {
  //     setValidationMessage("Debes seleccionar al menos un servicio.");
  //   } else {
  //     setReservationDetails((prev) => ({
  //       ...prev,
  //       services: selectedServices,
  //     }));
  //     setValidationMessage("");
  //     openSummaryModal();
  //   }
  // };

  const handleFinalConfirmation = () => {
    console.log("Reserva confirmada con detalles:", reservationDetails);
    navigate("/confirmacion");
  };
  
  return (
    <div style={{ textAlign: "center", height: "100vh" }}>
      <h1>Mapa Interactivo - Piso 11</h1>
      <MesasSVG onMesaClick={handleMesaClick} floor_id={floor?.id} />
      {isTableInfoModalOpen && (
        <ModalTableInfo
          table={selectedMesa}
          closeModal={closeTableInfoModal}
          openAdditionalServicesModal={openAdditionalServicesModal}
        />
      )}
      {/* {isAdditionalServicesModalOpen && (
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
      )} */}
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

export default FloorMap;
