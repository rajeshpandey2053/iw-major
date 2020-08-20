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
            loading: false,
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
        try {
            const {data : {token}} = await axios.post(url, {email: this.state.email, password: this.state.password});
            console.log(token);
        } catch(e){

        }
    }

    render(){
        console.log(this.props);
        return <LoginView props={this.state} handleChange={this.handleOnChange} handleLogin={this.handleLogin}/>
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginSuccess: () => dispatch(loginSuccess())
    }
}

export default connect(mapStateToProps)(Login);