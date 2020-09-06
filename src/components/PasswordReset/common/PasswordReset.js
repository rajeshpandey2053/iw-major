import React from 'react';
import '../../Login/common/Login.scss';
import {Link} from 'react-router-dom';
import { Lock, AccountCircle, Facebook, GitHub } from '@material-ui/icons';
import login from '../../../images/Login.svg';
import { CircularProgress } from '@material-ui/core';



const PasswordResetView = (props) => {
    const {handleChange, handlePasswordReset} = props;
    return (
        <div className="div-container">
            <div className='form-container'>
                <div className="login">
                    <form action="" className="login-form" onSubmit={handlePasswordReset}>
                        <h2 className="login-form__title">Sign In</h2>
                        <p className="text-success">{props.props.successMessage}</p>
                        <p className="text-danger">{props.props.errorMessage}</p>

                        <div className="login-form__input-field">
                            <AccountCircle />
                            <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange}/>
                        </div>
                        <button className="btn btn-primary">{ props.props.isLoading ? <CircularProgress color="inherit" /> : 'Submit' }</button>
                    </form>

                </div>
            </div>
            <div className="panel-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>HamroNotes</h3>
                        <p>Difficult in Finding related Notes, Books...</p>
                        <Link to="/login"><button className="btn transparent" id="register-button">Login</button></Link>
                    </div>
                    <img src={login} className="image" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default PasswordResetView;