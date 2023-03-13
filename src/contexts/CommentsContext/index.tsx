import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ICommentsContext ,IDefaultProviderProps, IComment} from "./@types";


export const CommentsContext = createContext({} as ICommentsContext);

export const CommentsProvider = ({ children }:IDefaultProviderProps ) => {
    const [comments , setComments] = useState<IComment[] | null>(null)

    useEffect(()=>{
        const getAllComments = async ()=>{
            try {
                const token = localStorage.getItem("@TOKEN")
                const response = await api.get("/comments" ,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setComments(response.data)
            } catch (error) {
                console.log(error)
            }

        }
        getAllComments()
    },[])

    const createComments = async (formData :IComment)=>{
        try {
            const token = localStorage.getItem("@TOKEN")
            const response = await api.post("/comments" , formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setComments(response.data) 
        } catch (error) {
            console.log(error)
        }
    }

    const updateComments = async (formData : IComment, idComments:number)=>{
        try {
            const token = localStorage.getItem("@TOKEN")
            const response = await api.post(`/comments/${idComments}` , formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newComments = comments?.map((comment)=> {
                if(comment.id === idComments){
                    return {
                        ...comments, ...formData
                    }
                }
                else{
                    return comment
                }
            })
            newComments && setComments(newComments)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteComments = async (idComments :number)=>{
        try {
            const token = localStorage.getItem("@TOKEN")
            const response = await api.delete(`/comments/${idComments}` , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const filterComments = comments?.filter(comment => {
                comment.id !== idComments
               })
               filterComments && setComments(filterComments)
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <CommentsContext.Provider value={{createComments, deleteComments, updateComments, comments}}>
            {children}
        </CommentsContext.Provider>
    )

}