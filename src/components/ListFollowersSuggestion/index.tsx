import { Avatar } from "../Avatar";
import {StyledList, StyledButtonFollow, StyledButtonFollowing} from "./style"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";


export const ListFollowersSuggestion = () => {
  const {users} = useContext(UserContext)
  const [follow, setFollow] = useState("seguir")

  console.log(users)
    return (
      <>
        {
          users ? (
            <StyledList>
              {
                users.map(element =>(
                  
                <li key={element.id}>
                  
                  <Avatar fotoAvatar={element.imgPerfil} nome={element.name} profession={element.profession}/>
                  <StyledButtonFollow  key={element.id} onClick={()=> {}}>{follow}</StyledButtonFollow>
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