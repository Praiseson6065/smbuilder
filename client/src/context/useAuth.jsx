import { useContext } from "react";
import { AuthContext } from "./Authcontext";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;