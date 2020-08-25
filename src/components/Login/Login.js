import React, {useState, useEffect} from 'react';
import LoginView from './common/login';
import axios from 'axios';
import {loginSuccess} from '../../redux/loginReducer/loginAction';
import {connect} from 'react-redux';


const url = 'http://127.0.0.1:8000/api/accounts/v1/login';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            errorMessage:'',
            isloading: false,
            successMessage:'',
        }

    }
    
    handleOnChange = (e) => {
        e.preventDefault();
        if (e.target.name === "email"){
            this.setState({email: e.target.value});
        } else {
            this.setState({password: e.target.value});
        }
    }

    handleLogin = async (e) => {
        e.preventDefault();
        this.setState({isloading: true});
        console.log(this.props)
        try {
            const {data : {token}} = await axios.post(url, {email: this.state.email, password: this.state.password}).then(res => {
                    this.setState({successMessage: "Login Success"});
                    localStorage.setItem('token', res.data.token);
                    this.props.loginSuccess(localStorage.getItem('token'));
                })
        } catch(e){
            this.setState({errorMessage: e.response?.data?.non_field_errors});
        }
    }

    render(){
        return <LoginView props={this.state} handleChange={this.handleOnChange} handleLogin={this.handleLogin}/>
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginSuccess: token => dispatch(loginSuccess(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);