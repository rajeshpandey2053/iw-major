import React from "react";
import "./widget.scss";
import blankProfileImage from "../../../images/blank-profile-picture-973460_1280.webp";
import WidgetBlog from "./WidgetBlog/WidgetBlog";
import { connect } from "react-redux";

const Widgets = ({ profileData }) => {
  // console.log(profileData);
  let profile = profileData.profiles.user;
  return (
    <div className="widget-wrapper">
      <div className="info">
        <img className="info__avatar" src={blankProfileImage} alt="Avatar" />
        <h6 className="info__full-name">{profile?.username}</h6>
        <h6 className="info__username">{profile?.email}</h6>
        <p className="info__bio">Keep Coding...</p>
      </div>
      <div className="widget-wrapper__blog-section">
        <div className="widget-wrapper__blog-section__title">
          <h2>Latest Blogs</h2>
        </div>
        <WidgetBlog />
        <WidgetBlog />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    profileData: state.profile,
  };
};

export default connect(mapStateToProps)(Widgets);
