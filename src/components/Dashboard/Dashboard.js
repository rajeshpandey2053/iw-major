import React, { useEffect } from "react";

import { connect } from "react-redux";
import "./dashboard.scss";
import "./Sidebar";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets/Widgets";
import { fetchPosts } from "../../redux/actions/PostAction";
import {
  fetchProfiles,
  fetchEducation,
} from "../../redux/actions/ProfileAction";

const Dashboard = (props) => {
  const {
    fetchPosts,
    fetchProfiles,
    fetchEducation,
    postData,
    profile,
  } = props;
  useEffect(() => {
    console.log(postData.length);
    if (postData.posts.length === 0) {
      fetchPosts("/api/posts/v1/post/list/");
    }
    if (profile.faculty.length === 0 && profile.university.length === 0) {
      fetchEducation();
    }
    fetchProfiles();
  }, []);
  return (
    <div className="container dashboard-wrapper">
      <div className="row dashboard-content-wrapper">
        {/* Sidebar */}
        <div
          id="sidebar"
          className="col-xl-3 col-md-3 col-md-3 d-none d-md-block"
        >
          <Sidebar />
        </div>
        {/* Feed */}
        <div id="feed" className="col-xl-6 col-lg-9 col-md-9">
          {props.children}
        </div>

        {/* Widgets */}
        {/*<div id="widgets" className="col-md-3 col-3 col=">*/}
        <div id="widgets" className="col-md-3 d-none d-xl-block">
          <Widgets />
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (pageLink) => dispatch(fetchPosts(pageLink)),
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchEducation: () => dispatch(fetchEducation()),
  };
};
const mapStateToProps = (state) => {
  return {
    postData: state.post,
    profile: state.profile,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
