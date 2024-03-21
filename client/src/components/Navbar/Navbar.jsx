import React, { useState, useEffect } from 'react'
import Burguer from './Burguer'
import { Logo, LogoContainer, Nav } from './StyledNavbar'
import logo from '../../images/logo.png';

const Navbar = () => {
  // Estado para controlar si la barra de navegación debe cambiar de estilo al hacer scroll
  const [navScroll, setNavScroll] = useState(false);

  // Función que cambia el estado de la barra de navegación al hacer scroll
  const changeNav = () => {
    if (window.scrollY >= 90) {
      setNavScroll(true);
    } else {
      setNavScroll(false)
    }
  }

  // Efecto que se ejecuta al montar el componente para añadir un listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    return () => {
      window.removeEventListener('scroll', changeNav)
    }
  }, [])

  // Renderiza la barra de navegación con un logo y un menú
  return (
    <Nav navScroll={navScroll}>
      <LogoContainer>
        <div>
          <Logo src={logo} alt="" />
        </div>
        <h1>Pooches</h1>
      </LogoContainer>
      <Burguer />
    </Nav>
  )
}

export default Navbar
