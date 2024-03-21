import { createStore, applyMiddleware } from "redux"; // Importa funciones de Redux para crear el store y aplicar middlewares
import { composeWithDevTools } from "redux-devtools-extension"; // Importa función para habilitar Redux DevTools
import thunk from "redux-thunk"; // Importa middleware para manejar acciones asíncronas
import rootReducer from "../reducer"; // Importa el root reducer que define cómo se actualiza el estado

// Crea el store de Redux con el root reducer y aplica middlewares, incluyendo Redux DevTools y el middleware thunk
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
