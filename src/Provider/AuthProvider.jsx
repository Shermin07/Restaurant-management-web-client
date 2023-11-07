import {  createContext, useState } from "react";
import app from "../Firebase/firebase.init";
import { getAuth } from "firebase/auth";


export const auth = getAuth(app);
 export const AuthContext = createContext(null) ;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)


    const authInfo = {
        user,
        loading

    }
    return (
        <div>
         <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>  
        </div>
    );
};

export default AuthProvider;