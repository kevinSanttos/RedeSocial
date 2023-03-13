import { useContext } from "react";
import { HeaderLogout } from "../../components/HeaderLogout";
import { PostsContext } from "../../contexts/PostsContext";
import { Main } from "./style";

export const UserPage = () => {
  const { postsUserLogado, posts } = useContext(PostsContext);
  return (
    <div>
      <HeaderLogout link={"/dashboard"} page={"Retornar o Feed"} />
      <Main>
        <div className="fotoCapa">
          <img src="" alt="" />
          <div className="fotoPerfil">
            <img src="../../assets/perfil.jpg" alt="" />
          </div>
        </div>
        <section className="container"></section>
      </Main>
    </div>
  );
};
