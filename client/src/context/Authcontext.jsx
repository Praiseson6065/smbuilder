import {createContext,useState,useEffect } from "react";

const AuthContext = createContext();
import PropTypes from 'prop-types';
import axios from "axios";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/user/profile", { withCredentials: true });
                const userData = response.data.user;
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData(); // Call the async function
    }, []);
    const login = (userData) => {
        setUser(userData);
    };
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthProvider, AuthContext };