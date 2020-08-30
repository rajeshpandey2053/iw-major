import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {loginSuccess} from '../../redux/loginReducer/loginAction';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PasswordReset from './common/PasswordReset';
import {fetchProfiles} from '../../redux/actions/ProfileAction';



const main_url = "http://127.0.0.1:8000/api/accounts/v1/user/request-reset-password/";


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            successMessage:'',
            errorMessage:'',
            isLoading: false,
        }

    }
    
    handleOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        if (e.target.name === "email"){
            this.setState({email: e.target.value});
        }
    }

    handlePasswordReset = async (e) => {
        e.preventDefault();
        this.setState({isLoading: true});
        console.log(e.target.value);
        try {
            const {data} = await axios.post(main_url, {email: this.state.email}).then(res => {
                    this.setState({successMessage: res.data.success});
                    this.setState({isLoading: false});
                })
        } catch(e){
            this.setState({errorMessage: e.response?.data?.non_field_errors});
            this.setState({isLoading: false});

        }
    }

    render(){
        return (
            <div>
            { this.props?.token ? <Redirect to='/dashboard' />:
            <PasswordReset props={this.state} handleChange={this.handleOnChange} handlePasswordReset={this.handlePasswordReset}/> }
            </div>
        )
    }
}

export default Login;