import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

// auth for use contex api
const useAuth = () => {
   return useContext(AuthContext);
}

export default useAuth;
