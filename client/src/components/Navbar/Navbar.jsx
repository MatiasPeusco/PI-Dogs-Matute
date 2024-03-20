import React, {useState, useEffect} from 'react'
import Burguer from './Burguer'
import { Logo, LogoContainer, Nav } from './StyledNavbar'
import logo from '../../images/logo.png';

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 90){
      setNavScroll(true);
    }else{
      setNavScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

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