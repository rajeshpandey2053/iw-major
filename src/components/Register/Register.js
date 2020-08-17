import React from 'react';
import './Register.scss';
import { Person, Lock, Email,  AccountCircle, Phone, Home, School } from '@material-ui/icons';



function Register(){
    return (
        <div className="container">
            <div className='register-form-container'>
                <div className="register">
                    <form action="" className="register-form">
                        <h2 className="register-form__title">Register</h2>
                        <div className="row">
                        <div className="col-md-6">
                                <div className="register-form__input-field">
                                    <Person />
                                    <input type="text" placeholder="First Name" className="first-name"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="register-form__input-field">
                                    <Person />
                                    <input type="text" placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="register-form__input-field">
                                    <AccountCircle />
                                    <input type="text" placeholder="Username"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="register-form__input-field">
                                    <Email />
                                    <input type="email" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="register-form__input-field">
                                    <Phone />
                                    <input type="number" placeholder="Contact Number"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="register-form__input-field">
                                    <Home />
                                    <input type="email" placeholder="Address"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Semester</label>
                                <div className="register-form__input-field">
                                    <select name="" id="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label>Year</label>
                                <div className="register-form__input-field">
                                    <select name="" id="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                 <label>Faculty</label>
                                <div className="register-form__input-field">
                                    <select name="" id="">
                                        <option value="1">BBS</option>
                                        <option value="2">BBA</option>
                                        <option value="3">Bsc.CSIT</option>
                                        <option value="4">BCA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="register-form__input-field">
                                    <School />
                                    <input type="text" placeholder="College"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="register-form__input-field">
                                    <School />
                                    <input type="text" placeholder="University"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="register-form__input-field">
                                    <Lock />
                                    <input type="password" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="register-form__input-field">
                                    <Lock />
                                    <input type="password" placeholder="Confirm Password"/>
                                </div>
                            </div>
                            <input type="submit" value="Register" className="btn solid"/>  
                        </div>                     
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Register;