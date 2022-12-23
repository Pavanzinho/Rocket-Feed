import styled from "styled-components";


export const Container=styled.div`
            
    .avatar{
        object-fit: cover;
        height: 6rem;
        width: 6rem;
        border-radius: 8px;
        margin-bottom: 1.6rem;
           
    }      
    
    .avatarWithBorder{
        object-fit: cover;
        height: 6rem;
        width: 6rem;
        border-radius: 8px;
        margin-bottom: 1.6rem;
           
        border: 4px solid ${props=>props.theme['gray_800']};
        outline: 2px solid ${props=>props.theme['green_300']};
    }
            
            

`