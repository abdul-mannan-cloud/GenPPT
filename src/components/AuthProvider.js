import {createContext, useContext, useEffect, useState} from "react";
import {auth} from "../services/firebase";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext(undefined);
export const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        const authObserver = auth.onAuthStateChanged((user)=>{
            // if(!user)
            //     navigate('/signin')
            setUser(user)
        })
        return ()=> authObserver();
    },[])

    return (
        <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}