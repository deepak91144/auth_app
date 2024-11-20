import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import {
  getUsersDetails,
  isAuthenticated,
  storeLoggedInUser,
  storeUserDetails,
} from "../utils/localStorageUtils";
import "./Auth.css";
const Signup = () => {
  const [toogleLogin, setToogleLogin] = useState(false);

  const [userData, setUserData] = useState({
    userName: "",
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
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, []);

  const clearUserData = () => {
    setUserData({ userName: "", email: "", password: "" });
  };
  const isEmailExist = () => {
    const existingUsers = getUsersDetails();
    if (Array.isArray(existingUsers)) {
      const userExist = existingUsers.find((user) => {
        return userData.email === user.email;
      });
      console.log("userExist", userExist);

      if (userExist) {
        return true;
      }
    }
    return false;
  };

  const signUp = (e) => {
    e.preventDefault();
    if (isEmailExist()) {
      alert("Email already exist");
      return;
    }
    const existingUsers = getUsersDetails();
    if (Array.isArray(existingUsers)) {
      existingUsers.push(userData);
      storeUserDetails(existingUsers);
      storeLoggedInUser(userData);
    } else {
      const userDetails = [userData];
      storeUserDetails(userDetails);
      storeLoggedInUser(userData);
    }

    clearUserData();
    navigate("/dashboard");
  };
  const handleToggleLogin = () => {
    setToogleLogin(true);
  };
  return (
    <>
      <div className="mainContainer">
        {toogleLogin ? (
          <Login />
        ) : (
          <>
            <div className="signupContainer">
              <form onSubmit={signUp}>
                <div>
                  <input
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Enter Name"
                    name="userName"
                    value={userData.userName}
                    required={true}
                  />
                </div>
                <div>
                  <input
                    onChange={handleOnChange}
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={userData.email}
                    required={true}
                  />
                </div>
                <div>
                  <input
                    onChange={handleOnChange}
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={userData.password}
                    required={true}
                  />
                </div>
                <button type="submit" className="signupBtn">
                  Signup
                </button>
              </form>
              <button onClick={handleToggleLogin} className="LoginInstead">
                Login Instead
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Signup;
