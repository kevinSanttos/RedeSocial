import { useContext } from "react"
import { StyledHeader } from "../../pages/LoginPage/style"
import { UserContext } from "../../contexts/UserContext"

export const HeaderLogout = ()=> {
    const {userLogOut} = useContext(UserContext)
    return(
        <StyledHeader>
        <nav>
          <h1>Logo do site</h1>
          <button onClick={()=> {userLogOut}}>Sair</button>
        </nav>
      </StyledHeader>
    )
}