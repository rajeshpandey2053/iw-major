import React from "react";
import "./Sidebar.scss";


import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";

import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-links">
                <Link to="/dashboard">
                    <SidebarOption active Icon={HomeIcon} text="Home"/>
                </Link>

                <Link to="/dashboard">
                    <SidebarOption Icon={SearchIcon} text="Explore"/>
                </Link>

                <Link to="/dashboard">
                    <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
                </Link>

                <Link to="/profile">
                    <SidebarOption Icon={PersonIcon} text="Profile"/>
                </Link>
            </div>
            <div className="sidebar-footer">
                <p>
                    <a href="/">HamroNote</a> &copy; 2020
                </p>
            </div>
        </div>
    );
}

export default Sidebar;
