import React, { useState } from "react";
import { StyledBurguer } from "./StyledNavbar";
import RightNav from "./RightNav";

const Burguer = () => {
  const [open, setOpen] = useState(false);

  // Componente que muestra el ícono del menú  y controla su estado
  return (
    <>
      <StyledBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurguer>
      {/* Componente RightNav que muestra el menú lateral */}
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
};

export default Burguer;


