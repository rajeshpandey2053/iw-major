import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Sidebar from '../Dashboard/Sidebar';
import ProfileUpdateView from './common/ProfileUpdate';
import { Person } from '@material-ui/icons';
import { fetchProfiles } from '../../redux/actions/ProfileAction';


const main_url = "http://127.0.0.1:8000/api/accounts/v1/user/profile"

const ProfileUpdate = (props) => {
    const [userProfile, setUserProfile] = useState({});
    const [userUpdate, setUserUpdate] = useState({});
    const [firstName, setFirstName] = useState("")
    useEffect(() => {
        axios.get(main_url, {
            headers: {
                Authorization: `Token ${props.token}`,
            },
        })
            .then((response) => {
                setUserProfile(response.data);
                setUserUpdate(userProfile);
            })
            .catch((error) => {
                const errorMsg = error.message;
                console.log(error);
            });
    },[])
    const handleFirstName = (event) => {
    setFirstName(event.target.value)}
    
    const handleUpdate = (e) => {
        console.log(e)
    }

    const handleChange = (e) => {
        console.log(userUpdate)
        console.log(e.target.name)
        const name = e.target.name;
        setuserUpdate(...userUpdate, user: );
    }
    return (
        <div className="container dashboard-wrapper">
            <div className="row dashboard-content-wrapper">
                {/* Sidebar */}
                <div id="sidebar" className='col-md-3 col-3'>
                    <Sidebar />
                </div>
                {/* Feed */}
                <div id="feed" className="col-md-9 col-9">
                    <ProfileUpdateView userProfile={userProfile} firstName = {firstName} handleFirstName = {handleFirstName} handleChange={handleChange} handleUpdate={handleUpdate}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.login.token,
        profiles: state.profile.profiles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProfiles: (token) => dispatch(fetchProfiles(token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);