import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import RegisterService from "./Pages/RegisterService";
import "./Styles/app.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register-service" element={<RegisterService />} />
      {/* <Route exact path="/service-control" element={ <ServiceControl /> } /> */}
    </Routes>
  );
}

export default App;
