// Remove the unused import statement for React
// import React from 'react';

import PropTypes from 'prop-types';
import { Navigate} from 'react-router-dom';
import useAuth from "../context//useAuth";

const PrivateRoute = ({children}) => {
    const  user  = useAuth();
    if (user.user==null) {
        return <Navigate to="/login" replace />;
    }
    // else if(userType=="user"){
    //     return <Navigate to="/" replace/>
    // }
        return children;
  };
  

PrivateRoute.propTypes = {
    children: PropTypes.elementType.isRequired,
    userType: PropTypes.elementType.isRequired,
};

export default PrivateRoute;