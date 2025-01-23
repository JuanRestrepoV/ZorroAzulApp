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
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#c9ff13' }}>
            ¡RESERVA RECIBIDA!
          </h1>
          <p className="text-lg mb-4">
            Hemos recibido tu solicitud de reserva y actualmente está en proceso de revisión.
          </p>
          <p className="text-lg mb-4">
            Recibirás un correo electrónico tan pronto como confirmemos tu reserva. En ese momento, 
            te proporcionaremos los detalles para realizar el abono del pago.
          </p>
          <p className="text-xl font-semibold">
            ¡Gracias por confiar en Zorro Azul!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Confirmation;
