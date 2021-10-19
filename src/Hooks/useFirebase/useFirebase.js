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

    const setUserName = (name) => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => {})
    }

    const registrationUsingEmailPassword = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
            setUserName(name);
            console.log(result.user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const loginUsingEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
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