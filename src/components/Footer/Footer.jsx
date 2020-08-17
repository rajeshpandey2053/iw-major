import React from "react";
import './footer.scss'
import logo from '../../images/Logo143x32.svg'
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-wrapper'>
                <Link to='/'>
                    <img src={logo} alt="Logo" className='footer-logo'/>
                </Link>
                <p>
                    copyright &copy; 2020
                </p>
            </div>
        </footer>
    )
}

export default Footer;
