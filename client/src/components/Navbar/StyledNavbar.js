import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.body};
    /* box-shadow: 0 10px 20px 0 rgba(0,0,0,.07); */
    box-shadow: ${({navScroll}) => (navScroll ? '0 10px 20px 0 rgba(0,0,0,.07)' : 'null')};
    position: sticky;
    top: 0;
    z-index: 1;
    transition: 0.2s ease;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;

    div{
        background-color: ${({theme}) => theme.colors.primary};
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 99999px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1{
        margin: 0 5px;
    }
`


export const Logo = styled.img`
    width: 1.8rem;
    height: 1.8rem;
    padding: 0 10px;
    color: white;

`

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const UL = styled.ul`
    display: flex;
    list-style: none;
    flex-flow: row nowrap;
    

    li{
        padding: 18px 10px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: ${({theme}) => theme.colors.primary};
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 200px;
        margin-top: 0;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        box-shadow: ${({open}) => open ? '-48px 56px 128px 200px rgba(0,0,0,0.41)' : null};
        padding-top: 40px;
    padding-right: 30px;
    text-align: center;

        li{
            color: white;
        }
    }
`

export const StyledBurguer = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 2;
    display: none;

    @media(max-width:768px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? 'white' : '#87CEEB'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;


        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2){
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1};
        }
        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

