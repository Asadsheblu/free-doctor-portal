import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
  } from "react-router-dom";
  import { signOut } from 'firebase/auth';
import auth from '../../../../firebase.init';
import useAdmin from '../../../../Hook/useAdmin';
import Loading from '../../SharedPage/Loading/Loading';
 
const RequireAdmin = ({children}) => {
   const [user,loading]=useAuthState(auth)
   const [admin,adminLOading]=useAdmin(user)
    let location = useLocation();
    if(loading || adminLOading){
        return <Loading />
    }
    if (!user || !admin) {  
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAdmin;