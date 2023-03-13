import { useContext } from "react"
import { CommentsContext } from "../../contexts/CommentsContext"
import { PostsContext } from "../../contexts/PostsContext"
import { UserContext } from "../../contexts/UserContext"

interface IModal{
    id: number
}
export const ModalPost = ({id}:IModal) => {
    const {comments} = useContext(CommentsContext)
    const {posts} = useContext(PostsContext)
    const {users} = useContext(UserContext)
    return(
        <>
        {
            posts && posts.map((post) => (
                post.id == id? (
                    <div className="containerModal">
            <section className="conteudoPost">
               
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            </section>
            <section className="comentarios">
                    {
                        comments ? (
                            <ul>
                                 {comments.map((comment) => (
                                    comment.postId == post.id && (
                                    <li>
                                        {
                                            users?.map((user)=> (
                                                comment.userId == user.id? (
                                                    <h3>{user.name}</h3>
                                                ) : (null)
                                            ))
                                        }
                                       {comment.description}
                                    </li>)  
                                     
                                ))} 
                            </ul>
                        ) : (
                            <div>
                                Sem Comentários
                            </div>
                        )
                    }
            </section>
        </div>
                ) : (null)
            ))
        }
        
        </>
    )  
}