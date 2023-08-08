import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAuth} from "../components/AuthProvider";
import {auth} from "../services/firebase";
export const Dashboard = () => {

    const user = useAuth();
    const navigate = useNavigate()

    return (
        <>
            {
                user && <button
                    onClick={()=>{auth.signOut()}}
                >Logout, {user.uid}</button>
            }
        </>
    )
}
