import React, { useEffect } from 'react';
import './Profile.scss';
import { Link } from 'react-router-dom';
import cover from '../../../images/image-cover.jpg';
import blankAvatarImage from "../../../images/blank-profile-picture-973460_1280.webp";



function ProfileUpdateView(props) {
    const { userProfile, handleChange, handleUpdate } = props;
    console.log(userProfile)
    
    return (
        <div className="profile">
            <div className="profile-image-section">
                <div className="card">
                    <div className="card-body">
                        <div className="cover">
                            <img src="https://timelinecovers.pro/facebook-cover/download/photography-city-lights-facebook-cover.jpg" alt="image-cover" />
                            <div className="profile-img">
                                <img src={blankAvatarImage} alt=""/>
                            </div>
                        </div>
                        <div className="user-info">
                            <h4>{userProfile?.user?.first_name} {userProfile?.user?.last_name}</h4>
                            <a href="#">{userProfile?.user?.profile?.education?.college} 3rd Sem</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-about-section">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header about-header">
                                About
                        </div>
                            <div className="card-body about-body">
                                <p>Semester: {userProfile?.user?.profile?.education?.semester}</p>
                                <p>Faculty: {userProfile?.user?.profile?.education?.faculty}</p>
                                <p>University: {userProfile?.user?.profile?.education?.university}</p>
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
                                Update Profile
                            </div>
                            <form onSubmit={handleUpdate}>
                                <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">First Name </label>
                                            <input type="text" value={userProfile?.user?.first_name || ''} placeholder="First Name" className="form-control" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" value={userProfile?.user?.last_name || ''} placeholder="Last Name" className="form-control" onChange={handleChange}  />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Username</label>
                                    <input type="text" value={userProfile?.user?.username || ''} placeholder="Username" className="form-control" onChange={handleChange} />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="text" value={userProfile?.user?.email || ''} placeholder="Email" className="form-control" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Contact Number</label>
                                    <input type="number" value={userProfile?.user?.profile?.contact_number || ''} placeholder="Contact Number" className="form-control" 
                                    onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">College Name</label>
                                    <input type="text" value={userProfile?.user?.profile?.education?.college || ''} placeholder="College Name" 
                                    className="form-control" onChange={handleChange} />
                                </div>
                                </div>
                            </form>
                            <button type="submit" className="btn btn-sm btn-primary float-right">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUpdateView;