import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Importa el archivo CSS principal para aplicar estilos globales
import App from "./App"; // Importa el componente principal de la aplicación
import reportWebVitals from "./reportWebVitals"; // Importa la función para medir el rendimiento de la aplicación
import { Provider } from "react-redux"; // Importa el Provider de Redux para proporcionar el almacenamiento global
import { store } from "./store"; // Importa el almacenamiento de Redux

// Renderiza el componente principal App dentro del elemento con el id 'root' en el DOM
ReactDOM.render(
  <Provider store={store}> {/* Envuelve la App con el Provider de Redux para proporcionar el almacenamiento global */}
    <React.StrictMode>
      <App /> {/* Renderiza el componente principal de la aplicación */}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') // Punto de montaje en el DOM
);

// La función reportWebVitals permite medir el rendimiento de la aplicación y enviar los resultados a un punto de análisis o registro
reportWebVitals();

