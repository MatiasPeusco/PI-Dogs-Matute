import React, { useState } from "react";
import { StyledBurguer } from "./StyledNavbar";
import RightNav from "./RightNav";

const Burguer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurguer>
      <RightNav open={open} setOpen={setOpen}/>
    </>
  );
};

export default Burguer;
