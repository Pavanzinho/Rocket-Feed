import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    margin-top: 32px;
    gap: 1.6rem;

    

    .commentBox{
        flex: 1;
        
    
        .commentContent{
            padding: 16px 16px 25px;
            background: ${props=>props.theme['gray_700']};
            
            border-radius: 9px;


            >header{
                display: flex;
                align-items: center;
                justify-content: space-between;
                
            
                .authorAndTime{
                    display: flex;
                    flex-direction: column;

                    >strong{
                        font-weight: 700;
                        font-size: 1.4rem;
                        line-height: 2.2rem;
                        color: ${props=>props.theme['gray_100']};

                    }
        
                    >time{
                        font-size: 1.2rem;
                        font-weight: 400;
                        line-height: 1.9rem;
                        color: ${props=>props.theme['gray_400']};
                    }       
                }

                >button{
                    background: transparent;
                    border: 0;
                    line-height: 0; 
                    //a altura do botão não é definida pelo conteudo, assim, quando ta em focus, a caixa fica maior do que o icone
                    border-radius: 2px;
                    color: ${props=>props.theme['gray_400']};
                    align-self: flex-start;

                    &:hover{
                        color: ${props=>props.theme['red_danger']}
                    }
                }
            }

            >p{
                font-weight: 400;
                font-size: 1.4rem;
                line-height: 2.24rem;
                color: ${props=>props.theme['gray_400']};
                margin-top: 16px;
            }
        }

        >footer{
            margin-top: 16px;

            >button{
                display: flex;
                align-items: center;
                background: transparent;
                border: 0;
                color: ${props=>props.theme['gray_400']};

                font-size: 1.4rem;
                line-height: 1.64rem;

                &:hover{
                    color: ${props=>props.theme['green_300']};
                }

                >svg{
                    margin-right: 1rem;
                }
                
                >span{
                    &:before{
                        content: "•";
                        padding: 0 0.3rem;
                    }
                }
                
                    
            }
                

            }
        }

        
    

    
        
    
`