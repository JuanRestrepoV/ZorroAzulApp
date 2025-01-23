import React, { useState } from "react";
import ModalTableInfo from "./Modals/ModalTableInfo"; // Importa el modal

const MesasSVG = () => {
  const [selectedMesa, setSelectedMesa] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMesaClick = (mesaId) => {
    setSelectedMesa(mesaId);
    setIsModalOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMesa(null); // Limpia la selección al cerrar
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Ajusta la altura al 100% del viewport
        overflow: "hidden", // Evita el scroll
        backgroundColor: "#ffffff",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1332.15 839.74"
        style={{
          width: "90vw", // Ajusta al 90% del ancho del viewport
          height: "auto", // Mantén la proporción
          maxHeight: "90vh", // Ajusta al 90% del alto del viewport
        }}
      >
        <defs>
          <style>
            {`
              .cls-interactive {
                fill: #00ff00; /* Verde inicial */
                cursor: pointer;
                transition: fill 0.3s, transform 0.2s;
              }
              .cls-interactive:hover {
                fill: #0000ff; /* Azul al pasar el cursor */
              }
              .cls-clicked {
                fill: #ff9900 !important; /* Naranja al hacer clic */
              }
              .cls-non-interactive {
                fill: none; /* Elementos no interactivos */
                stroke: #000;
                pointer-events: none; /* No interactivo */
              }
            `}
          </style>
        </defs>

        {/* Elementos no interactivos */}
        <g id="NonInteractiveElements" className="cls-non-interactive">
        <g id="MUROS" fill="black">
  <rect width="7.04" height="720.78" />
  <rect x="1140.28" y="0" width="7.04" height="833.9" />
  <rect x="380.81" width="7.04" height="441.52" />
  <rect x="761.17" y="258.03" width="7.04" height="182.59" />
  <rect x="220.32" y="3.43" width="7.04" height="175.76" />
  <rect x="975.8" y="213.85" width="7.04" height="137.75" />
  <rect x="892.16" y="256.59" width="7.04" height="96.67" />
  <rect x="303.26" y="713.74" width="7.04" height="126" />
  <rect x="492.61" y="713.74" width="7.04" height="126" />
  <rect x="774.87" y="713.74" width="7.04" height="126" />
  <rect x="951.72" y="587.18" width="7.04" height="252.55" />
  <rect x="1042.24" y="525.95" width="7.04" height="313.79" />
  <rect x="976.78" y="3.52" width="7.04" height="163.31" />
  <rect x="1073.89" y="165.91" width="7.04" height="304.08" />
  <rect x="758.23" y="128.38" width="7.04" height="39.39" />
  <rect x="153.89" y="564.94" width="7.04" height="304.65" transform="translate(874.67 559.85) rotate(90)" />
  <rect x="680.23" y="-169.3" width="7.04" height="600.15" transform="translate(814.52 -552.97) rotate(90)" />
  <rect x="572.03" y="245.34" width="7.04" height="385.32" transform="translate(1013.55 -137.55) rotate(90)" />
  <rect x="1085.79" y="33.68" width="7.04" height="108.72" transform="translate(1177.35 -1001.27) rotate(90)" />
  <rect x="1107.08" y="131.05" width="7.04" height="73.43" transform="translate(1278.37 -942.84) rotate(90)" />
  <rect x="1107.08" y="433.27" width="7.04" height="73.43" transform="translate(1580.59 -640.61) rotate(90)" />
  <rect x="996.23" y="480.33" width="7.04" height="98.28" transform="translate(1529.22 -470.28) rotate(90)" />
  <rect x="975.85" y="565.08" width="7.04" height="51.26" transform="translate(1570.08 -388.66) rotate(90)" />
  <rect x="826.22" y="191.54" width="7.04" height="137.15" transform="translate(1089.86 -569.63) rotate(90)" />
  <rect x="935.3" y="305.62" width="7.04" height="88.04" transform="translate(1288.46 -589.18) rotate(90)" />
  <rect x="336.44" y="205.57" width="7.04" height="95.78" transform="translate(593.43 -86.5) rotate(90)" />
  <rect x="569.19" y="-569.19" width="7.04" height="1145.43" transform="translate(576.24 -569.19) rotate(90)" />
  <rect x="722.16" y="414.58" width="7.04" height="843.28" transform="translate(1561.9 110.54) rotate(90)" />
  <rect x="6.09" y="386.22" width="116.61" height="36.52" />
  <rect x="867.52" y="614.25" width="22.7" height="218.58" />
  <rect x="873.52" y="614.36" width="54" height="26.76" />
  <rect x="384.33" y="323.58" width="47.14" height="4.96" />
  <rect x="391.06" y="359.59" width="75.88" height="4.96" transform="translate(791.07 -66.93) rotate(90)" />
  <rect x="427.32" y="395.05" width="333.85" height="4.96" transform="translate(1188.49 795.07) rotate(180)" />
  <rect x="486.2" y="258.03" width="215.48" height="46.9" />
  <rect x="489.85" y="331.6" width="213.91" height="33.91" />
</g>

          <g id="LETRAS">
            <text className="cls-2" transform="translate(269.89 195.86)">
              <tspan x="0" y="0">VIP</tspan>
            </text>
            <text className="cls-2" transform="translate(589.78 195.86)">
              <tspan x="0" y="0">COCINA</tspan>
            </text>
            <text className="cls-2" transform="translate(965.15 740.27)">
              <tspan x="0" y="0">WC-H</tspan>
            </text>
            <text className="cls-1" transform="translate(894.13 734.58)">
              <tspan x="0" y="0">BARRA</tspan>
            </text>
            <text className="cls-1" transform="translate(992.69 257.5)">
              <tspan x="0" y="0">INGRESO PISO 11</tspan>
            </text>
            <text className="cls-2" transform="translate(1063.58 740.27)">
              <tspan x="0" y="0">WC-M</tspan>
            </text>
          </g>
        </g>

        {/* Mesas interactivas */}
        <g id="Mesas">
          <g id="mesa_1" onClick={() => handleMesaClick("mesa_1")}>
            <rect
              className={`cls-interactive ${
                selectedMesa === "mesa_1" ? "cls-clicked" : ""
              }`}
              x="42.6"
              y="46.52"
              width="68.87"
              height="68.87"
            />
          </g>
          <g id="mesa_2" onClick={() => handleMesaClick("mesa_2")}>
            <rect
              className={`cls-interactive ${
                selectedMesa === "mesa_2" ? "cls-clicked" : ""
              }`}
              x="44.17"
              y="126.74"
              width="68.87"
              height="68.87"
            />
          </g>
          <g id="mesa_3" onClick={() => handleMesaClick("mesa_3")}>
            <rect
              className={`cls-interactive ${
                selectedMesa === "mesa_3" ? "cls-clicked" : ""
              }`}
              x="44.56"
              y="198.21"
              width="68.87"
              height="68.87"
            />
          </g>
          <g id="mesa_4" onClick={() => handleMesaClick("mesa_4")}>
            <rect
              className={`cls-interactive ${
                selectedMesa === "mesa_4" ? "cls-clicked" : ""
              }`}
              x="44.56"
              y="287.43"
              width="68.87"
              height="68.87"
            />
          </g>
          <g id="mesa_5" onClick={() => handleMesaClick("mesa_5")}>
            <rect
              className={`cls-interactive ${
                selectedMesa === "mesa_5" ? "cls-clicked" : ""
              }`}
              x="135.34"
              y="370.39"
              width="68.87"
              height="68.87"
            />
          </g>
          <g id="mesa_6" onClick={() => handleMesaClick("mesa_6")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_6" ? "cls-clicked" : ""
    }`}
    x="29.95"
    y="458.04"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_7" onClick={() => handleMesaClick("mesa_7")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_7" ? "cls-clicked" : ""
    }`}
    x="29.95"
    y="538"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_8" onClick={() => handleMesaClick("mesa_8")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_8" ? "cls-clicked" : ""
    }`}
    x="25.13"
    y="617.95"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_9" onClick={() => handleMesaClick("mesa_9")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_9" ? "cls-clicked" : ""
    }`}
    x="135.34"
    y="617.95"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_10" onClick={() => handleMesaClick("mesa_10")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_10" ? "cls-clicked" : ""
    }`}
    x="209.04"
    y="617.04"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_11" onClick={() => handleMesaClick("mesa_11")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_11" ? "cls-clicked" : ""
    }`}
    x="327.21"
    y="747.74"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_12" onClick={() => handleMesaClick("mesa_12")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_12" ? "cls-clicked" : ""
    }`}
    x="401.17"
    y="747.74"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_13" onClick={() => handleMesaClick("mesa_13")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_13" ? "cls-clicked" : ""
    }`}
    x="522.21"
    y="744.87"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_14" onClick={() => handleMesaClick("mesa_14")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_14" ? "cls-clicked" : ""
    }`}
    x="614.56"
    y="744.87"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_15" onClick={() => handleMesaClick("mesa_15")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_15" ? "cls-clicked" : ""
    }`}
    x="688.65"
    y="745.13"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_16" onClick={() => handleMesaClick("mesa_16")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_16" ? "cls-clicked" : ""
    }`}
    x="803.17"
    y="280.45"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_17" onClick={() => handleMesaClick("mesa_17")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_17" ? "cls-clicked" : ""
    }`}
    x="886.52"
    y="369.67"
    width="68.87"
    height="68.87"
  />
</g>
<g id="mesa_18" onClick={() => handleMesaClick("mesa_18")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_18" ? "cls-clicked" : ""
    }`}
    x="361.58"
    y="518.96"
    width="68.87"
    height="68.87"
    transform="translate(-268.29 405.85) rotate(-41.89)"
  />
</g>
<g id="mesa_19" onClick={() => handleMesaClick("mesa_19")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_19" ? "cls-clicked" : ""
    }`}
    x="473.12"
    y="523.46"
    width="68.87"
    height="68.87"
    transform="translate(-242.79 481.48) rotate(-41.89)"
  />
</g>
<g id="mesa_20" onClick={() => handleMesaClick("mesa_20")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_20" ? "cls-clicked" : ""
    }`}
    x="582"
    y="527.38"
    width="68.87"
    height="68.87"
    transform="translate(-217.58 555.18) rotate(-41.89)"
  />
</g>
<g id="mesa_21" onClick={() => handleMesaClick("mesa_21")}>
  <rect
    className={`cls-interactive ${
      selectedMesa === "mesa_21" ? "cls-clicked" : ""
    }`}
    x="686.47"
    y="531.3"
    width="68.87"
    height="68.87"
    transform="translate(-193.5 625.94) rotate(-41.89)"
  />
</g>
<g id="mesa_22" onClick={() => handleMesaClick("mesa_22")}>
  <circle
    className={`cls-interactive ${
      selectedMesa === "mesa_22" ? "cls-clicked" : ""
    }`}
    cx="186.28"
    cy="101.43"
    r="20.48"
  />
</g>
<g id="mesa_23" onClick={() => handleMesaClick("mesa_23")}>
  <circle
    className={`cls-interactive ${
      selectedMesa === "mesa_23" ? "cls-clicked" : ""
    }`}
    cx="186.28"
    cy="157.71"
    r="20.48"
  />
</g>
<g id="mesa_24" onClick={() => handleMesaClick("mesa_24")}>
  <circle
    className={`cls-interactive ${
      selectedMesa === "mesa_24" ? "cls-clicked" : ""
    }`}
    cx="265.84"
    cy="76.85"
    r="20.48"
  />
</g>
<g id="mesa_25" onClick={() => handleMesaClick("mesa_25")}>
  <circle
    className={`cls-interactive ${
      selectedMesa === "mesa_25" ? "cls-clicked" : ""
    }`}
    cx="265.84"
    cy="123.54"
    r="20.48"
  />
</g>
<g id="mesa_26" onClick={() => handleMesaClick("mesa_26")}>
  <circle
    className={`cls-interactive ${
      selectedMesa === "mesa_26" ? "cls-clicked" : ""
    }`}
    cx="340.45"
    cy="148.58"
    r="20.48"
  />
</g>
<g id="mesa_27" onClick={() => handleMesaClick("mesa_27")}>
  <circle
    className={`cls-interactive ${
      selectedMesa === "mesa_27" ? "cls-clicked" : ""
    }`}
    cx="338.36"
    cy="195.61"
    r="20.48"
  />
</g>
<g id="mesa_28" onClick={() => handleMesaClick("mesa_28")}>
  <circle
    className={`cls-interactive ${
      selectedMesa === "mesa_28" ? "cls-clicked" : ""
    }`}
    cx="296.36"
    cy="284.76"
    r="20.48"
  />
</g>
<g id="mesa_29" onClick={() => handleMesaClick("mesa_29")}>
  <circle
    className={`cls-interactive ${
      selectedMesa === "mesa_29" ? "cls-clicked" : ""
    }`}
    cx="813.54"
    cy="731.76"
    r="20.48"
  />
</g>
<g id="mesa_30" onClick={() => handleMesaClick("mesa_30")}>
  <circle
    className={`cls-interactive ${
      selectedMesa === "mesa_30" ? "cls-clicked" : ""
    }`}
    cx="815.3"
    cy="810.48"
    r="20.48"
  />
</g>

          {/* Agrega todas las demás mesas interactivas siguiendo este patrón */}
        </g>
      </svg>

      {/* Modal para mostrar información */}
      {isModalOpen && (
        <ModalTableInfo mesaId={selectedMesa} closeModal={closeModal} />
      )}
    </div>
  );
};

export default MesasSVG;
