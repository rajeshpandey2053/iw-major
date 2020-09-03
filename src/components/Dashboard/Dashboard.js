import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import "./dashboard.scss";
import "./Sidebar";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets/Widgets";
import PostDetail from "./PostDetail/PostDetail";
import Feed from "./Feed/Feed";
import { fetchPosts } from "../../redux/actions/PostAction";
import { fetchProfiles } from "../../redux/actions/ProfileAction";

const Dashboard = props => {
  const { fetchPosts, fetchProfiles } = props;
  const { postSlug } = useParams();
  useEffect(() => {
    fetchPosts("/api/posts/v1/post/list/");
    fetchProfiles();
  }, []);
  return (
    <div className="container dashboard-wrapper">
      <div className="row dashboard-content-wrapper">
        {/* Sidebar */}
        <div
          id="sidebar"
          className="col-xl-3 col-md-3 col-md-3 d-none d-md-block">
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
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: pageLink => dispatch(fetchPosts(pageLink)),
    fetchProfiles: () => dispatch(fetchProfiles()),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
