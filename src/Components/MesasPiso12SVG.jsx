import React, { useState } from "react";

const MesasPiso12SVG = ({ onMesaClick }) => {
  const [selectedMesa, setSelectedMesa] = useState(null);

  const handleMesaClick = (mesaId) => {
    setSelectedMesa(mesaId); // Marca la mesa seleccionada
    onMesaClick(mesaId); // Llama a la función pasada como prop
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
        viewBox="0 0 1078.9 663.04"
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
                pointer-events: none; /* Hace que no sean clickeables */
              }
              .cls-wall {
                fill: #b0b0b0; /* Color gris para los muros */
              }
            `}
          </style>
        </defs>

        {/* Fondo del plano */}
        <rect x="0" y="0" width="1078.9" height="663.04" fill="white" />

        {/* Elementos no interactivos */}
        <g id="NonInteractiveElements" className="cls-non-interactive">
          {/* Muros */}
          <g id="MUROS" className="cls-wall" style={{ fill: "black" }}>
  <rect x="219" y="95.13" width="7.04" height="567.79" />
  <rect x="0" y="0.13" width="7.04" height="102" />
  <rect x="129" y="0.13" width="7.04" height="102" />
  <rect x="335" y="7.13" width="7.04" height="121" />
  <rect x="906" y="208.13" width="7.04" height="151" />
  <rect x="948.19" y="132" width="7.04" height="102.65" transform="translate(581.23 -712.27) rotate(56.62)" />
  <rect x="937.99" y="48.96" width="7.04" height="94.23" transform="translate(400.23 -680.26) rotate(49.29)" />
  <rect x="787" y="208.13" width="7.04" height="151" />
  <rect x="669" y="208.13" width="7.04" height="151" />
  <rect x="551" y="208.13" width="7.04" height="151" />
  <rect x="379" y="612.13" width="7.04" height="47" />
  <rect x="621" y="612.13" width="7.04" height="47" />
  <rect x="857" y="612.13" width="7.04" height="47" />
  <rect x="621.49" y="255.64" width="7.04" height="807.77" transform="translate(1284.53 34.51) rotate(90)" />
  <rect x="510.38" y="-509.48" width="7.04" height="1026" transform="translate(517.42 -510.38) rotate(90)" />
  <rect x="618.88" y="-161.98" width="7.04" height="575" transform="translate(747.92 -496.88) rotate(90)" />
  <rect x="728.38" y="29.52" width="7.04" height="362" transform="translate(942.42 -521.38) rotate(90)" />
  <rect x="783.38" y="123.52" width="7.04" height="470" transform="translate(1145.42 -428.38) rotate(90)" />
  <rect className="cls-1" x="642.44" y="272.02" width="3.93" height="363" transform="translate(1097.92 -190.88) rotate(90)" />
  <rect className="cls-1" x="486.44" y="189.02" width="3.93" height="53" transform="translate(703.92 -272.88) rotate(90)" />
  <rect className="cls-9" x="821.94" y="361.52" width="3.93" height="93.6" />
  <rect className="cls-9" x="461.94" y="214.13" width="3.93" height="241" />
  <rect x="108.38" y="-12.48" width="7.04" height="222" transform="translate(210.42 -13.38) rotate(90)" />
  <rect x="995.38" y="42.52" width="7.04" height="48" transform="translate(1065.42 -932.38) rotate(90)" />
  <rect x="1005.88" y="139.02" width="7.04" height="33" transform="translate(1164.92 -853.88) rotate(90)" />
  <rect x="1022" y="0.13" width="7.04" height="662.79" />
  <rect x="224.36" y="214.35" width="121.54" height="20.77" />
  <rect x="224.36" y="368.35" width="121.54" height="20.77" />
  <rect x="224.36" y="521.35" width="121.54" height="20.77" />
  <rect x="888.55" y="384.16" width="71.16" height="20.77" transform="translate(1318.68 -529.58) rotate(90)" />
</g>

          {/* Textos */}
          <g id="TEXTOS">
            <text x="637.78" y="178.99" fontSize="24" fontFamily="Arial" fill="#000">
              INGRESO PISO 12
            </text>
            <text x="597.78" y="419.99" fontSize="20" fontFamily="Arial" fill="#000">
              BARRA
            </text>
            <text x="27.78" y="57.99" fontSize="20" fontFamily="Arial" fill="#000">
              Dj boot
            </text>
            <text x="567.78" y="299.99" fontSize="20" fontFamily="Arial" fill="#000">
              Bodega
            </text>
            <text x="715.8" y="281.99" fontSize="20" fontFamily="Arial" fill="#000">
              Wg servicios
            </text>
            <text x="817.29" y="303.99" fontSize="20" fontFamily="Arial" fill="#000">
              SHUT
            </text>
            <text x="930.78" y="291.99" fontSize="20" fontFamily="Arial" fill="#000">
              Cuarto Mnas.
            </text>
          </g>
        </g>

        {/* Mesas interactivas */}
        <g id="Mesas">
  <g id="mesa_6" onClick={() => handleMesaClick("mesa_6")}> {/* Mesa rectangular */}
    <rect
      className={`cls-interactive ${selectedMesa === "mesa_6" ? "cls-clicked" : ""}`}
      x="257.56"
      y="588.13"
      width="92.33"
      height="39.31"
    />
  </g>
  <g id="mesa_9" onClick={() => handleMesaClick("mesa_9")}> {/* Mesa rectangular */}
    <rect
      className={`cls-interactive ${selectedMesa === "mesa_9" ? "cls-clicked" : ""}`}
      x="521.56"
      y="601.13"
      width="92.33"
      height="39.31"
    />
  </g>
  <g id="mesa_12" onClick={() => handleMesaClick("mesa_12")}> {/* Mesa rectangular */}
    <rect
      className={`cls-interactive ${selectedMesa === "mesa_12" ? "cls-clicked" : ""}`}
      x="750.56"
      y="599.13"
      width="92.33"
      height="39.31"
    />
  </g>
  <g id="mesa_13" onClick={() => handleMesaClick("mesa_13")}> {/* Mesa rectangular */}
    <rect
      className={`cls-interactive ${selectedMesa === "mesa_13" ? "cls-clicked" : ""}`}
      x="871.56"
      y="599.13"
      width="92.33"
      height="39.31"
    />
  </g>
  <g id="mesa_5" onClick={() => handleMesaClick("mesa_5")}> {/* Mesa rectangular */}
    <rect
      className={`cls-interactive ${selectedMesa === "mesa_5" ? "cls-clicked" : ""}`}
      x="257.56"
      y="436.13"
      width="92.33"
      height="39.31"
    />
  </g>
  <g id="mesa_4" onClick={() => handleMesaClick("mesa_4")}> {/* Mesa rectangular */}
    <rect
      className={`cls-interactive ${selectedMesa === "mesa_4" ? "cls-clicked" : ""}`}
      x="257.56"
      y="287.13"
      width="92.33"
      height="39.31"
    />
  </g>
  <g id="mesa_1" onClick={() => handleMesaClick("mesa_1")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_1" ? "cls-clicked" : ""}`}
      cx="265.13"
      cy="138.15"
      r="20.48"
    />
  </g>
  <g id="mesa_2" onClick={() => handleMesaClick("mesa_2")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_2" ? "cls-clicked" : ""}`}
      cx="265.13"
      cy="187.15"
      r="20.48"
    />
  </g>
  <g id="mesa_3" onClick={() => handleMesaClick("mesa_3")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_3" ? "cls-clicked" : ""}`}
      cx="320.13"
      cy="187.15"
      r="20.48"
    />
  </g>
  <g id="mesa_7" onClick={() => handleMesaClick("mesa_7")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_7" ? "cls-clicked" : ""}`}
      cx="428.13"
      cy="621.15"
      r="20.48"
    />
  </g>
  <g id="mesa_8" onClick={() => handleMesaClick("mesa_8")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_8" ? "cls-clicked" : ""}`}
      cx="480.13"
      cy="621.15"
      r="20.48"
    />
  </g>
  <g id="mesa_10" onClick={() => handleMesaClick("mesa_10")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_10" ? "cls-clicked" : ""}`}
      cx="662.13"
      cy="621.15"
      r="20.48"
    />
  </g>
  <g id="mesa_11" onClick={() => handleMesaClick("mesa_11")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_11" ? "cls-clicked" : ""}`}
      cx="711.13"
      cy="621.15"
      r="20.48"
    />
  </g>
  <g id="mesa_14" onClick={() => handleMesaClick("mesa_14")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_14" ? "cls-clicked" : ""}`}
      cx="991.13"
      cy="616.15"
      r="20.48"
    />
  </g>
  <g id="mesa_15" onClick={() => handleMesaClick("mesa_15")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_15" ? "cls-clicked" : ""}`}
      cx="991.13"
      cy="512.15"
      r="20.48"
    />
  </g>
  <g id="mesa_16" onClick={() => handleMesaClick("mesa_16")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_16" ? "cls-clicked" : ""}`}
      cx="991.13"
      cy="430.15"
      r="20.48"
    />
  </g>
  <g id="mesa_17" onClick={() => handleMesaClick("mesa_17")}> {/* Mesa circular */}
    <circle
      className={`cls-interactive ${selectedMesa === "mesa_17" ? "cls-clicked" : ""}`}
      cx="867.13"
      cy="430.15"
      r="20.48"
    />
  </g>
</g>

      </svg>
    </div>
  );
};

export default MesasPiso12SVG;