import React, { useEffect, useState } from "react";
import "./Auth.css";
import {
  getLoggedInUser,
  removeLoggedInUser,
} from "../utils/localStorageUtils";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const user = getLoggedInUser();

    if (user) {
      setLoggedInUser(user);
    }
  }, []);
  const logout = () => {
    removeLoggedInUser();
    navigate("/");
  };
  return (
    <>
      <div className="dashboardContainer">
        <div>
          <div>Dashboard</div>
          <div>Welcome {loggedInUser?.userName} </div>
          <button onClick={logout} className="logoutBtn">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
