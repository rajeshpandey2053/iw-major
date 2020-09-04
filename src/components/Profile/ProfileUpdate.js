import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import ProfileUpdateView from "./common/ProfileUpdate";

const ProfileUpdate = () => {
  return (
    <div className="container dashboard-wrapper">
      <div className="row dashboard-content-wrapper">
        {/* Sidebar */}
        <div id="sidebar" className="col-md-3 col-3 d-none d-md-block">
          <Sidebar />
        </div>
        {/* Feed */}
        <div id="feed" className="col-md-9 col-12">
          <ProfileUpdateView />
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
