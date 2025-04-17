import { useState, createContext, useContext } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showSpinner = () => setLoading(true);
  const hideSpinner = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ showSpinner, hideSpinner }}>
      {children}
      {loading && <FullScreenSpinner />}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);

// Componente de Spinner con fondo oscuro semitransparente
const FullScreenSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
