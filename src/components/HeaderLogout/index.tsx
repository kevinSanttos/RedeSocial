import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledHeaderLogout } from "./style";
import { Link } from "react-router-dom";

interface IHeaderLougout {
  link: string,
  page: string
}

export const HeaderLogout = ({link, page}:IHeaderLougout) => {
  const { userLogOut } = useContext(UserContext);
  const title = "< Dev Network />"
  return (
    <StyledHeaderLogout>
      <nav>
        <h1>{title}</h1>
        <div>
          <Link to={link}>{page}</Link>
          <button onClick={() => userLogOut()}>Sair</button>
        </div>
      </nav>
    </StyledHeaderLogout>
  );
};
