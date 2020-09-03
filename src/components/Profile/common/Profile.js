import React, { useEffect } from "react";
import "./Profile.scss";
import { Link } from "react-router-dom";
import cover from "../../../images/image-cover.jpg";
import blankAvatarImage from "../../../images/blank-profile-picture-973460_1280.webp";

function ProfileView(props) {
  const { userProfile } = props;
  console.log(userProfile);
  return (
    <div className="profile">
      <div className="profile-image-section">
        <div className="card">
          <div className="card-body">
            <div className="cover">
              <img
                src="https://timelinecovers.pro/facebook-cover/download/photography-city-lights-facebook-cover.jpg"
                alt="image-cover"
              />

              <div className="profile-img">
                <img src={blankAvatarImage} alt="" />
              </div>
            </div>
            <div className="user-info">
              <h4>
                {userProfile?.user?.first_name || "Anjal"}{" "}
                {userProfile?.user?.last_name || "Bam"}
              </h4>
              <a href="#">
                {userProfile?.user?.profile?.education?.college ||
                  "Thapathali Campus"}{" "}
                3rd Sem
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
                <p>Faculty: {userProfile?.user?.profile?.education?.faculty}</p>
                <p>
                  University:{" "}
                  {userProfile?.user?.profile?.education?.university}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
