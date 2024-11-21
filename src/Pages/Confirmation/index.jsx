import Layout from "../../Components/Navbar/Layout";

function Confirmation() {
  return (
    <Layout>
      {/* Fondo desenfocado similar al Home */}
      <div className="relative h-screen overflow-hidden">
        
        {/* Imagen de fondo desenfocada */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-md"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1317370/pexels-photo-1317370.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        ></div>

        {/* Capa superpuesta negra con opacidad */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Contenido principal de la confirmación */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#c9ff13' }}>¡RESERVA CONFIRMADA!</h1>
          <p className="text-lg mb-4">
            Has elegido el lugar perfecto para tu evento ejecutivo. Prepárate para una experiencia exclusiva en Zorro Azul que dejará huella en cada detalle.
          </p>
          <p className="text-xl font-semibold">¡Nos vemos pronto en las alturas!</p>
        </div>
      </div>
    </Layout>
  );
}

export default Confirmation;
