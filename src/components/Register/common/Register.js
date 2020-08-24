import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import { Person, Lock, Email, AccountCircle, Phone, Home, School } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';
import login from '../../../images/Login.svg';



function RegisterView(props) {
    const {errorMessage, successMessage, isLoading, universityList, facultyUrl} = props;
    const renderObject = () => {
        return Object.keys(errorMessage).map((key, value)=> {
            return (
                <div key={key} className="col-md-12">
                    <p className="text-danger">{errorMessage[key][0]}</p>
                </div>
            )
        })
    }
    return (
        <div className="content-wrapper">
            <div className='register-form-container'>
                <div className="register">
                    <form action="" className="register-form" onSubmit={props.handleSubmit} method="POST">
                        <h2 className="register-form__title">Register</h2>
                        <div className="row">
                            <p className="text-success">{successMessage}</p>
                            {renderObject()}
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
                                    <input type="text" placeholder="Address" name="address" onChange={props.handleChange} required/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Semester</label>
                                <div className="register-form__input-field">
                                    
                                    <input type="number" name="semester" placeholder="Sem" onChange={props.handleChange} className="small-input"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label>Year</label>
                                <div className="register-form__input-field">
                                    <input type="number" name="year" placeholder="Year" onChange={props.handleChange} className="small-input"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label>Faculty</label>
                                <div className="register-form__input-field">
                                    <select name="faculty" onChange={props.handleChange} id="" required>
                                    <option value="">Select Faculty</option>
                                    {facultyUrl?.map((res, key) => {
                                        return <option key={key} value={res.id}>{`${res.faculty_name}(${res.fac_short_form})` }</option>

                                    })}
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
                                <select name="university" onChange={props.handleChange} id="university-select" required>
                                    <option value="">Select University</option>
                                    {universityList?.map((res, key) => {
                                        return <option key={key} value={res.id}>{`${res.university_name}(${res.uni_short_form})` }</option>

                                    })}
                                        
                                    </select>
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
                            <button className="btn btn-primary">{ isLoading ? <CircularProgress color="inherit" /> : 'Register' }</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className="panel-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>HamroNotes</h3>
                        <p>Already become a Member?</p>
                        <Link to="/login"><button className="btn transparent" id="register-button">
                            Log In
                            </button></Link>
                    </div>
                    <img src={login} className="image" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default RegisterView;