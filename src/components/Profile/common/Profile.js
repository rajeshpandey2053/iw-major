import React from "react";
import "./Profile.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import blankAvatarImage from "../../../images/blank-profile-picture-973460_1280.webp";
import logo from '../../../images/Logo143x32.svg';


function ProfileView({ profileData }) {
  // const { profile } = props;
  console.log(profileData);
  const userProfile = profileData.profiles;
  return (
    <div className="profile">
      <div className="profile-image-section">
        <div className="card">
          <div className="card-body">
            <div className="cover">
              <img
                src={logo}
                alt="image-cover"
              />

              <div className="profile-img">
                <img src={blankAvatarImage} alt="" />
              </div>
            </div>
            <div className="user-info">
              <h4>
                {userProfile?.user?.first_name || " "}
                {userProfile?.user?.last_name || ""}
              </h4>
              <a href="#">
                {userProfile?.user?.profile?.education?.semester || " "}
                Sem
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-about-section">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header about-header">About</div>
              <div className="card-body about-body">
                <p>
                  Semester: {userProfile?.user?.profile?.education?.semester}{" "}
                  Sem
                </p>
                <p>
                  Faculty: {userProfile?.user?.profile?.education?.faculty_name}
                </p>
                <p>
                  University:{" "}
                  {userProfile?.user?.profile?.education?.university_name}
                </p>
                <p>Books Posts: 12</p>
                <p>Notes Posts: 12</p>
                <hr />
                <div className="row follow">
                  <div className="col-md-6 followers">
                    <p>{userProfile?.followers}</p>
                    <p>Followers</p>
                  </div>
                  <div className="col-md-6 following">
                    <p>{userProfile?.following}</p>
                    <p>Following</p>
                  </div>
                </div>
                <hr />
                <Link to="/edit-profile">Edit Profile</Link>
                <div>
                  <Link to="/change/password">Change Password</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    profileData: state.profile,
  };
};

export default connect(mapStateToProps)(ProfileView);
