import React, { useEffect, useState } from "react";
import { getTablesFloor } from "../../services/floors";

const MesasSVG = ({ onMesaClick, floor_id }) => {
  const [selectedMesa, setSelectedMesa] = useState(null);
  const [tables, setTables] = useState([]);

  const handleMesaClick = (table) => {
    setSelectedMesa(table);
    onMesaClick(table); // Abre el modal
  };

  useEffect(() => {
    const floor_id = localStorage.getItem("selectedFloor");
    getTablesFloor(floor_id)
      .then((response) => {
        setTables(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        {floor_id === 1 ? (
          <>
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
                <rect
                  x="153.89"
                  y="564.94"
                  width="7.04"
                  height="304.65"
                  transform="translate(874.67 559.85) rotate(90)"
                />
                <rect
                  x="680.23"
                  y="-169.3"
                  width="7.04"
                  height="600.15"
                  transform="translate(814.52 -552.97) rotate(90)"
                />
                <rect
                  x="572.03"
                  y="245.34"
                  width="7.04"
                  height="385.32"
                  transform="translate(1013.55 -137.55) rotate(90)"
                />
                <rect
                  x="1085.79"
                  y="33.68"
                  width="7.04"
                  height="108.72"
                  transform="translate(1177.35 -1001.27) rotate(90)"
                />
                <rect
                  x="1107.08"
                  y="131.05"
                  width="7.04"
                  height="73.43"
                  transform="translate(1278.37 -942.84) rotate(90)"
                />
                <rect
                  x="1107.08"
                  y="433.27"
                  width="7.04"
                  height="73.43"
                  transform="translate(1580.59 -640.61) rotate(90)"
                />
                <rect
                  x="996.23"
                  y="480.33"
                  width="7.04"
                  height="98.28"
                  transform="translate(1529.22 -470.28) rotate(90)"
                />
                <rect
                  x="975.85"
                  y="565.08"
                  width="7.04"
                  height="51.26"
                  transform="translate(1570.08 -388.66) rotate(90)"
                />
                <rect
                  x="826.22"
                  y="191.54"
                  width="7.04"
                  height="137.15"
                  transform="translate(1089.86 -569.63) rotate(90)"
                />
                <rect
                  x="935.3"
                  y="305.62"
                  width="7.04"
                  height="88.04"
                  transform="translate(1288.46 -589.18) rotate(90)"
                />
                <rect
                  x="336.44"
                  y="205.57"
                  width="7.04"
                  height="95.78"
                  transform="translate(593.43 -86.5) rotate(90)"
                />
                <rect
                  x="569.19"
                  y="-569.19"
                  width="7.04"
                  height="1145.43"
                  transform="translate(576.24 -569.19) rotate(90)"
                />
                <rect
                  x="722.16"
                  y="414.58"
                  width="7.04"
                  height="843.28"
                  transform="translate(1561.9 110.54) rotate(90)"
                />
                <rect x="6.09" y="386.22" width="116.61" height="36.52" />
                <rect x="867.52" y="614.25" width="22.7" height="218.58" />
                <rect x="873.52" y="614.36" width="54" height="26.76" />
                <rect x="384.33" y="323.58" width="47.14" height="4.96" />
                <rect
                  x="391.06"
                  y="359.59"
                  width="75.88"
                  height="4.96"
                  transform="translate(791.07 -66.93) rotate(90)"
                />
                <rect
                  x="427.32"
                  y="395.05"
                  width="333.85"
                  height="4.96"
                  transform="translate(1188.49 795.07) rotate(180)"
                />
                <rect x="486.2" y="258.03" width="215.48" height="46.9" />
                <rect x="489.85" y="331.6" width="213.91" height="33.91" />
              </g>

              <g id="LETRAS">
                <text className="cls-2" transform="translate(269.89 195.86)">
                  <tspan x="0" y="0">
                    VIP
                  </tspan>
                </text>
                <text className="cls-2" transform="translate(589.78 195.86)">
                  <tspan x="0" y="0">
                    COCINA
                  </tspan>
                </text>
                <text className="cls-2" transform="translate(965.15 740.27)">
                  <tspan x="0" y="0">
                    WC-H
                  </tspan>
                </text>
                <text className="cls-1" transform="translate(894.13 734.58)">
                  <tspan x="0" y="0">
                    BARRA
                  </tspan>
                </text>
                <text className="cls-1" transform="translate(992.69 257.5)">
                  <tspan x="0" y="0">
                    INGRESO PISO 11
                  </tspan>
                </text>
                <text className="cls-2" transform="translate(1063.58 740.27)">
                  <tspan x="0" y="0">
                    WC-M
                  </tspan>
                </text>
              </g>
            </g>
          </>
        ) : (
          <>
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
                <rect
                  x="948.19"
                  y="132"
                  width="7.04"
                  height="102.65"
                  transform="translate(581.23 -712.27) rotate(56.62)"
                />
                <rect
                  x="937.99"
                  y="48.96"
                  width="7.04"
                  height="94.23"
                  transform="translate(400.23 -680.26) rotate(49.29)"
                />
                <rect x="787" y="208.13" width="7.04" height="151" />
                <rect x="669" y="208.13" width="7.04" height="151" />
                <rect x="551" y="208.13" width="7.04" height="151" />
                <rect x="379" y="612.13" width="7.04" height="47" />
                <rect x="621" y="612.13" width="7.04" height="47" />
                <rect x="857" y="612.13" width="7.04" height="47" />
                <rect
                  x="621.49"
                  y="255.64"
                  width="7.04"
                  height="807.77"
                  transform="translate(1284.53 34.51) rotate(90)"
                />
                <rect
                  x="510.38"
                  y="-509.48"
                  width="7.04"
                  height="1026"
                  transform="translate(517.42 -510.38) rotate(90)"
                />
                <rect
                  x="618.88"
                  y="-161.98"
                  width="7.04"
                  height="575"
                  transform="translate(747.92 -496.88) rotate(90)"
                />
                <rect
                  x="728.38"
                  y="29.52"
                  width="7.04"
                  height="362"
                  transform="translate(942.42 -521.38) rotate(90)"
                />
                <rect
                  x="783.38"
                  y="123.52"
                  width="7.04"
                  height="470"
                  transform="translate(1145.42 -428.38) rotate(90)"
                />
                <rect
                  className="cls-1"
                  x="642.44"
                  y="272.02"
                  width="3.93"
                  height="363"
                  transform="translate(1097.92 -190.88) rotate(90)"
                />
                <rect
                  className="cls-1"
                  x="486.44"
                  y="189.02"
                  width="3.93"
                  height="53"
                  transform="translate(703.92 -272.88) rotate(90)"
                />
                <rect
                  className="cls-9"
                  x="821.94"
                  y="361.52"
                  width="3.93"
                  height="93.6"
                />
                <rect
                  className="cls-9"
                  x="461.94"
                  y="214.13"
                  width="3.93"
                  height="241"
                />
                <rect
                  x="108.38"
                  y="-12.48"
                  width="7.04"
                  height="222"
                  transform="translate(210.42 -13.38) rotate(90)"
                />
                <rect
                  x="995.38"
                  y="42.52"
                  width="7.04"
                  height="48"
                  transform="translate(1065.42 -932.38) rotate(90)"
                />
                <rect
                  x="1005.88"
                  y="139.02"
                  width="7.04"
                  height="33"
                  transform="translate(1164.92 -853.88) rotate(90)"
                />
                <rect x="1022" y="0.13" width="7.04" height="662.79" />
                <rect x="224.36" y="214.35" width="121.54" height="20.77" />
                <rect x="224.36" y="368.35" width="121.54" height="20.77" />
                <rect x="224.36" y="521.35" width="121.54" height="20.77" />
                <rect
                  x="888.55"
                  y="384.16"
                  width="71.16"
                  height="20.77"
                  transform="translate(1318.68 -529.58) rotate(90)"
                />
              </g>

              {/* Textos */}
              <g id="TEXTOS">
                <text
                  x="637.78"
                  y="178.99"
                  fontSize="24"
                  fontFamily="Arial"
                  fill="#000"
                >
                  INGRESO PISO 12
                </text>
                <text
                  x="597.78"
                  y="419.99"
                  fontSize="20"
                  fontFamily="Arial"
                  fill="#000"
                >
                  BARRA
                </text>
                <text
                  x="27.78"
                  y="57.99"
                  fontSize="20"
                  fontFamily="Arial"
                  fill="#000"
                >
                  Dj boot
                </text>
                <text
                  x="567.78"
                  y="299.99"
                  fontSize="20"
                  fontFamily="Arial"
                  fill="#000"
                >
                  Bodega
                </text>
                <text
                  x="715.8"
                  y="281.99"
                  fontSize="20"
                  fontFamily="Arial"
                  fill="#000"
                >
                  Wg servicios
                </text>
                <text
                  x="817.29"
                  y="303.99"
                  fontSize="20"
                  fontFamily="Arial"
                  fill="#000"
                >
                  SHUT
                </text>
                <text
                  x="930.78"
                  y="291.99"
                  fontSize="20"
                  fontFamily="Arial"
                  fill="#000"
                >
                  Cuarto Mnas.
                </text>
              </g>
            </g>
          </>
        )}

        {/* Mesas interactivas */}
        {tables.map((table) => (
          <g
            id={`mesa_${table.id}`}
            key={table.id}
            onClick={() => handleMesaClick(table)}
          >
            {!table.radius ? (
              <rect
                className={`cls-interactive ${
                  selectedMesa === `mesa_${table.id}` ? "cls-clicked" : ""
                }`}
                x={table.x}
                y={table.y}
                width={table.width}
                height={table.height}
                transform={table.transform}
              />
            ) : (
              <circle
                className={`cls-interactive ${
                  selectedMesa === `mesa_${table.id}` ? "cls-clicked" : ""
                }`}
                cx={table.x}
                cy={table.y}
                r={table.radius}
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default MesasSVG;
