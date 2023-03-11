import { AvatarFollower } from "../AvatarFollower";
import perfil from "../../assets/perfil.jpg"
import SemCurti from "../../assets/SemCurti.png"
import {StyledLisFollower, StyledDivFooterPost} from "./style"

export const ListFollower = () => {
    return (
        <StyledLisFollower>
            <li>
                <AvatarFollower fotoAvatar={perfil} nome={"Percival"} level={"front"}/>
                <h2>Inteligencia Artificial</h2>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda 
                    repudiandae ipsa culpa similique consequuntur ab ad amet? In voluptates 
                    fugiat sed, mollitia dolor aut aliquam iusto, placeat molestiae, ut alias?
                </span>
                <StyledDivFooterPost>
                    <button>Abrir Post</button>
                    <div>
                        <img src={SemCurti} alt="SemCurti" />
                        <span>0</span>
                    </div>
                </StyledDivFooterPost>
            </li>
        </StyledLisFollower>
    );
  };