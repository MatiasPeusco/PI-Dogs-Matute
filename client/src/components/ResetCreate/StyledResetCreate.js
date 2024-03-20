import styled from "styled-components";

export const Container = styled.div`
    width: 92vw;
    display: flex;
    margin-bottom: 12px;

    @media(min-width: 820px){
        justify-content: center;
        align-self: center;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 5px;

    button{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 9999px;
        border: none;
        background-color: ${({theme}) => theme.colors.primary};
        color: #fff;
        font-size: 15px;
        padding-top: 5px;
        text-align: center;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.07);
        cursor: pointer;
        transition: 0.2s ease;
        &:hover{
            background-color: ${props => props.theme.colors.secondary};
        }
    }
`