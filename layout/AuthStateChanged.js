import { useEffect, useState } from "react"
import firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../config/hooks/auth";

const AuthStateChanged = ({ children }) => {

    const auth = getAuth();
    const {setUser} = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false);
        })
        // eslint-disable-next-line
    }, []);

    if(loading){
        return <h1>Loading...</h1>
    }

  return children;
}

export default AuthStateChanged