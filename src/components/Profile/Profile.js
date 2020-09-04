import React, { useEffect } from "react";
import Sidebar from "../Dashboard/Sidebar";
import ProfileView from "./common/Profile";
import { connect } from "react-redux";
import { fetchProfiles } from "../../redux/actions/ProfileAction";

const Profile = ({ fetchProfiles }) => {
  useEffect(() => {
    fetchProfiles();
  }, []);
  return (
    <div className="container dashboard-wrapper">
      <div className="row dashboard-content-wrapper">
        {/* Sidebar */}
        <div id="sidebar" className="col-md-3 col-3 d-none d-md-block">
          <Sidebar />
        </div>
        {/* Feed */}
        <div id="feed" className="col-md-9 col-12">
          <ProfileView />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfiles: () => dispatch(fetchProfiles()),
  };
};
export default connect(null, mapDispatchToProps)(Profile);
