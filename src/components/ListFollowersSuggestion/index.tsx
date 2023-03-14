import { Avatar } from "../Avatar";
import {StyledList, StyledButtonFollow, StyledButtonFollowing} from "./style"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";


export const ListFollowersSuggestion = () => {
  const {users, setFollowing, following} = useContext(UserContext)
  const [follow, setFollow] = useState(true)

  const followPeople = (e:any)=>{
    setFollow(!follow)
    console.dir(e.target)
    if(follow == true){
      e.target.innerText="seguir"
      setFollowing(following + 1)
    }else if(follow == false && following > 0){
      e.target.innerText="seguindo"
      setFollowing(following - 1)
    }
  }

    return (
      <>
        {
          users ? (
            <StyledList>
              {
                users.map(element =>(
                  
                <li key={element.id}>  
                  <Avatar fotoAvatar={element.imgPerfil} nome={element.name} profession={element.profession}/>
                  <StyledButtonFollow  key={element.id} onClick={(e)=>followPeople(e)}>seguir</StyledButtonFollow>
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