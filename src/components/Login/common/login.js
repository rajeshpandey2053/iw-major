import React from 'react';
import './Login.scss';
import {Link} from 'react-router-dom';
import { Lock, AccountCircle, Facebook, GitHub } from '@material-ui/icons';
import login from '../../../images/Login.svg';
import { CircularProgress } from '@material-ui/core';



const LoginView = (props) => {
    const {handleChange, handleLogin, props:{ errorMessage, successMessage, isLoading }} = props;
    console.log(errorMessage);
    return (
        <div className="div-container">
            <div className='form-container'>
                <div className="login">
                    <form action="" className="login-form" onSubmit={handleLogin}>
                        <h2 className="login-form__title">Sign In</h2>
                        <p className="text-success">{successMessage}</p>
                        <p className="text-danger">{errorMessage}</p>

                        <div className="login-form__input-field">
                            <AccountCircle />
                            <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
                        </div>
                        <div className="login-form__input-field">
                            <Lock />
                            <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                        </div>
                        <button className="btn btn-primary">{ isLoading ? <CircularProgress color="inherit" /> : 'Login' }</button>
                        <p className="social-text">or Login with social platforms</p>
                        <div className="login-form__social-media-icons">
                            <a href="/" className="social-icon"><Facebook /></a>
                            <a href="/" className="social-icon"><GitHub /></a>
                        </div>
                    </form>

                </div>
            </div>
            <div className="panel-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>HamroNotes</h3>
                        <p>Difficult in Finding related Notes, Books...</p>
                        <Link to="/register"><button className="btn transparent" id="register-button">Sign Up</button></Link>
                    </div>
                    <img src={login} className="image" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default LoginView;