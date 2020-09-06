import React, { useState } from "react";
import "./Profile.scss";
import blankAvatarImage from "../../../images/blank-profile-picture-973460_1280.webp";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateProfiles } from "../../../redux/actions/ProfileAction";

const ProfileUpdateView = ({ profileData, updateProfiles }) => {
  const userProfile = profileData.profiles;
  const history = useHistory();
  const initialEducationState = {
    university: userProfile?.user?.profile?.education?.university || "",
    faculty: userProfile?.user?.profile?.education?.faculty || "",
    semester: userProfile?.user?.profile?.education?.semester || "",
    year: userProfile?.user?.profile?.education?.year || "",
    college: userProfile?.user?.profile?.education?.college || 1,
  };
  const initialProfile = {
    contact_number: userProfile?.user?.profile?.contact_number || "",
    address: userProfile?.user?.profile?.address || "",
  };
  const [profile, setProfile] = useState(initialProfile);
  const [education, setEducation] = useState(initialEducationState);
  const [userUpdate, setUserUpdate] = useState({
    username: userProfile?.user?.username || "",
    email: userProfile?.user?.email || "",
    first_name: userProfile?.user?.first_name || "",
    last_name: userProfile?.user?.last_name || "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUserUpdate({
      ...userUpdate,
      [name]: value,
    });
  };

  const handleEducationChange = event => {
    const { name, value } = event.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };
  const handleProfileChange = event => {
    const { name, value } = event.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    updateProfiles(userUpdate);
    history.goBack();
    console.log({ userUpdate });
  };

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
          <div className="col-md-4 col-12">
            <div className="card">
              <div className="card-header about-header">About</div>
              <div className="card-body about-body">
                <p>
                  Semester:{" "}
                  {userProfile?.user?.profile?.education?.semester || "2nd"}
                </p>
                <p>
                  Faculty:{" "}
                  {userProfile?.user?.profile?.education?.faculty ||
                    "Electronics"}
                </p>
                <p>
                  University:{" "}
                  {userProfile?.user?.profile?.education?.university ||
                    "Tribhuwan University"}
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
              </div>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="card">
              <div className="card-header">Update Profile</div>
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">First Name </label>
                        <input
                          type="text"
                          value={userUpdate.first_name}
                          name="first_name"
                          placeholder="First Name"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input
                          type="text"
                          value={userUpdate.last_name}
                          placeholder="Last Name"
                          name="last_name"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input
                      type="text"
                      value={userUpdate.username}
                      name="username"
                      placeholder="Username"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      value={userUpdate.email}
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Contact Number</label>
                    <input
                      type="number"
                      value={profile.contact_number}
                      placeholder="Contact Number"
                      name="contact_number"
                      className="form-control"
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">College Name</label>
                    <input
                      type="text"
                      value={education.college}
                      name="college"
                      placeholder="College Name"
                      className="form-control"
                      onChange={handleEducationChange}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-sm btn-primary float-right">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    profileData: state.profile,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateProfiles: profile => dispatch(updateProfiles(profile)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdateView);
