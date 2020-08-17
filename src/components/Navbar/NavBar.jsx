import React from "react";
import './navbar.scss';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="nav">
            <div className="container">
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;