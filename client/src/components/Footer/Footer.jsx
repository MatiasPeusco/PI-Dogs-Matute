import React from 'react';
import { Container, Socials, Wrapper } from '../Footer/StyledFooter'; // Importar componentes y estilos
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importar iconos de Font Awesome
import logo from '../../images/logo.png'; // Importar imagen del logo
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom

// Definición del componente funcional Footer
const Footer = () => {
  return (
    <Container>
      {/* Contenido del footer */}
      <div className='title'>
        {/* Logo y nombre de la aplicación */}
        <img src={logo} alt="logo" className='logo' />
        <span>Pooches</span>
      </div>
      {/* Iconos sociales */}
      <Socials>
        {/* Enlace al perfil de GitHub */}
        <Link to="https://github.com/MatiasPeusco" className='social' target="_blank">
          <FaGithub />
        </Link>
        {/* Enlace al perfil de LinkedIn */}
        <Link to="https://www.linkedin.com/in/matias-peuscovich-444271134/" className='social' target="_blank">
          <FaLinkedin />
        </Link>
      </Socials>
      {/* Derechos de autor */}
      <span className='copyright'>Copyright 2024 - Matias Peuscovich</span>
    </Container>
  );
}

export default Footer; // Exportar el componente Footer
