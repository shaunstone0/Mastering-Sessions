import React from "react";
import { Route } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Register from "../Register/Register";
import { AuthRoute, ProtectedRoute } from "../../util/Routing";
export default () => (
  <>
    <Route exact path="/" component={Welcome} />
    <AuthRoute path="/login" component={Login} />
    <AuthRoute path="/register" component={Register} />
    <ProtectedRoute path="/dashboard" component={Dashboard} />
  </>
);
