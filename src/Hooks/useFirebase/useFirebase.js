import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../../firebase/initialize";
firebaseInitialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    /* const registrationUsingEmailPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    } */

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                console.log('from login component', user);
                setUser(user);
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;