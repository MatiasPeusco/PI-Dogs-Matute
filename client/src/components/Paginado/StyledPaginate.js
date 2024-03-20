import styled from "styled-components";

export const PaginadoContainer = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 3rem;
    list-style: none;
    padding: 0;
    gap: 4px;
`;

export const Button = styled.button`
    background-color: ${props => props.theme.colors.primary};
    width: 2rem;
    height: 2rem;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 12px;
    color: #fff;
    font-weight: 500;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.07);
    transition: 0.2s ease;
    &:hover{
        background-color: ${props => props.theme.colors.secondary};
    }
`;