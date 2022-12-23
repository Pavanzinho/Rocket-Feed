import {Container} from "./styles";
import{PencilSimpleLine} from "phosphor-react";

import {Avatar} from "../Avatar"

export function SideBar(){
    return(
        <Container>
            <img 
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            className="img_cover"
            />
            

            <div className="profile">
                
                <Avatar src="https://github.com/pavanzinho.png" hasBorder/>
                 
                {/* className="avatar" 
                src="https://github.com/pavanzinho.png" 
                /> */}
                
                <strong>Thiago Pavan</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <button
                type="button"
                >

                    <PencilSimpleLine 
                    size="20"
                    />   
                    
                    Edite seu perfil
                </button>
            </footer>

        </Container>
    )


}