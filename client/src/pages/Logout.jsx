import  { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const Logout = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);
  const useAuthHandler = useAuth()
  const logout = async () => {
    try {
      // Make a logout API call
      await axios.get("http://localhost:4000/logout", { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      useAuthHandler.logout();
      logout();
    }
  }, [timer, logout]);

  return (
    <div>
      <p>Logging out...</p>
      <p>Redirecting in {timer} seconds</p>
    </div>
  );
};

export default Logout;