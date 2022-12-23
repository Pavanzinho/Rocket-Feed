import styled from "styled-components";


export const Container=styled.aside`

    border-radius: 8px;
    overflow: hidden;
    background-color: ${props=>props.theme['gray_800']};

    .img_cover{
        width: 100%;
        height: 7.2rem;
        object-fit: cover; //utilizar cover sem ser com background
    }

    .profile{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: calc(0px - 3rem - 6px);

        
        
        strong{
            line-height: 2.6rem;
        }
        span{
            line-height:2.24rem;
            color:${props=>props.theme['gray_400']};
            font-size: 1.4rem;
        };
    }

    footer{
        padding: 2.4rem 3.2rem 3.2rem;
        border-top: 1px solid ${props=>props.theme['gray_600']};
        margin-top: 2.4rem;
        

        >button{
            width: 100%;
            height: 50px;
            padding: 0 2.4rem;

            border-radius: 8px;
            border: 1px solid ${props=>props.theme['green_500']};
            
            font-weight: 700;
            
            color: ${props=>props.theme['green_500']};
            background: transparent;
            
            display: flex;
           
            align-items: center;
            justify-content: center;

            gap: 0.8rem;

            transition: color 0.2s , background 0.2s;

            &:hover{
                background:${props=>props.theme['green_500']};
                color: ${props=>props.theme['white']};
                border-color: ${props=>props.theme['white']};
            }

                        
        }
    }


`