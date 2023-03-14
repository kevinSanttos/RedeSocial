import { Avatar } from "../../components/Avatar/index";
import { HeaderLogout } from "../../components/HeaderLogout";
import {
  StyledConteiner,
  StyledDivConteiner,
  StyledSuggestionConteiner,
  StyledDivSuggestionConteiner,
} from "./style";
import { InputDashBoard } from "../../components/Form/InputDashBoard";
import { Posts } from "../../components/Posts/index";
import { ListFollowersSuggestion } from "../../components/ListFollowersSuggestion";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const DashBoardPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <HeaderLogout link={"/user"} page={"Meu Perfil"} />
      <StyledConteiner>
        <StyledDivConteiner>
          {user ? (
            <Avatar fotoAvatar={user.imgPerfil} nome={user.name} profession={user.profession} />
          ) : (
            <></>
          )}
          <InputDashBoard />
          <h1>Posts</h1>
          <Posts />
        </StyledDivConteiner>
        <StyledSuggestionConteiner>
          <StyledDivSuggestionConteiner>
            <h2>Sugestões de seguidores</h2>
            <ListFollowersSuggestion />
          </StyledDivSuggestionConteiner>
        </StyledSuggestionConteiner>
      </StyledConteiner>
    </div>
  );
};
