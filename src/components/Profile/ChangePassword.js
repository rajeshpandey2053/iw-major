import React, { useEffect, useState } from "react";
import "./common/Profile.scss";
import axios from "axios";
import { connect } from "react-redux";
// import blankAvatarImage from "../../images/blank-profile-picture-973460_1280.webp";
import Sidebar from "../Dashboard/Sidebar";

const main_url = "http://127.0.0.1:8000/api/accounts/v1/user/profile";
const changePasswordURL =
  "http://127.0.0.1:8000/api/accounts/v1/user/change-password/";

function ChangePasswordView(props) {
  const [userProfile, setUserProfile] = useState(props.profiles);

  useEffect(() => {
    axios
      .get(main_url, {
        headers: {
          Authorization: `Token ${props.token}`,
        },
      })
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(error);
      });
  }, []);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "old_password") {
      setOldPassword(e.target.value);
    } else if (e.target.name === "new_password") {
      setNewPassword(e.target.value);
    } else if (e.target.name === "confirm_new_password") {
      setConfirmNewPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Two Password Didn't match");
    } else {
      const inputData = {
        old_password: oldPassword,
        new_password: newPassword,
      };
      const res = axios
        .put(changePasswordURL, inputData, {
          headers: {
            Authorization: `Token ${props.token}`,
          },
        })
        .then((res) => {
          setSuccessMessage(res.data.message);
        })
        .catch((e) => {
          setErrorMessage("Invalid Old Password");
        });
    }
  };

  return (
    <div className="container dashboard-wrapper">
      <div className="row dashboard-content-wrapper">
        {/* Sidebar */}
        <div id="sidebar" className="col-md-3 col-3">
          <Sidebar />
        </div>
        {/* Feed */}
        <div id="feed" className="col-md-9 col-9">
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
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="user-info">
                    <h4>
                      {userProfile?.user?.first_name}{" "}
                      {userProfile?.user?.last_name}
                    </h4>
                    <a href="#">
                      {userProfile?.user?.profile?.education?.college} 3rd Sem
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-about-section">
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header about-header">About</div>
                    <div className="card-body about-body">
                      <p>
                        Semester:{" "}
                        {userProfile?.user?.profile?.education?.semester}
                      </p>
                      <p>
                        Faculty:{" "}
                        {userProfile?.user?.profile?.education?.faculty_name}
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
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">
                      Change Password
                      <p className="text-danger">{errorMessage}</p>
                      <p className="text-success">{successMessage}</p>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">Old Password</label>
                              <input
                                type="password"
                                placeholder="old password"
                                name="old_password"
                                className="form-control"
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">New Password</label>
                              <input
                                type="password"
                                placeholder="new password"
                                name="new_password"
                                className="form-control"
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Confirm New Password</label>
                          <input
                            type="password"
                            placeholder="confirm new password"
                            name="confirm_new_password"
                            className="form-control"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary float-right"
                      >
                        Update
                      </button>
                    </form>
                  </div>
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
    token: state.login.token,
  };
};

export default connect(mapStateToProps)(ChangePasswordView);
