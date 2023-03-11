import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledHeader } from "../Header/style";
import { StyledHeaderLogout } from "./style";

export const HeaderLogout = () => {
  const { userLogOut } = useContext(UserContext);

  return (
    <StyledHeaderLogout>
      <nav>
        <h1>Logo do site</h1>
        <button onClick={() => userLogOut()}>Sair</button>
      </nav>
    </StyledHeaderLogout>
  );
};
