import { useContext, useState } from "react";
import { HeaderLogout } from "../../components/HeaderLogout";
import { PostsContext } from "../../contexts/PostsContext";
import { Main, StyledPostLi } from "./style";
import capaImg from "../../assets/CapaImg.jpg";
import { UserContext } from "../../contexts/UserContext";
import { AvatarFollower } from "../../components/AvatarFollower";
import {
  StyledDivFooterPost,
  StyledLisFollower,
} from "../../components/Posts/style";
import SemCurti from "../../assets/SemCurti.png";

export const UserPage = () => {
  const { users, user } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const { posts } = useContext(PostsContext);

  const openModal = (id: number) => {
    setModal(!modal);
    /*  modal && (<ModalPost id={id}></ModalPost>) */
  };

  return (
    <div>
      <HeaderLogout link={"/dashboard"} page={"Retornar o Feed"} />
      <Main>
        <div className="fotosPerfil">
          <img src={capaImg} alt="" className="capa" />
          <img src={user?.img} alt="" className="perfil" />
        </div>
        <section className="container">
          <h2 className="h2">{user?.name}</h2>
          <h1 className="h1">Minhas publicações</h1>
          {posts ? (
            <StyledLisFollower>
              {posts.map((post) =>
                user && post.userId == user.id ? (
                  <StyledPostLi>
                    <AvatarFollower
                      fotoAvatar={user.img}
                      nome={user.name}
                      profession={user.level}
                    />
                    <h2>{post.title}</h2>
                    <span>{post.description}</span>
                    <StyledDivFooterPost>
                      <button onClick={() => openModal(post.id)}>
                        Abrir Post
                      </button>
                      <div>
                        <img src={SemCurti} alt="SemCurti" />
                        <span>0</span>
                      </div>
                    </StyledDivFooterPost>
                  </StyledPostLi>
                ) : (
                  <></>
                )
              )}
            </StyledLisFollower>
          ) : (
            <div>Sem posts</div>
          )}
        </section>
      </Main>
    </div>
  );
};
