import styled from "styled-components";
import IgniteLogo from "../../assets/IgniteLogo.svg"


export const Container=styled.header`
    background:${props=>props.theme['gray_800']};
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    gap: 1.6rem;

    >strong{
        font-size:2.6rem;
        color: ${props=>props.theme['gray_100']};
    }

    

`

export const Logo=styled.div`
    background: url(${IgniteLogo});
    height: 3.2rem;
    width: 3.5rem;
    background-size: cover;

`