import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 15rem;
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    div{
        padding-top: 2rem;
    }
    
    .title{
        font-size: 20px;
        color: #fff;
        margin-top: 1.5rem;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .copyright{
        color: #fff;
        margin-top: 2rem;
    }

    .logo{
        width: 2rem;
        height: 2rem;
        margin-right: 5px;
    }
`
export const Socials = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;

   .social{
       text-align: center;
       color: #fff;
       font-size: 2rem;
       cursor: pointer;
   }
`
