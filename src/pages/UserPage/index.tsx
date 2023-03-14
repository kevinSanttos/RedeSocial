import { useContext, useState } from "react";
import { HeaderLogout } from "../../components/HeaderLogout";
import { PostsContext } from "../../contexts/PostsContext";
import { Main } from "./style";
import capaImg from "../../assets/CapaImg.jpg"
import { UserContext } from "../../contexts/UserContext";
import { AvatarFollower } from "../../components/AvatarFollower";
import { StyledDivFooterPost, StyledLisFollower } from "../../components/Posts/style";
import SemCurti from "../../assets/SemCurti.png";

export const UserPage = () => {
  const {users, user} = useContext(UserContext)
  const [modal, setModal] = useState(false)
  const {posts} = useContext(PostsContext)
    
  const openModal = (id: number) => {
    setModal(!modal)
   /*  modal && (<ModalPost id={id}></ModalPost>) */
  }

  return (
    <div>
      <HeaderLogout link={"/dashboard"} page={"Retornar o Feed"} />
      <Main>
        <div className="fotoCapa">
          <img src={user?.imgCapa} alt="" />

          <div className="fotoPerfil">
            <img src={user?.imgPerfil} alt="" />
          </div>
        </div>

        <section className="container">
          {

              
      posts ? (
        <StyledLisFollower>
          {posts.map((post) =>
            
             user && post.userId == user.id ? (
                <li>
                  <AvatarFollower
                    fotoAvatar={user.imgPerfil}
                    nome={user.name}
                    level={user.level}
                  />
                  <h2>{post.title}</h2>
                  <span>{post.description}</span>
                  <StyledDivFooterPost>
                    <button onClick={()=>openModal(post.id)}>Abrir Post</button>
                    <div>
                      <img src={SemCurti} alt="SemCurti" />
                      <span>0</span>
                    </div>
                  </StyledDivFooterPost>
                </li>
              ) : (
                <></>
              )
            )
          }
        </StyledLisFollower>
      ) : (
        <div>Sem posts</div>
      )}
           
            
          
        </section>
      </Main>
    </div>
  );
};
