import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () =>{
        return signOut(auth)
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        });
        return () =>{
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        googleSignIn
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;