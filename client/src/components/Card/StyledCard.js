import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    align-items: center;
    width: 15rem;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.07);
    box-sizing: border-box;
    transition: all .3s;

    &:hover{
        transform: scale(1.02);
    }

    @media(max-width: 768px){
        width: 11rem;

        &:hover{
        transform: none;
    }
    }
`;


export const Image = styled.img`
    border: 0;
    height: 10%;
    width: 100%;
`;

export const InfoContainer = styled.div`
    padding: 5px 16px 5px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;

    h1{
    margin: 10px 0 5px 0;
    cursor: pointer;
    font-size: 16px;
    transition: all .2s ease-out;
    text-align: center;
    letter-spacing: .2px;
    };

    span{
        margin-top: 2pxpx;
        font-size: 15px;
    }

    .span{
        /* background-color: ${({theme}) => theme.colors.primary}; */
        border-radius: 5px;
        padding: 1.8px;
        color: ${({theme}) => theme.colors.primary};
        font-weight: 600;
    }

    div{
        margin-top: 15px;
        display: flex;
        justify-content: center;
    }

    button{
        border:none;
        background-color: ${({theme}) => theme.colors.primary};
        color: white;
        width: 4.5rem;
        height: 2rem;
        border-radius: 5px;
        cursor: pointer;
        font-size: 15px;
        letter-spacing: 1px;
        transition: 0.2s ease;

        &:hover{
            background-color: ${({theme}) => theme.colors.secondary};
        }
    }
`
