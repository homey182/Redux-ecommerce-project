import React from "react";
import { useSelector } from "react-redux";
import { Navigate, redirect } from "react-router-dom";

const AuthWrapper = (props) => {
  const { user } = useSelector((state) => state.userReducer);

  return user ? props.children : <Navigate to="/login" />;
};

export default AuthWrapper;
