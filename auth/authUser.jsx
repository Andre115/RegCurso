import { Navigate } from "react-router-dom";
import React, { useContext } from 'react';
import { Context } from '../context/AuthContext';
import Loader from "../layouts/loader/Loader";


const ProtectedRoute= ({children})=>{
  const { authenticated, loading } = useContext(Context);

  if (loading) return <div>
    <Loader/>
    </div>;
  if (!authenticated) return <Navigate to="/login" />;

  return children;

};

  export default ProtectedRoute;