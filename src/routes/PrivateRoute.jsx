import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/localStorageUtils";

const PrivateRoute = ({ Component }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;
