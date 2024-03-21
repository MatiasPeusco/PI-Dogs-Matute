import React from 'react';
import { LoaderContainer } from './StyledLoader'; // Importar el contenedor de estilo para el loader

// Componente funcional Loader que muestra un indicador de carga mientras se espera la respuesta de la API
const Loader = () => {
  return (
    <LoaderContainer>
      {/* Indicador de carga animado */}
      <div className="lds-roller">
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
      </div>
    </LoaderContainer>
  );
}

export default Loader; // Exportar el componente Loader
