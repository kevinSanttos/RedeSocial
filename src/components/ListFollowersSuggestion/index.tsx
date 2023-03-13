import { Avatar } from "../Avatar";
import {StyledList, StyledButtonFollow, StyledButtonFollowing} from "./style"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";


export const ListFollowersSuggestion = () => {
  const {users, following,} = useContext(UserContext)
  const [follow, setFollow] = useState(false)

  

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
                  <StyledButtonFollow onClick={()=>{setFollow(!follow)}}>{follow ? "Seguindo" : "Seguir"}</StyledButtonFollow>
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