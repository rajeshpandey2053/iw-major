import React from 'react';
import {connect} from 'react-redux';

import Sidebar from '../Dashboard/Sidebar';
import ProfileView from './common/Profile';
import { Person } from '@material-ui/icons';

const Profile = (props) => {
    
    

    return (
        <div className="container dashboard-wrapper">
      <div className="row dashboard-content-wrapper">
          {/* Sidebar */}
          <div id="sidebar" className='col-md-3 col-3'>
              <Sidebar />
          </div>
          {/* Feed */}
          <div id="feed" className="col-md-9 col-9">
              <ProfileView />
          </div>
      </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}
export default connect(mapStateToProps)(Profile);