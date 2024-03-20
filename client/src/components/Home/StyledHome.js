import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
`

export const Grid = styled.div`
    max-width: 960px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;

    @media(max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
`;