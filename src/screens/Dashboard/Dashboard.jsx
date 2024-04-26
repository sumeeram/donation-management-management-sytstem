import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import SideBar from "../../share/side-bar/side-bar";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      // Replace API path here
      await axios.get("/ministry/leaves").then((res) => {
        setData(res.data);
      });
    })();
  }, []);

  return (
    <div className="app-container">
      <SideBar />
      <div className="p-4">
        <div className="tab-content active" id="dashboard">
          <h2>Welcome to Donation Management System</h2>
          <div className="flex-item">
            <h3 className="mt-5">Total Patients</h3>
            <p>1000</p>
          </div>
          <div className="flex-item">
            <h3>Total Donators</h3>
            <p>500</p>
          </div>
          <div className="flex-item">
            <h3>Pending Confirmation</h3>
            <p>500</p>
          </div>
          <div className="flex-item">
            <h3>Closed Donation</h3>
            <p>500</p>
          </div>
        </div>
        <div className="tab-content" id="patients">
          <h2>Patients</h2>
        </div>
        <div className="tab-content" id="donators">
          <h2>Donators</h2>
        </div>
        <div className="tab-content" id="reports">
          <h2>Reports</h2>
        </div>
        <div className="tab-content" id="donations">
          <h2>Donations</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
