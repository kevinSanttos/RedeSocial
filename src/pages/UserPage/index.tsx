import { useContext } from "react";
import { HeaderLogout } from "../../components/HeaderLogout";
import { PostsContext } from "../../contexts/PostsContext";
import { Main } from "./style";
import capaImg from "../../assets/CapaImg.jpg"
import perfilImg from "../../assets/perfil.jpg"
import { Posts } from "../../components/Posts";

export const UserPage = () => {

  const {postsUserLogado, posts} = useContext(PostsContext)
  return (
    <div>
        <HeaderLogout link={"/dashboard"} page={"Retorna ao Feed"}/>
      <Main>
        <div className="fotoCapa">
          <img src={capaImg} alt="" />

          <div className="fotoPerfil">
            <img src={perfilImg} alt="" />
          </div>
        </div>
        
        <section className="container">
        <h2 className="userName">Nome do Usuario</h2>
           <Posts/>
           <Posts/>
           <Posts/>
        </section>
      </Main>
    </div>
  );
};
