import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Service from "./Pages/Service";
import "./Styles/app.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/service" element={<Service />} />
      {/* <Route exact path="/service-control" element={ <ServiceControl /> } /> */}
    </Routes>
  );
}

export default App;
