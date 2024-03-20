import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 92vw;
    margin: 25px 0;

    @media(min-width: 820px){
      justify-content: center;
      align-items: center;
    }
`

export const SearchBarContainer = styled.div`
    display: flex;
  width: 60%;
  height: 2.5rem;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07);

  .searchIcon {
      padding: 12px 10px;
      color: ${({theme}) => theme.colors.primary};
      font-size: 20px;
    }

  input {
    border: none;


    &:focus {
      outline: none;
    }

    
  }
`;
