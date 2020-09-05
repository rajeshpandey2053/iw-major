import React, { useState, useEffect } from "react";
import "./ViewProfile.scss";
import { connect } from "react-redux";
import Axios from "../../../utils/axios";
import blankAvatarImage from "../../../images/blank-profile-picture-973460_1280.webp";

function ViewProfile({ profileData, id }) {
  const [userProfile, setUserProfile] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    Axios.get(`/api/accounts/v1/user/profile/${id}`)
      .then((response) => {
        const profileData = response.data;
        setUserProfile(profileData);
        console.log(profileData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFollowButton = (event) => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      const formData = new FormData();
      formData.append("follow_to", id);
      formData.append("follow_by", null);
      Axios.post("/api/accounts/v1/user/follow/detail", formData)
        .then((response) => {
          const profileData = response.data;
          setUserProfile(profileData);
          console.log(profileData);
        })
        .catch((error) => {
          console.log(error);
        });
      //   setLikesCount(likesCount + 1);
      //   likedPosts(post?.post_slug, post?.id, "like");
    }
  };
  // const { profile } = props;
  //   console.log(profileData);
  //   const userProfile = profileData.profiles;
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
                <div>
                  <button
                    type="submit"
                    onClick={handleFollowButton}
                    className="post-button"
                  >
                    {!isLiked ? <>Follow</> : <>Followed</>}
                  </button>
                </div>
                {/* <Link to="/edit-profile">Edit Profile</Link> */}
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

export default connect(mapStateToProps)(ViewProfile);
