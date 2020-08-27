import React from 'react';
import './Profile.scss';
import cover from '../../../images/image-cover.jpg';


function ProfileView() {
    return (
        <div className="profile">
            <div className="profile-image-section">
                <div className="card">
                    <div className="card-body">
                        <div className="cover">
                            <img src="https://timelinecovers.pro/facebook-cover/download/photography-city-lights-facebook-cover.jpg" alt="image-cover" />
                            <div className="profile-img">
                                hi
                            </div>
                        </div>
                        <div className="user-info">
                            <h4>Rajesh Pudasaini</h4>
                            <a href="#">Madan Bhandari 3rd Sem</a>
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
                                <p>Semester: 3</p>
                                <p>Faculty: BBS</p>
                                <p>University: TU</p>
                                <p>Books Posts: 12</p>
                                <p>Notes Posts: 12</p>
                                <hr/>
                                <div className="row follow">
                                    <div className="col-md-6 followers">
                                        
                                        <p>500</p>
                                        <p>Followers</p>
                                       
                                    </div>
                                    <div className="col-md-6 following">
                                        <p>500</p>
                                        <p>Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileView;