import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Todo from "../Components/Todo";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";

export default function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <Todo />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
