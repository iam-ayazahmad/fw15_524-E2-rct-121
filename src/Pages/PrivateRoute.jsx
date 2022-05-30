import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export const PrivateRoute=({children})=>{

    const {isAuth}=useContext(AuthContext)

    // if(isAuth==false)
    // {
    //     return<Navigate to="/register/one"/>
    // }

    // else{
        return(
            {children}
        )
    // }


    
}