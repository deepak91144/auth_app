import React, { useEffect, useState } from "react";
import {
  getUsersDetails,
  isAuthenticated,
  storeLoggedInUser,
} from "../utils/localStorageUtils";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const login = (e) => {
    e.preventDefault();
    const allUsers = getUsersDetails();
    console.log("userExist", allUsers);

    if (allUsers) {
      const userExist = allUsers.filter((user) => {
        return (
          userData.email === user.email && userData.password === user.password
        );
      });
      if (userExist.length > 0) {
        storeLoggedInUser(userExist[0]);
        navigate("/dashboard");
      } else {
        alert("user does not exist");
      }
    } else {
      alert("user does not exist");
    }
  };
  return (
    <>
      <div className="loginFromCon">
        <form onSubmit={login}>
          <div>
            <input
              onChange={handleOnChange}
              type="email"
              placeholder="Enter Email"
              name="email"
              value={userData.email}
              required
            />
          </div>
          <div>
            <input
              onChange={handleOnChange}
              type="password"
              placeholder="Enter Password"
              name="password"
              value={userData.password}
              required
            />
          </div>
          <button type="submit" className="loginBtn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
