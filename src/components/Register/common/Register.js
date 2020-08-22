import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import { Person, Lock, Email, AccountCircle, Phone, Home, School } from '@material-ui/icons';
import login from '../../../images/Login.svg';



function RegisterView(props) {

    return (
        <div className="content-wrapper">
            <div className='register-form-container'>
                <div className="register">
                    <form action="" className="register-form" onSubmit={props.handleSubmit} method="POST">
                        <h2 className="register-form__title">Register</h2>
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="register-form__input-field">
                                    <Person />
                                    <input type="text" placeholder="First Name" name="first_name" onChange={props.handleChange} className="first-name" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="register-form__input-field">
                                    <Person />
                                    <input type="text" placeholder="Last Name" name="last_name" onChange={props.handleChange} required/>
                                </div>
                            </div>
                            
                            <div className="col-md-12">
                                <div className="register-form__input-field">
                                    <Email />
                                    <input type="email" placeholder="Email" name="email" onChange={props.handleChange} required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="register-form__input-field">
                                    <AccountCircle />
                                    <input type="text" placeholder="Username" name="username" onChange={props.handleChange} required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="register-form__input-field">
                                    <Phone />
                                    <input type="number" placeholder="Contact Number" name="phone" onChange={props.handleChange} required/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="register-form__input-field">
                                    <Home />
                                    <input type="address" placeholder="Address" name="address" onChange={props.handleChange} required/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Semester</label>
                                <div className="register-form__input-field">
                                    <select id="" name="semester" onChange={props.handleChange} required>
                                        <option value="">-----</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label>Year</label>
                                <div className="register-form__input-field">
                                    <select id="" name="year" onChange={props.handleChange} required>
                                        <option value="">-----</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label>Faculty</label>
                                <div className="register-form__input-field">
                                    <select name="faculty" onChange={props.handleChange} id="" required>
                                        <option value="">-----</option>
                                        <option value="1">BBS</option>
                                        <option value="2">BBA</option>
                                        <option value="3">Bsc.CSIT</option>
                                        <option value="4">BCA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="register-form__input-field">
                                    <School />
                                    <input type="text" placeholder="College" name="college" onChange={props.handleChange} required/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="register-form__input-field">
                                    <School />
                                    <input type="text" placeholder="University" name="university" onChange={props.handleChange} required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="register-form__input-field">
                                    <Lock />
                                    <input type="password" placeholder="Password" name="password" onChange={props.handleChange} required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="register-form__input-field">
                                    <Lock />
                                    <input type="password" placeholder="Confirm Password" name="confirm_password" onChange={props.handleChange} required/>
                                </div>
                            </div>
                            <input type="submit" value="Register" className="btn solid"/>
                        </div>
                    </form>

                </div>
            </div>
            <div className="panel-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>HamroNotes</h3>
                        <p>Already become a Member?</p>
                        <Link to="/login"><button className="btn transparent" id="register-button">Log In</button></Link>
                    </div>
                    <img src={login} className="image" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default RegisterView;