import React from "react";
import "./Patients.css";
import SideBar from "../../share/side-bar/side-bar";

const Patients = () => {
  return (
    <div className="app-container">
      <SideBar />
      <div className="p-4">Patients</div>
    </div>
  );
};

export default Patients;
