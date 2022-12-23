import {Container} from "./styles";

import {Comment} from "../Comment"
import{Avatar} from "../Avatar"

import {format,formatDistanceToNow} from "date-fns";

import { useState, FormEvent,ChangeEvent} from "react";
import { ptBR } from "date-fns/locale";

interface Author{
    name:string,
    role:string,
    avatarUrl:string
}

interface Content{
    type:'paragraph' |'link';
    content:string
}

export interface PostProps{
    author:Author,
    publishedAt: Date,
    content:Content[]
}



export function Post({author,publishedAt,content}:PostProps){
   ; //será armazenado um array, por isso [];
    
   
    const [comments,setComments]=useState(['ola']);
    const [newCommentText, setNewCommentText]=useState('') ;
    const isNowCommentEmpty=newCommentText.length==0;
    const initialCommentDate=new Date("2022-12-19 15:03:00");
    
    /*inicializar o estado já no formato que será armazenado, neste caso, 
    string, já que vou resetar o texto digitado na textarea com essa função*/


    const publishedDateFormatted=format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'",{locale:ptBR});
    
    const publishedDateRelativeToNow=formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true, 
    });

    


    function handleCreateNewComment(event:FormEvent){
        event.preventDefault();

        setComments([...comments, newCommentText])  ;
        setNewCommentText('');
        
    };

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
        setNewCommentText(event.target.value);
    }
    
    function deleteComment(commentToDelete:string){
        const commentWithoutDeleteOne=comments.filter(comment=>{
            return comment !== commentToDelete;
        })

        setComments(commentWithoutDeleteOne);
    };
   
    
   

    return(
        <Container>
            <header>
                <div className="author">
                    <Avatar 
                    src={author.avatarUrl}
                    hasBorder
                    />

                    <div className="authorInfo">
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                
                </div>

                <time 
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
                >

                    {publishedDateRelativeToNow}
                </time>
           
            </header>
            
            <div className="content">
               {content.map(line=>{
                if(line.type ==='paragraph'){
                    return <p key={line.content}>{line.content}</p>   
                }
                // else if(line.type ==='link'){
                //     return <p key={line.content}><a href="#">{line.content}</a></p>
                // }
                })
               }
            </div>

            <form 
            onSubmit={handleCreateNewComment} 
            className="commentForm"
            >
                <strong>Deixe seu Feedback</strong>
                
                <textarea 
                placeholder="Deixe seu comentário"
                name="comment"
                value={newCommentText}
                onChange={handleNewCommentChange}
                />
                
                <footer>
                    <button type="submit" 
                    disabled={isNowCommentEmpty}> {/*clean code, deixar o código obvio de ser ler para quem vai fazer manutencao*/}
                        Comentar
                    </button>
                </footer>
            </form>

            <div className="commentList">
                {comments.map(comment=>{
                    return(
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                            publishedAt={initialCommentDate} //comment não possui array com essa prop, então criei uma variável.
                        />
                    )
                })
                }
            </div>  
        </Container>
    )

}