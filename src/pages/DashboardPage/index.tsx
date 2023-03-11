import { Avatar } from "../../components/Avatar/index";
import { HeaderLogout } from "../../components/HeaderLogout";
import {StyledConteiner, StyledDivConteiner, StyledSuggestionConteiner, StyledDivSuggestionConteiner} from"./style"
import perfil from "../../assets/perfil.jpg"
import { InputDashBoard } from "../../components/Form/InputDashBoard";
import {ListFollower} from "../../components/ListFollower/index"
import { ListFollowersSuggestion } from "../../components/ListFollowersSuggestion";


export const DashBoardPage = () => {
  return (
    <div>
      <HeaderLogout link={"/user"} page={"Meu Perfil"}/>
      <StyledConteiner>
        <StyledDivConteiner>
          <Avatar fotoAvatar={perfil} nome={"Percival"} level={"front"}/>
          <InputDashBoard/>
          <h1>Posts</h1>
          <ListFollower/>
        </StyledDivConteiner>
        <StyledSuggestionConteiner>
          <StyledDivSuggestionConteiner>
            <h2>Sugestões de seguidores</h2>
            <ListFollowersSuggestion/>
          </StyledDivSuggestionConteiner>
        </StyledSuggestionConteiner>
      </StyledConteiner>
    </div>
  );
};
