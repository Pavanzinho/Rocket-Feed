import {createGlobalStyle} from "styled-components";



export default createGlobalStyle`
    :root{
        font-size:62.5%;
    }
    

    :focus{
        outline:transparent;
        box-shadow: 0 0 0 2px ${props=>props.theme['green_300']};
        
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
        text-decoration:none ;
    }

    body{
        background:${props=>props.theme['gray_900']};
        color: ${props=>props.theme['gray_300']};
        -webkit-font-smoothing:antialiased; //estética da fonte]
    }

    body,input,textarea,button{
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
        font-size:1.6rem
    }

    a{
        text-decoration: none;
    }

    button:hover,a:hover{
        cursor: pointer;
    }


    @media(max-width:768px){
        :root{font-size: 50%;}
    }



`