import {Container} from "./styles";

import{Header} from "../../components/Header"
import{SideBar} from "../../components/SideBar"
import {Post} from "../../components/Post"
import {PostProps} from '../../components/Post'


interface Post extends PostProps{  // tipando a varíavel para não dar conflito de formatos nas propriedades quando for fazer
                                  //a iteração no map.
  id:number
}
export default function Home() {

  const posts:Post[]=[
    {
      id:1,
      author:{
        avatarUrl:"https://github.com/pavanzinho.png",
        name:"Thiago Pavan",
        role:"Student Dev Front-end"
      },
      content:[
        {type:'paragraph', content:"Fala galeraa 👋"},
        {type:'paragraph', content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",},
        {type:'link', content:"jane.design/doctorcare"}
      ],
      publishedAt: new Date("2022-12-19 14:45:00")
    },

    {
      id:2,
      author:{
        avatarUrl:"https://github.com/diego3g.png",
        name:"Diego 3g",
        role:"Diretor da RocketSeat"
      },
      content:[
        {type:'paragraph', content:"Fala galeraa 👋"},
        {type:'paragraph', content:"Acabei de lançar uma nova aula na trilha ignite React, dá um confere lá"},
        {type:'link', content:"https://app.rocketseat.com.br/node/chapter-i-6/group/os-motores-do-react/lesson/propriedades-do-post"}
      ],
      publishedAt: new Date("2022-12-19 14:43:00")
    } 
  ]
  
  
  return (
    <Container>
      <Header/>                        
      <div className="wrapper">
        <SideBar/>
            
        <main>
          {posts.map(post=>{
            return(
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
            })
          }
        </main>
       
      </div>
    </Container>
    
    
    
  )
}
