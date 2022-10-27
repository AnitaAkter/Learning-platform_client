import React, { userContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import Loader from './Loader';


const PrivateRoute = ({ children }) => {
    const { user, loading } = userContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;