import React from "react";
import { Link } from "react-router-dom";
export default () => (
  <>
    <h1>Welcome!</h1>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/dashboard">Dashboard</Link>
  </>
);
