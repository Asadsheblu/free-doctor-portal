import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
  } from "react-router-dom";
import auth from '../../../../firebase.init';
import Loading from '../../SharedPage/Loading/Loading';
 
const RequireAuth = ({children}) => {
   const [user,loading]=useAuthState(auth)
    let location = useLocation();
    if(loading){
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;