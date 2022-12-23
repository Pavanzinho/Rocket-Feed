import styled from "styled-components";

export const Container=styled.article`


    background: ${props=>props.theme['gray_800']};
    padding: 4rem;
    border-radius: 8px;
    /*Sinal de > :
        estilizar headers que são filhos DIRETOS do article, post nesse caso. Caso tenha outro header dentro de
        outra tag, não será estilizado*/

    >header{ 
        display: flex;
        justify-content: space-between;
        
        >time{
            line-height: 2.2rem;
            font-size: 1.4rem;
            color: ${props=>props.theme['gray_400']}
        }
    

        .author{
            display: flex;
            gap: 1.6rem;
        
            
        }

        .authorInfo{
            display: flex;
            flex-direction: column;

            >strong{
                display: block;
                line-height: 2.6rem;
                color: ${props=>props.theme['gray_100']};
            }

            >span{
                display: block;
                font-size: 1.4rem;
                line-height: 2.24rem;
                color: ${props=>props.theme['gray_400']};
            }
        
        
        
        }
    
    }

    .content{
        line-height: 2.5rem;
        color:${props=>props.theme['gray_300']};
        margin-top: 2.4rem;

        >p{
            margin-top: 1.6rem;

        }
            a{
            font-weight: bold;
            color: ${props=>props.theme['green_500']};
            transition: 0.4s;

                &:hover{
                    color: ${props=>props.theme['gray_300']};
                }
            }

        .tags_paragraph{
            display: flex;
            gap: 0.5rem;
            padding-bottom: 2.4rem;
            border-bottom: 1px solid ${props=>props.theme['gray_600']};
        }
    }

    .commentForm{
        width: 100%;
        margin-top: 1.5rem;
        padding-top: 1.5rem;
      
        
        >strong{
            line-height: 1.6rem;
            color:  ${props=>props.theme['gray_100']};
        }

        textarea{
            width: 100%;
            background:  ${props=>props.theme['gray_900']};
            height: 9.6rem;
            resize: none;

            margin-top: 1.6rem;
            border-radius: 8px;
            border: none ;
            padding: 1.6rem;

            color:${props=>props.theme['gray_100']};
            line-height: 1.4;
        }

        >footer{
            visibility:hidden; 
            max-height: 0; 
            transition:max-height 1s;
                
        }
        
        &:focus-within footer{  //qualquer focus dado em algum elemento filho de .commentform vai gerar as prop css no footer.
                                //porém, neste caso, o unico dentro é o text área.
            visibility: visible;
            max-height: 20rem ;  
            }
        
        >footer{
        
            >button[type=submit]{
                padding: 1.6rem 1.5rem;
                margin-top: 1.6rem;
                border-radius: 8px;
                border: 0;
                background: ${props=>props.theme['green_500']};
                color: ${props=>props.theme['white']};
                font-weight: bold;
                transition: 0.4s;
            }
    
            
            >button[type='submit']:disabled{
                opacity: 0.5;
                cursor: not-allowed;
            };
        
            >button[type=submit]:not(:disabled):hover{
                    background: ${props=>props.theme['green_300']};
            };
        }
    }

            
       
`