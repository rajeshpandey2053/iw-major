import React from "react";
import "./dashboard.scss";
import "./Sidebar";
import Sidebar from "./Sidebar";
import Feed from "./Feed/Feed";
import Widgets from "./Widgets/Widgets";

const Dashboard = () => {
  return (
    <div className="container dashboard-wrapper">
      <div className="row dashboard-content-wrapper">
        {/* Sidebar */}
        <div id="sidebar" className="col-md-3 col-3">
          <Sidebar />
        </div>
        {/* Feed */}
        <div id="feed" className="col-md-6 col-6">
          <Feed />
        </div>

        {/* Widgets */}
        <div id="widgets" className="col-md-3 col-3">
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
