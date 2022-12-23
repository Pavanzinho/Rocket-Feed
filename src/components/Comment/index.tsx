import { ThumbsUp } from "phosphor-react";
import { Trash } from "phosphor-react";

import {Container} from "./styles";

import{Avatar} from "../Avatar";
import { useState } from "react";

import {format,formatDistanceToNow} from "date-fns";
import { ptBR } from "date-fns/locale";


export interface CommentProps{
    content:string,
    publishedAt:Date
    
    onDeleteComment: (comment:string)=>void
}

export function Comment({content,publishedAt,onDeleteComment}:CommentProps){
   
    const [likeCount, setLikeCount]=useState(0);// sempre valor inicial, com formato igual ao que eu quero armazenas na variável
    
    const publishedDateFormatted=format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'",{locale:ptBR});
    const publishedDateRelative=formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true
    })




    function handleDeleteComment(){
        
        onDeleteComment(content)
    }

    function HandleLikeComment(){
        setLikeCount(likeCount+1)
    }



    return(
        <Container>
            <Avatar 
            src="https://github.com/pavanzinho.png"  
            alt="Imagem de usuário"
            />


            <div className="commentBox">
                <div className="commentContent">
                    <header>
                        <div className="authorAndTime">
                            <strong>Thiago Pavan</strong>
                            
                            <time 
                            title={publishedDateFormatted}
                            dateTime={publishedAt.toISOString()}
                            >
                            {publishedDateRelative}
                            </time>
                        </div>

                        <button 
                        onClick={handleDeleteComment} 
                        title="Deletar Comentário">  {/*quando o button é so imagem, colocar title para leitor de tela*/}
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={HandleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </Container>
    )
   
}