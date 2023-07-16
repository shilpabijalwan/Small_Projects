import React from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import Login from "../Pages/Login";

export default function PrivateRoute({ children }) {
  const isauth = useSelector((store) => {
    return store.auth.auth;
  });
  console.log(isauth);
  if (isauth) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
