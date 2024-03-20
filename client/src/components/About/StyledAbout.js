import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Left = styled.div`
    padding: 5rem;
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    text-align: center;

    ul{
        display: inline-block;
    }
`

export const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    text-align: center;
`
export const TechnologiesContainer = styled.div`
    display: flex;
    gap: 10px;
    margin: 10px 0;
    padding-top: 20px;
`

export const ImageContainer = styled.div`
    width: 6.5rem;
    height:6.5rem;
    border-radius: 20px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.07);
    display: flex;
    justify-content: center;
`

export const Image = styled.img`
    width: 5rem;
`

export const Contact = styled.div`
    display: flex;
    align-items: center;
    height: 2rem;
    gap: 5px;

    span{
        font-size: 1.2rem;
    }

    .icon{
        font-size: 1.5rem;
        color: ${props => props.theme.colors.primary};
        text-align: center;
        transition: 0.2s ease;

        &:hover{
            color: ${props => props.theme.colors.secondary};
        }
    }
`

