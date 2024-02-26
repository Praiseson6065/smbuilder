
import useAuth from "../context/useAuth";

const Logout = () => {
    const logout = useAuth()
    
    logout();

    return ( <>
        Logged Out Successfully
    </> );
}
 
export default Logout;