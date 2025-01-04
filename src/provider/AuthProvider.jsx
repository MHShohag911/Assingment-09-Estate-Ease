import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.console';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Creating User With Email and Password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User With Email and Password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with Google Popup
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithTwitter = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider)
    }

    // User Sign Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('User in the auth state changed', currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    })

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        signInWithGoogle,
        signInWithTwitter
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;