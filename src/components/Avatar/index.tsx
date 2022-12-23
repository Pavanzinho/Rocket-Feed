import {Container} from "./styles";
import { ImgHTMLAttributes } from "react";
/*ImgHTMLAttributes, vai possuir dentro de si todos as propriedades comuns que existem na tag img, ou seja, se eu extender
a inteface,adicionando uma interface global "<HTMLImageElement>", podemos acessar todas as propriedades padrão da tag
sem precisar tipar, já que a interface ImgHTMLAttributes já está tipando atrás dos panos.
    Isso vale para qualquer tag, o react irá possuir essas interfaces que funcionam justamente para serem extendidas, para
    todas as tags html, facilitando bastante a tipagem */



interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{  // 
    hasBorder?:boolean, //? quando não é obrigatório
}

export function Avatar({hasBorder,...rest}:AvatarProps){
    return(
        <Container > 
            <img 
            className={hasBorder? 'avatarWithBorder':'avatar'}
            {...rest} 
            
            />     

        </Container>
    )
    
}