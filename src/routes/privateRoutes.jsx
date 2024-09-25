import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../services/authService";
import { isTokenValid } from "../utils/tokenUtils";

const PrivateRoute = ({ children }) => {
  const token = getToken();
  const isAuthenticated = token && isTokenValid(token);

  if (token && !isAuthenticated) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
