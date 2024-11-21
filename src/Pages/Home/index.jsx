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
      {/* Contenedor principal con fondo de imagen desenfocada */}
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

        {/* Contenido principal */}
        <div className="relative z-10 flex justify-between items-center h-full px-10 text-white">
          
          {/* Imagen en el lado izquierdo */}
          <div className="flex-1 flex justify-center items-center relative">
            <img 
              src="https://media-cdn.tripadvisor.com/media/photo-s/2c/f0/53/c9/el-zorro-habita-en-el.jpg" 
              alt="Imagen corporativa"
              className="rounded-lg shadow-lg w-4/5 h-auto object-cover shadow-[10px_0_15px_-5px_rgba(0,0,0,0.3)]" 
            />
            {/* Texto superpuesto en la parte inferior de la imagen */}
            <span className="absolute bottom-20 left-29 transform -translate-x-1/2 bg-black bg-opacity-100 text-white font-bold font- italic px-8 py-5 text-sm">
              Espacios reservados para la grandeza...
            </span>
          </div>

          {/* Contenedor para el título y el texto */}
          <div className="flex-1 flex flex-col justify-center items-end text-right">
            <h2 className="text-3xl font-bold mb-6">
              ¡Eleva tus eventos corporativos al siguiente nivel!
            </h2>

            {/* Texto descriptivo alineado a la izquierda y justificado */}
            <div className="text-gray-300 space-y-4 text-left text-justify text-sm mb-6">
              <p>En Zorro Azul, cada evento corporativo es una experiencia diseñada a medida.</p>
              <p>Nuestro rooftop, en el corazón de Cali, se convierte en el escenario perfecto para que su equipo se conecte, celebre y descubra nuevas perspectivas en un espacio exclusivo y auténtico.</p>
              <p>Permítanos personalizar cada detalle de su evento para que sea tan único como su empresa.</p>
            </div>

            {/* Contenedor del botón independiente para evitar interferencias */}
            <div className="mt-6 relative">
              <button 
                onClick={handleOpenLogin}
                className="px-6 py-3 text-black font-semibold rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:rounded-2xl hover:border-2 hover:border-black hover:text-lg"
                style={{ backgroundColor: '#c9ff13' }}
              >
                Comienza tu experiencia aquí
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
