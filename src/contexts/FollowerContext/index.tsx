import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {IDefaultProviderProps, IFollower, IFollowerContext} from "./@types";

export const followerContext = createContext({} as IFollowerContext);

export const FollowerProvider = ({ children }:IDefaultProviderProps ) => {
    const [followers, setFollowers] = useState<IFollower[] | null>(null)

    useEffect(()=>{
        const getAllFollower = async ()=>{
            try {
                const token = localStorage.getItem("@TOKEN")
                const response = await api.get("/follower" ,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setFollowers(response.data)  
            } catch (error) {
                console.log(error)
            }
        }
        getAllFollower()
    },[])


    const follow =  async (formData :IFollower)=>{
        try {
            const token = localStorage.getItem("@TOKEN")
            const response = await api.post("/follower" , formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setFollowers(response.data)  
        } catch (error) {
            console.log(error)
        }
    }

    const unfollow = async (idFollower: number)=>{
        try {
            const token = localStorage.getItem("@TOKEN")
            const response = await api.delete(`/comments/${idFollower}` , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const filterFollower = followers?.filter(follower => {
                follower.id !== idFollower
               })
               filterFollower && setFollowers(filterFollower)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <followerContext.Provider value={{follow, unfollow, followers}}>
            {children}
        </followerContext.Provider>
    )
}
