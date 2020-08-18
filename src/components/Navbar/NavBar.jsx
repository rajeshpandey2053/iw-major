import React from "react";
<<<<<<< HEAD
import './navbar.scss';
import {Link} from 'react-router-dom';
=======
import './navbar.scss'
import logo from '../../images/Logo143x32.svg'
import {Link} from "react-router-dom";
>>>>>>> ce66c0c0951d5d0242ba584a9bf30542f1775d51


const NavBar = () => {
    return (
<<<<<<< HEAD
        <div className="nav">
            <div className="container">
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </div>
        </div>
    )
=======
        <nav className='nav-main-wrapper'>
            <div className='navbar-container container'>
                <div>
                    <Link to="/"><img src={logo} alt='Logo' className="logo"/></Link>
                </div>

                {/*Links yet to be modified per use*/}

                <ul className="nav-bar-links">
                    <li className="link"><Link to="/dashboard">Home</Link></li>
                    <li className="link"><Link to="/">Blog</Link></li>
                    <li className="link"><Link to="/">Log In</Link></li>
                    <li className="link"><Link to="/">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    );
>>>>>>> ce66c0c0951d5d0242ba584a9bf30542f1775d51
}

export default NavBar;