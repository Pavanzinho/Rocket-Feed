-Dom: representação do Html por meio do javascrpit. 




####Coisas legais no css:

-object-fit: cover
    Definir cover sem precisar ser background, como numa tag img por exemplo.

####Tags Html:
-article
-aside
-time: tag semantica que quando em hover mostra exatamente a data que foi feito o post. A maniputação das propriedades e 
conteúdo dessa tag, será feita com a bib date-fns, explicada mais a frente.


####Novidades Css:
focus-within: focus nos elementos que estão DENTRO da tag onde o focus tá sendo aplicado.



####Criação de componentes:
-dois casos:
    quando aparece de mais na tela.
    quando compensa quebrar um componente maior, para ele ficar mais limpo e mais facil de sofrer manutenção, criando assim,
    um componente menor.


####Manipulando datas.

    Biblioteca: date-fns:
-1° utilizar tag <time>, pois libera acessibilidade de hover, mostrando exatamente quando foi alterado ou postado.
-2° js tem certos problemas com manipulação de data, para isso: biblioteca=> date-fns:
    -Funções : 
        *format:newDate(parametro função), formato baseado na documentação,{locale:pt-BR no caso}
            $locale: import ptBr from "date-fns/locale/pt-Br"
        
        *formatDistanteNow: compara newDate com momento atual
            $newDate(parametro função),{
                locale:pt-Br neste caso,
                addSuffix:true or false.
        }

        *OBS: CRIAR VARIÁVEIS QUE CONTENHAM ESSAS FUNÇÕES E ADICIONA-LAS:
            %%Propriedades:
                <time title={var criada com format}>
                <time dateTime={newDate(parametro função).toISOString()}>
                    $Transformando em string.
            
            %%Conteudo :
                <time> <var criada com formatDistanteNow>.<time/>




####Estado:
-variáveis que eu quero que o componente monitore suas mudanças.

    const [var que será alterada e monitada, função que altera essa variável]=useState(mesmo formato da var que será manipulada)
        #obs: nome da função =set+nome da var.

-Closures
-a função que atualiza a variável no estado, tem contexto ISOLADO, ou seja, se dentro de uma função, vc colocar a função do estado várias vezes, ela vai sempre executar como se fosse a primeira vez, ou seja, ele vai atualizar a variável contando que o valor inicial dela é o primeiro valor setado no useState, ou seja, o inicial ou vazio, geralmente.
    Soluções>
        1.colocar a manipulação da variável de useState dentro de uma outra const criada, assim, ela armanezará esse valor, e quando executar a função de novo com a nova alteração, esse valor já vai estar salvo,
            


            *const [LikeCount, setLikeCount]=useState(0)
            
            
            
            ()=>{
                const newLikeCount=likeCount+1
                setLikeCount(newLikeCount+1)

            }

            Aí sim quando a função vai ser executado somando 2 unidades, por exemplo.

        
        2.Executar a função de useState passando um parametro que fará a operação.

            ()=>{

                return{
                    setLikeCount((state)=>{
                    return state+1
                    });
                
                    setLikeCount((state)=>{
                    return state+1
                    });
                }
                
            }

            Agora sim vai adicionar duas unidades a cada evento, pois o parametro armazena o resultado do retorno, e na 
            proxima vez que for executada, já terá o valor tratado. Assim, o quando a função for executada, o useState jogará um valor maior para dentro da variável. 
            
            

            Aqui sim, o valor número será somado na 
            

####key no react:

-3 momentos em que um componente é renderizado novamente no React:
    1.Quando o estado altera.
    2.Quando propriedade altera
    3.Quando um componente pai renderiza novamente.

    Levando em consideração um componente "Comment". Toda vez que um comentário por meio de algum evento que disparará uma função que altera o estado. A alteração do estado, atualiza o valor da variável que será manipulada na renderização de alguma lista. Quando esse estado altera, o react entende que deverá renderizar novamente todas as lista e seus filhos, tornando a app menos performática. Assim, o key unique funciona como um identificador para o react entender, previamente, qual componente ainda não foi renderizado, podendo assim, neste caso, por exemplo, renderizar novamente, apenas os "Comment" que  não possuam um propriedade key que já pertence a outro "Comment" que já foi renderizado.

    Resumindo: Adicionar propriedade key(pode ser um texto, um id, enfim) no componente ou tag que está sendo retornada na função que percorre a lista(na GRANDE maioria das vezes, o método map). Assim, quando o map percorrer o array especifico, ele identificará a key e não renderizará a novamente o componente que já possui uma key já definida.

-Pq não é recomendado utilizar índice do array como key?
    A índice do array é fixa, independente se os valores forem trocados de lugar dentro do array, exemplo:
    
    array=[1,2,3,4]=> 1=[0], 2=[1] ... caso eu coloque 2 no lugar de 1, o índice dele, passará a ser 0, independente de seu valor, dessa forma, ele vai renderizar tudo de novo, pois ele entendeu que aquele identificador foi trocado.



##Comunicação entre componentes e imutabilidade no React.



-Desejo=> alterar algo no componente pai, como um evento no componente filho.
    $exemplo: 
        1.Um button dentro de um componente filho já renderizado.O button é o gerador do evento, ou seja, adicionar uma função handle nele, já que a mudança vem a partir de algum evento nele.
        2.Nesta app a intenção é: clicar no botao, DENTRO do componente <Comment/> para excluir o comment que possui esse botão.
        Contudo, o array  o que contém o contéudo desse componente e o estado que o altera <Comment/> está na função jsx de <Post/>(componente pai);
        3.A ordem de renderização de <Comment/>, está dentro de componente pai <Post/>, por meio de um map, que está gerando um componente <Comment/> para cada posição presente no array em que o map está sendo utilizado.
        Assim, podemos adicionar um FUNÇÃO COMO PROPRIEDADE do componente <Comment/> que está sendo gerado.
        4. Agora com essa função na propriedade de <Comment/>, no arquivo jsx de Comment, onde ele está sendo estruturado, consigo acessar a função passada como propriedade lá onde este componente está sendo renderizado, ou seja:

            Arquivo componente pai<Post/>
                *{comments.map(comment=>{
                    return(
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}  =>função que poderá ser utilizada como parametro da função jsx 
                                                                de <Comment/>
                        />
                    )
                })
                }

                function deleteComment(commentToDelete){
                    const commentWithoutDeleteOne=comments.filter(comment=>{
                        comment !== commentToDelete

                        setComment(commentWithoutDeleteOne) // atualizando array que possui comentários com estado ja criado.
                    })
                }


            
        
            Arquivo do componente filho <Comment/>
            
            *Adicionar, neste caso, <button Onclick={handleDeleteComment}/>
                OBS:O EVENTO SEMPRE ESERA UMA FUNÇÃO, E NAO UMA EXECUÇÃO DE FUNÇÃO, DÁ PROBLEMA DE LOOPING.
            
            *function handleDeleteComment(){
                onDeleteComment(content) //content e onDeleteComment foram passados como parametro na função jsx de Comment.
            }


            Sequencia de acontecimentos:
                1.disparo da função handleDeleteComment, que...
                2.dispara a função onDeleteComment(content=>identificador única do componente.) ,que...
                3.dispara a função deleteComment, já que onDeleteComment={deleteComment}
                4.função deleteComment cria novo array que não contém o parametro passado.
                    Como deleteComment assume onDeleteComment, e onDeleteComment tem como parametro o identificado única do comentário, no caso, content, o parametro passado em deleteComment vai assumir o valor do identificador única.
                
                6. Novo array inserido no estado que controla a variável/array que possui os comentários:
                    setComment(variável nova que não contém o comentário que, dentro de sí, tinha o botão clickavel que desen
                    cadeeou toda essa sequencia de acontecimentos.

-Conceito de imutabilidade: no react, as variáveis não devem ser atualizadas, pois é anti performática ficar atualizando 
informações de varíaveis já salvas na memória, ou seja, a intenção aqui é CRIAR uma nova varíavel na memória, e por isso,
os estados são utilizados, eles não vão atualizar o valor da variável, eles vão criar um NOVO valor para elas.

-Programação declarativa vs imperativa:
    React: declativa=> são adicionadas condições para a alteração de alguma variável, elas não sao atualizadas diretamente 
    acessando-as de alguma forma e setado valores para elas. As condições vão ser responsáveis por fazer o estado criar um novo
    valor para essas variáveis, ou seja=> resultado final acontencendo a partir de alguma condição para acontecer, o que é diferente de setar um novo valor para a varíavel caso queira esse novo valor.




##Typescript

    #Tipagem das importações, para evitar erros previamente, já que o js não consegue especificar os formatos das importações,
    ou seja, se uma constante ou parametro na app precisa receber uma string, e de alguma forma, for passado um number, o js não reconhece aquilo como errado, e pode bugar a app inteira, então tipamos essas importações com TypeScript.

-Events: existem eventos prontos que utiliza-se para todas as funções que são disparadas com events no react.
    -FormEvent
    -ChangeEvent
    -InvalidEvent
        <HTMLTextAreaElement> 
        :interface global que deve ser usada pra especificar qual tag html que é o alvo do evento importado

Extensão de interfaces: 
    -no react, existem interfaces prontas, que por tras dos panos, já são tipadas, facilitando muito este processo.
    Cada tag html vai possuir uma interface , onde suas propriedades já estão tipadas.
        1.importar interface, por exemplo: import { ImgHTMLAttributes } from "react";
        2.extender a interface: interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>
            adicionar dentro do escopo de AvatarProps as propriedades que não são básicas das tags html, como uma condição
            para adicionar ou retirar um estilo, por exemplo. 
        3. Sempre adicionar a interface global na frente : <HTMLImageElement> para identificar qual elemento html a interface
            está trabalhando
    









                




        


            
         