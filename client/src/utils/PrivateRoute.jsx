

import PropTypes from 'prop-types';
import { Navigate} from 'react-router-dom';
import useAuth from "../context/useAuth";

const PrivateRoute = ({children}) => {
    const useAuthhandler =useAuth() 
    const isLoading = useAuthhandler.isLoading
    if(isLoading)
    {
        return <p>Loading...</p>
    }
    const Isauthenticated = useAuthhandler.isauthenticated

    if (!Isauthenticated) {
        return <Navigate to="/login" replace />;
    }   
    else{
        return children;
    }
        
  };
  

PrivateRoute.propTypes = {
    children: PropTypes.elementType.isRequired,
    userType: PropTypes.elementType.isRequired,
};

export default PrivateRoute;