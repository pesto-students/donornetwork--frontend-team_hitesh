import React from "react";
import { Route, Navigate } from "react-router-dom";

export  const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token');
    return isAuthenticated ? children : <Navigate to="/loginbtn" />;
  };
 