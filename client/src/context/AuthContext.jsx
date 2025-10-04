import { useEffect, useState } from "react"
import { AuthContext } from "./useAuth"
import axiosInstance from "../utils/axiosInstance"

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    useEffect(()=>{
     const userInfo =async () => {
        try {
            const response =await axiosInstance.get('/api/users/me')
            setUser(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
            setUser(null)
        }
     }
     userInfo()
    },[])

    const login =async (userData) => {
        try {
            const response =await axiosInstance.post('/api/users/login',userData)
            console.log(response.data)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const register =async (userData) => {
        try {
            const response =await axiosInstance.post('/api/users/register',userData)
            console.log(response.data)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const logout =async () => {
        try {
            await axiosInstance.post('/api/users/logout')
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }
const value={user, login,register}
 return (
       <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
 )
}