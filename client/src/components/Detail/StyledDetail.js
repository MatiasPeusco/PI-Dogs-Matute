import styled from 'styled-components'

export const DetailContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 15px;

    @media(min-width: 1200px){
        flex-flow: row nowrap;
    }

    .imageName{
        padding: 0 10px;
        h1{
            font-size: 15px;
        }

        img{
            width: 100%;
        }

        @media(min-width: 1200px){
            h1{
                margin-left: 4rem;
                font-size: 27px;
            }
        img{
            margin-left: 4rem;
            width: 38rem;
        }
    }
    }

    .details{
        margin-top: 15px;
        padding: 0 10px;
        display: flex;
        flex-flow: column nowrap;
        gap: 10px;

        @media(min-width: 1200px){
            margin: 4rem 2rem;
        }
    }

    .detail{
        display: flex;

        span{
            font-weight: 600;
        }

        p{
            margin: 0 10px;
        }

        @media(min-width: 1200px){
        span{
            font-weight: 700;
            font-size: 20px;
        }
        p{
            margin: 5px 10px;
        }
        }
    }

    .detailTemperament{
        display: flex;
        flex-flow: column nowrap;

        span{
            font-weight: 600;
        }

        p{
            margin: 0;
        }

        @media(min-width: 1200px){
        span{
            font-weight: 700;
            font-size: 20px;
        }
        p{
            margin: 5px px;
        }
        }
    }
`;