/* eslint-disable no-unreachable */
import {  createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const auth = getAuth(app);
 export const AuthContext = createContext(null) ;
 const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    //signup
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true);

     }

     //onAuthStateChange
     useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
              console.log('User in the auth state changed', currentUser),
              setUser(currentUser);
              setLoading(false);
          })
          return() =>{
              unsubscribe() ;
          }
       },[])

  // signIn
  const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
 }
 // logout
 const logOut = () =>{
    return signOut(auth)
    setLoading(true);
 }
 // sign in with google
 const signInWithGoogle =() =>{
    setLoading(true)
    return signInWithPopup(auth,provider);
 }



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle

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