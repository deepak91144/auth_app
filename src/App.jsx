import React from "react";
import Signup from "./component/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Signup />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute Component={Dashboard} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
