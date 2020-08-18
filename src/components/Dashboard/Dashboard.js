import React from "react";
import "./dashboard.scss";
import "./Sidebar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashbaord">
      <h1>This is a Dashboard</h1>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}

      {/* Widgets */}
    </div>
  );
};

export default Dashboard;
