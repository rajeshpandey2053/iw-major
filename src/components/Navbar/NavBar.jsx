import React from "react";
import './navbar.scss';
import {Link} from 'react-router-dom';
import logo from '../../images/Logo143x32.svg';
import {connect} from 'react-redux';


const NavBar = (props) => {
    console.log(props);
    return (
        <nav className='nav-main-wrapper'>
            <div className='navbar-container container'>
                <div>
                    <Link to="/"><img src={logo} alt='Logo' className="logo"/></Link>
                </div>

                {/*Links yet to be modified per use*/}

                <ul className="nav-bar-links">
                    <li className="link"><Link to="/dashboard">Home</Link></li>
                    <li className="link"><Link to="/">Blog</Link></li>
                    <li className="link"><Link to="/login">Log In</Link></li>
                    <li className="link"><Link to="/register">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(NavBar);