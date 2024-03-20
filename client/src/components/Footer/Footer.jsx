import React from 'react'
import { Container, Socials, Wrapper } from '../Footer/StyledFooter'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from '../../images/logo.png'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
        <div className='title'>
          <img src={logo} alt="logo" className='logo'/>
          <span>Pooches</span>
        </div>
        <Socials>
          <Link to="https://github.com/MatiasPeusco" className='social' target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/matias-peuscovich-444271134/" className='social' target="_blank">
            <FaLinkedin />
          </Link>
        </Socials>
        <span className='copyright'>Copyright 2024 - Matias Peuscovich</span>
    </Container>
  )
}

export default Footer