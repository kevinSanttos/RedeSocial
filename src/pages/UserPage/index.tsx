import { useContext, useState } from "react";
import { HeaderLogout } from "../../components/HeaderLogout";
import { PostsContext } from "../../contexts/PostsContext";
import { Main } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { AvatarFollower } from "../../components/AvatarFollower";
import {
  StyledDivFooterPost,
  StyledLisFollower,
} from "../../components/Posts/style";
import SemCurti from "../../assets/SemCurti.png";
import { ModalPost } from "../../components/ModalPost";
import Curti from "../../assets/Curti.png"

export const UserPage = () => {
  const { user, following } = useContext(UserContext);
  const { posts, currentPost, deletePost  } = useContext(PostsContext);
  const {like, setLike,} = useContext(PostsContext)
  const [isLiked, setIsLIked] = useState(false)

  const likePost = () =>{
    setIsLIked(!isLiked)
    if(isLiked == false){
    setLike(like + 1)
    }else if(isLiked == true && like > 0){
      setLike(like - 1)
    }
  }

 const deletarPost = (idPost: number) => {
  deletePost(idPost)
 }

  return (
    <div>
      {currentPost && <ModalPost />}
      <HeaderLogout link={"/dashboard"} page={"Retornar o Feed"} />
      <Main>
        <div className="fotosPerfil">
          <img src={user?.imgCapa} alt="" className="capa" />
          <img src={user?.imgPerfil} alt="" className="perfil" />
        </div>
        <section className="container">
          <h2 className="h2">{user?.name}</h2>
          <span>Seguindo: {following}</span>
          <h1 className="h1">Minhas publicações</h1>
          {posts? (
            <StyledLisFollower>
              {posts.map((post) =>
                user && post.userId == user.id ? (
                  <li key={post.id}>
                  <AvatarFollower
                    fotoAvatar={user.imgPerfil}
                    nome={user.name}
                    profession={user.profession}
                  />
                  <h2>{post.title}</h2>
                  <span>{post.description}</span>
                  <StyledDivFooterPost>
                    <button onClick={()=> deletarPost(post.id)}>
                      Excluir Post
                    </button>
                   
                    <div>
                      <img onClick={likePost} src={isLiked ? Curti : SemCurti} alt="SemCurti" />
                      <span>{like}</span>
                    </div>
                  </StyledDivFooterPost>
                </li>
                ) : (
                  <></>
                )
              )}
            </StyledLisFollower>
          ) : (
            <h2>Sem posts</h2>
          )}
        </section>
      </Main>
    </div>
  );
};
