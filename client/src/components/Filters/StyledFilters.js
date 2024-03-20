import styled from "styled-components";

export const Container = styled.div`
    width: 92vw;
    display: flex;
    flex-flow: column-reverse;
`

export const FiltersContainer = styled.div`
    display: flex;
    gap: 10px;
    
    select{
        margin-top: 5px;
        padding-left: 5px;
        width: 100%;
        height: 2rem;
        border: none;
        color: #000;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.07);
        cursor: pointer;

        &:focus{
            outline: none;
        }
    }

    span{
        margin-left: 10px;
        font-size: 15px;
    }

    @media(min-width: 820px){
        justify-content: center;
        align-self: center;
    }

`