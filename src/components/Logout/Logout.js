import React, {useEffect} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import {logout} from '../../redux/loginReducer/loginAction';
import {connect} from 'react-redux';

const logoutUrl = 'http://127.0.0.1:8000/api/accounts/v1/user/logout'

function Logout(props){
    const {token} = props;
    useEffect(() => {
        axios.delete(logoutUrl, {headers: {
            Authorization: `Token ${token}`,
          }})
          .then(res => {
                localStorage.removeItem('token');
                props.logout();
          })
    })

    return (
        <div>
            <Redirect to='/login' />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.login.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () =>  dispatch(logout())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);