import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loginSuccess } from '../../redux/loginReducer/loginAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PasswordResetComplete from './common/PasswordResetComplete';
import { fetchProfiles } from '../../redux/actions/ProfileAction';



const main_url = "http://127.0.0.1:8000/api/accounts/v1/user/password-reset-complete/";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirm_password: '',
            successMessage: '',
            errorMessage: '',
            isLoading: false,
            uidb64: '',
            token: ''
        }

    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('tk');
        const idb = urlParams.get('idb');
        this.setState({ token: token })
        this.setState({ uidb64: idb })
    }



    handleOnChange = (e) => {
        e.preventDefault();
        if (e.target.name === "password") {
            this.setState({ password: e.target.value })
        } else if (e.target.name === "confirm_password") {
            this.setState({ confirm_password: e.target.value })
        }


    }

    handlePasswordReset = async (e) => {
        e.preventDefault();
        this.setState({ isLoading: true });
        if (this.state.password !== this.state.confirm_password) {
            this.setState({ isLoading: false });
            this.setState({ errorMessage: 'Two Password field do not match' })
        } else {
            const req_param = {
                "password": this.state.confirm_password,
                "token": this.state.token,
                "uidb64": this.state.uidb64
            }
            console.log(req_param)
            try {
                const { data } = await axios.patch(main_url, req_param).then(res => {
                    console.log(res)
                    this.setState({ successMessage: res.data.message });
                    this.setState({ isLoading: false });
                }).catch(res => {
                    this.setState({errorMessage:"Unable to Proceed"})
                })
            } catch (e) {
                this.setState({ errorMessage: e.response?.data?.non_field_errors });
                this.setState({ isLoading: false });

            }
        }
    }

    render() {

        return (
            <div>
                {this.props?.token ? <Redirect to='/dashboard' /> :
                    <PasswordResetComplete props={this.state} handleChange={this.handleOnChange} handlePasswordReset={this.handlePasswordReset} />}
            </div>
        )
    }
}

export default Login;