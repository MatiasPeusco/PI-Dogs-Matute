import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa componentes de react-router-dom para manejar rutas
import LandingPage from "./components/LandingPage/LandingPage"; // Importa el componente de la página de inicio
import Home from "./components/Home/Home.jsx"; // Importa el componente de la página principal
import Navbar from "./components/Navbar/Navbar.jsx"; // Importa el componente de la barra de navegación
import About from "./components/About/About"; // Importa el componente de la página "About"
import { ThemeProvider } from "styled-components"; // Importa ThemeProvider de styled-components para aplicar temas
import Detail from "./components/Detail/Detail.jsx"; // Importa el componente de detalle de perro
import Create from "./components/Create/Create.jsx"; // Importa el componente para crear un nuevo perro

// Define un objeto de tema con colores primarios y secundarios
const theme = {
  colors: {
    primary: "#87CEEB",
    secondary: "#40E0D0",
    body: "#fff",
    text: "#000",
  },
};

// Componente principal de la aplicación
function App() {
  return (
    <BrowserRouter> {/* Provee al árbol de componentes con el contexto del enrutador */}
      <ThemeProvider theme={theme}> {/* Aplica el tema a todos los componentes hijos */}
        {<Navbar />} {/* Renderiza la barra de navegación */}
        <Routes> {/* Define las rutas de la aplicación */}
          <Route path="/" element={<LandingPage />} /> {/* Ruta para la página de inicio */}
          <Route path="/home" element={<Home />} /> {/* Ruta para la página principal */}
          <Route path="/about" element={<About />} /> {/* Ruta para la página "About" */}
          <Route path="/dogs/:id" element={<Detail />} /> {/* Ruta para el detalle de un perro */}
          <Route path="/create" element={<Create />} /> {/* Ruta para crear un nuevo perro */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App; // Exporta el componente principal de la aplicación

