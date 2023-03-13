import { AvatarFollower } from "../AvatarFollower";
<<<<<<< HEAD
import perfil from "../../assets/perfil.jpg"
import SemCurti from "../../assets/SemCurti.png"
import {StyledLisFollower, StyledDivFooterPost} from "./style"

export const Posts = () => {
    return (
        <StyledLisFollower>
            <li>
                <AvatarFollower fotoAvatar={perfil} nome={"Percival"} level={"front"}/>
                <h2>Inteligencia Artificial</h2>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda 
                    repudiandae ipsa culpa similique consequuntur ab ad amet? In voluptates 
                    fugiat sed, mollitia dolor aut aliquam iusto, placeat molestiae, ut alias?
                </span>
                <StyledDivFooterPost>
                    <button>Abrir Post</button>
                    <div>
                        <img src={SemCurti} alt="SemCurti" />
                        <span>0</span>
                    </div>
                </StyledDivFooterPost>
            </li>
        </StyledLisFollower>
=======
import SemCurti from "../../assets/SemCurti.png"
import {StyledLisFollower, StyledDivFooterPost} from "./style"
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import { UserContext } from "../../contexts/UserContext";

export const Posts = () => {
    const {posts} = useContext(PostsContext)
    const {users} = useContext(UserContext)


    return (
        <>
            {
                posts ? (
                    <StyledLisFollower>
                        {
                            posts.map((post) =>(
                            
                                users?.map(user =>(
                                    post.userId == user.id ?
                                        <li>
                                            <AvatarFollower fotoAvatar={user.img} nome={user.name} level={user.level}/>
                                            <h2>{post.title}</h2>
                                            <span>
                                                {post.description}
                                            </span>
                                            <StyledDivFooterPost>
                                                <button>Abrir Post</button>
                                                <div>
                                                    <img src={SemCurti} alt="SemCurti" />
                                                    <span>0</span>
                                                </div>
                                            </StyledDivFooterPost>
                                        </li>
                                        :
                                        <></>
                                )
                                ))
                            )
                        }
                        
                    </StyledLisFollower>
                    ) : (
                        <div>Sem posts</div>
                    )
             }    
        </>
>>>>>>> 92cbc094993054b318309bfdd5ff95104266b467
    );
  };