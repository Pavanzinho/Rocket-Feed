import styled from "styled-components";

export const Container=styled.div`
    height: 100vh;

    .wrapper{
        max-width: 112rem;
        margin: 3.2rem auto;
        padding: 0 1.6rem; //conteudo não ficar colado caso seja menor que 112rem widht.

        display: grid;
        grid-template-columns: 25.6rem 1fr;
        gap: 3.2rem;

        align-items: flex-start;

        main>article + article{ // só aplica no artible que tem outro article anteriormente
            margin-top: 20px;
        }

    }

    @media(max-width:768px){
        
        
        .wrapper{
            grid-template-columns: 1fr; // como no mobile, queremos so uma coluna, basta falar para a coluna ocupar todo o espaço 
                                        //da caixa

        }
    }

`