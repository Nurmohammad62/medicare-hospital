import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../../firebase/initialize";
firebaseInitialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registrationUsingEmailPassword = (name, email, password) => {
        return ( createUserWithEmailAndPassword(auth, email, password)
        .catch(error => {
            setError(error.message);
        }) )
    }

    /* const setUserName = (name) => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => {})
    } */

    const loginUsingEmailPassword = (email, password) => {
        return (signInWithEmailAndPassword(auth, email, password)
        .catch(error => {
            setError(error.message);
        }) );
    }

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return (signInWithPopup(auth, googleProvider)
        
        .finally(()=> setIsLoading(false)) );
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        registrationUsingEmailPassword,
        loginUsingEmailPassword,
        logOut
    }
}

export default useFirebase;