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

    // function for registration a new user with email and password
    const registrationUsingEmailPassword = (name, email, password) => {
        return ( createUserWithEmailAndPassword(auth, email, password)
        .catch(error => {
            setError(error.message);
        }) )
    }

    // function for login with email and password
    const loginUsingEmailPassword = (email, password) => {
        return (signInWithEmailAndPassword(auth, email, password)
        .catch(error => {
            setError(error.message);
        }) );
    }

    // function for login with google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return (signInWithPopup(auth, googleProvider)
        
        .finally(()=> setIsLoading(false)) );
    }

    // Auth state change for reset user state
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

    // Logout method for logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false))
    }

    // return all needed state variables and methods
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