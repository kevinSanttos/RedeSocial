import { Avatar } from "../Avatar";
import perfil from "../../assets/perfil.jpg"
import {StyledList, StyledButtonFollow, StyledButtonFollowing} from "./style"

export const ListFollowersSuggestion = () => {
    return (
        <StyledList>
          <li>
            <Avatar fotoAvatar={perfil} nome={"Percival"} level={"front"}/>
            <StyledButtonFollow>Seguir</StyledButtonFollow>
          </li>
          <li>
            <Avatar fotoAvatar={perfil} nome={"Percival"} level={"front"}/>
            <StyledButtonFollowing>Seguindo</StyledButtonFollowing>
          </li>
        </StyledList>
    );
  };