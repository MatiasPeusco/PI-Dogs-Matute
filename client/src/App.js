import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About";
import { ThemeProvider } from "styled-components";
import Detail from "./components/Detail/Detail.jsx";
import Create from "./components/Create/Create.jsx";

const theme = {
  colors: {
    primary: "#87CEEB",
    secondary: "#40E0D0",
    body: "#fff",
    text: "#000",
  },
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {<Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dogs/:id" element={<Detail />}/>
          <Route path="/create" element={<Create />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
