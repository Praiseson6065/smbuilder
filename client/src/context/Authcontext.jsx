import {createContext,useState,useEffect } from "react";

const AuthContext = createContext();
import PropTypes from 'prop-types';
import axios from "axios";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isauthenticated,setIsauthenticated] = useState(false)
    const [isLoading,setIsloading] =useState(true);
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/user/profile", { withCredentials: true });
                const userData = response.data.user;
                setUser(userData);
                userData ? setIsauthenticated(true) : setIsauthenticated(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setIsauthenticated(false);
            }finally{
                setIsloading(false);
            }
        };

        fetchData();
        // console.log("fetch",user,isauthenticated)
    }, []);
    const login = (userData) => {
        setUser(userData);
        setIsauthenticated(true);
        // console.log("Login",userData,user,isauthenticated)
    };
    const logout = () => {
        setUser(null);
        setIsauthenticated(false);
        // console.log("Logout",user,isauthenticated)
        // document.cookie = " token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    };
    const authContextValue ={
         user, login, logout ,isauthenticated,isLoading

    }
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthProvider, AuthContext };