import React from "react";
import { UL, StyledLink } from "./StyledNavbar";

const RightNav = ({ open, setOpen }) => {
  // Renderiza una lista desordenada (UL) con enlaces a las páginas Home y About
  return (
    <UL open={open}>
      <StyledLink to="/home" onClick={() => setOpen(!open)}>
        <li>Home</li>
      </StyledLink>
      <StyledLink to="/about" onClick={() => setOpen(!open)}>
        <li>About</li>
      </StyledLink>
    </UL>
  );
};

export default RightNav;
