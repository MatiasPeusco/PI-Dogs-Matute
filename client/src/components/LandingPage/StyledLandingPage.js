import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 4rem);
  width: 100%;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

`;

export const Presentation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100vw;
  height: 71.5%;

  span {
    color: black;
    font-weight: 600;
  }

  
  @media(min-width:820px){
      flex-flow: row nowrap;
    }
`;

export const Image = styled.img`
    margin: 0;
    padding: 0;
    width: 20rem;
    height: 20rem;

    @media(min-width: 820px){
        width: 30rem;
    height: 30rem;
    }
`

export const Text = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: black;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;

  @media(min-width: 820px){
    font-size: 3rem;
  }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
  margin-top: 15px;
  width: 11rem;
  height: 3rem;
  background: #87CEEB; /* Nuevo color primario */
  background: linear-gradient(0deg, rgba(135,206,235,1) 47%, rgba(52,152,219,1) 90%, rgba(52,152,219,1) 100%);
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 1.3rem;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07);
  cursor: pointer;
`;

export const Wrapper = styled.div`
  height: calc(100vh - 4rem);
  width: 100vw;
  background-color: rgb(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    --webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgb(255, 255, 255, 0.5);
  }
`;
