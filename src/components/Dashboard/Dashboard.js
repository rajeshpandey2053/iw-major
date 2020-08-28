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

const Dashboard = ({ fetchPosts, fetchProfiles }) => {
  const { postSlug } = useParams();
  useEffect(() => {
    fetchPosts("http://127.0.0.1:8000/api/posts/v1/post/list/");
    fetchProfiles();
  }, []);
  return (
    <div className="container dashboard-wrapper">
      <div className="row dashboard-content-wrapper">
        {/* Sidebar */}
        <div id="sidebar" className="col-md-3 col-3">
          <Sidebar />
        </div>
        {/* Feed */}
        <div id="feed" className="col-md-6 col-6">
          {postSlug ? <PostDetail /> : <Feed />}
        </div>

        {/* Widgets */}
        <div id="widgets" className="col-md-3 col-3">
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
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
