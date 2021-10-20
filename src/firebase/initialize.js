import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// firebase Initialization method
const firebaseInitialization = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;