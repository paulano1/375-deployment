
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import React from "react";

function RequireAuth({ children }: { children:JSX.Element }) {
  const { currentUser } = useContext(AuthContext)
  let location = useLocation()

  if (!currentUser) {
    return <Navigate to="/" state={ { from: location } } replace />;
  }

  return children;
}

export default RequireAuth
