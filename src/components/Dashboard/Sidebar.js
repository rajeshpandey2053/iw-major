import React from "react";
import "./Sidebar.scss";

import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  const activeStyle = {
    color: "#6600fc",
  };
  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <NavLink to="/dashboard" activeStyle={activeStyle}>
          <SidebarOption Icon={HomeIcon} text="Home" />
        </NavLink>

        <NavLink to="/explore" activeStyle={activeStyle}>
          <SidebarOption Icon={SearchIcon} text="Explore" />
        </NavLink>

        <NavLink to="/dashboard" activeStyle={activeStyle}>
          <SidebarOption Icon={NotificationsIcon} text="Notifications" />
        </NavLink>

        <NavLink to="/profile" activeStyle={activeStyle}>
          <SidebarOption Icon={PersonIcon} text="Profile" />
        </NavLink>
      </div>
      <div className="sidebar-footer">
        <p>
          <Link to="/">HamroNote</Link> &copy; 2020
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
