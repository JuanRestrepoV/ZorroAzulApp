import { useState } from 'react';
import Layout from "../../Components/Navbar/Layout";
import LoginModal from "../../Components/LoginModal";
import RegisterModal from "../../Components/RegisterModal";

function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  return (
    <Layout>
      {/* Contenedor principal con fondo de imagen */}
      <div className="relative h-screen overflow-hidden bg-black z-0">

        {/* Imagen de fondo para el lado derecho */}
        <div
          className="absolute inset-y-0 right-0 w-3/5 bg-cover bg-center"
          style={{
            backgroundImage: "url('./src/Assets/homeBackground.jpg')", // Ruta de la imagen de fondo
          }}
        ></div>

        {/* Capa negra superpuesta sobre la imagen de fondo */}
        <div className="absolute inset-y-0 right-0 w-3/5 bg-black opacity-40 z-10"></div>

        {/* Contenido principal */}
        <div className="relative z-20 flex justify-between items-center h-full px-16 text-white">
          {/* Imagen en el lado izquierdo */}
          <div className="flex-1 flex justify-center items-center relative z-10">
            <div className="w-4/5 relative border-r-8 border-black">
              <img 
                src="https://media-cdn.tripadvisor.com/media/photo-s/2c/f0/53/c9/el-zorro-habita-en-el.jpg" 
                alt="Imagen corporativa"
                className="rounded-lg shadow-lg w-full h-auto object-cover" 
              />
              {/* Texto superpuesto en la parte inferior de la imagen */}
              <span className="absolute bottom-10 left-10 bg-black bg-opacity-70 text-white font-Fuente italic px-6 py-4 text-m">
                Espacios reservados para la grandeza...
              </span>
            </div>
          </div>

          {/* Contenedor para el título y el texto */}
          <div className="flex-1 flex flex-col justify-center items-start text-left">
            <h2 className="text-3xl font-FuenteTitulos mb-6 tracking-wider">
              ELEVA TUS EVENTOS CORPORATIVOS
            </h2>

            {/* Texto descriptivo */}
            <div className="text-gray-300 space-y-6 text-lg leading-4 mb-6 font-Fuente text-justify max-w-[90%]">
              <p>En Zorro Azul, cada evento corporativo es una experiencia diseñada a medida.</p>
              <p>Nuestro rooftop, en el corazón de Cali, se convierte en el escenario perfecto para que su equipo se conecte, celebre y descubra nuevas perspectivas en un espacio exclusivo y auténtico.</p>
              <p>Permítanos personalizar cada detalle de su evento para que sea tan único como su empresa.</p>
            </div>

            {/* Botón */}
            <div className="mt-6">
              <button 
                onClick={handleOpenLogin}
                className="px-10 py-5 text-black font-semibold text-lg font-Fuente rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#c9ff13' }}
              >
                COMIENZA TU EXPERIENCIA AQUÍ
              </button>
            </div>
          </div>
        </div>

        {/* Modales */}
        {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} openRegisterModal={handleOpenRegister} />}
        {isRegisterOpen && <RegisterModal onClose={() => setIsRegisterOpen(false)} openLoginModal={handleOpenLogin} />}
      </div>
    </Layout>
  );
}

export default Home;
