import { Avatar } from "../Avatar";
import {StyledList, StyledButtonFollow, StyledButtonFollowing} from "./style"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export const ListFollowersSuggestion = () => {
  const {users} = useContext(UserContext)

  console.log(users)
    return (
      <>
        {
          users ? (
            <StyledList>
              {
                users.map(element =>(
                <li>
                  <Avatar fotoAvatar={element.img} nome={element.name} level={element.level}/>
                  <StyledButtonFollow>Seguir</StyledButtonFollow>
                </li>

                ))
              }
            </StyledList>
            
            ) : (
            <div>Sem sugestão</div>
          )
        }
      </>
    )
  };