import { Outlet } from "react-router-dom"
import { PostsProvider } from "../../contexts/PostsContext"

 export const PostProviderOutlet = ()=>{
    
    
    return(
        <PostsProvider>
            <Outlet/>
        </PostsProvider>
    )

 }