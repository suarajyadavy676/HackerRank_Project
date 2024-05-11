import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./for-developrs/Content";
import Body from "../components/mainBody/Body";
import SignUp from "./SignUp";
import Login from "./Login";
import PrivateRoute from "../components/PrivateRoute";
import AccessAccount from "../components/AccessAccount";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Content />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/access-account" element={<AccessAccount/>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
