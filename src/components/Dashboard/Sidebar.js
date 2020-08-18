import React from "react";
import "./Sidebar.scss";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={PersonIcon} text="Profile" />
      {/* Sidebar option */}
      {/* Sidebar option */}
      {/* Sidebar option */}
      {/* Sidebar option */}
      {/* Sidebar option */}
    </div>
  );
}

export default Sidebar;
