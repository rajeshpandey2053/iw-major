import React, { useEffect } from "react";
import Sidebar from "../Dashboard/Sidebar";
import ProfileView from "./common/Profile";
import ViewProfile from "./common/ViewProfile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProfiles } from "../../redux/actions/ProfileAction";

const Profile = ({ fetchProfiles }) => {
  let params = useParams();
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
          {params.id ? <ViewProfile id={params.id} /> : <ProfileView />}
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
