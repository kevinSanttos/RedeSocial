import { Link } from "react-router-dom"
import { StyledHeader } from "../../pages/LoginPage/style"

interface IHeaderProps{
    link: string, 
    text: string
}

export const Header = ({link, text}: IHeaderProps)=> {
    return(
        <StyledHeader>
        <nav>
          <h1>Logo do site</h1>
          <Link to={link}>{text}</Link>
        </nav>
      </StyledHeader>
    )
}