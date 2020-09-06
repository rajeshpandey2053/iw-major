import React from "react";
import './home.scss'
import { Link } from 'react-router-dom';
import login from '../../images/Login.svg';
import book from '../../images/book.svg';
import learnOnline from '../../images/learn-online.svg';
import team1 from '../../images/team1.jpg';
import team2 from '../../images/team2.png';
import team3 from '../../images/team3.png';
import team4 from '../../images/team4.png';

const Home = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('tk');
    console.log("hi")
    return (
        <div>
            <header id="header" className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="text-container">
                                    <h1><span className="turquoise">HAMRO</span> NOTE</h1>
                                    <p className="p-large">Register Now to enjoy the all books and notes to clear out your semester or 
                                    final exam for free using old books and notes shared by our colleagues</p>
                                    <Link to='/register' className="btn-solid-lg page-scroll" href="#services">REGISTER</Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-container">
                                    <img className="img-fluid" src={login} alt="alternative" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="services" className="cards-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Hamro Note</h3>
                            <p className="p-heading p-large">Find the best quality notes from your seniors or teachers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src={book} alt="alternative" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Design And Plan Your Business Growth Steps</h2>
                                <p>Use our staff and our expertise to design and plan your business growth strategy. Evolo team is eager to advise you on the best opportunities that you should look into</p>
                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="basic-2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Search For Optimization Wherever Is Possible</h2>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body">Basically we'll teach you step by step what you need to do</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body">In order to develop your company and reach new heights</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i>
                                        <div className="media-body">Everyone will be pleased from stakeholders to employees</div>
                                    </li>
                                </ul>
                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src={learnOnline} alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="basic-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>About The Team</h2>
                            <p className="p-heading p-large">Meat our team of specialized marketers and business developers which will help you research new products and launch them in new emerging markets</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="team-member">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={team1} alt="alternative" />
                                </div>
                                <p className="p-large"><strong>Aju Tamang</strong></p>
                                <p className="job-title">Software Engineer Trainee</p>
                                <span className="social-icons">
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x facebook"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x twitter"></i>
                                            <i className="fab fa-twitter fa-stack-1x"></i>
                                        </a>
                                    </span>
                                </span>
                            </div>

                            <div className="team-member">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={team2} alt="alternative" />
                                </div>
                                <p className="p-large"><strong>Anjal Bam</strong></p>
                                <p className="job-title">Software Engineer Trainee</p>
                                <span className="social-icons">
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x facebook"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x twitter"></i>
                                            <i className="fab fa-twitter fa-stack-1x"></i>
                                        </a>
                                    </span>
                                </span>
                            </div>

                            <div className="team-member">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={team3} alt="alternative" />
                                </div>
                                <p className="p-large"><strong>Rajesh Pandey</strong></p>
                                <p className="job-title">Software Engineer Trainee</p>
                                <span className="social-icons">
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x facebook"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x twitter"></i>
                                            <i className="fab fa-twitter fa-stack-1x"></i>
                                        </a>
                                    </span>
                                </span>
                            </div>

                            <div className="team-member">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={team4} alt="alternative" />
                                </div>
                                <p className="p-large"><strong>Rajesh Pudasaini</strong></p>
                                <p className="job-title">Software Engineer Trainee</p>
                                <span className="social-icons">
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x facebook"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x twitter"></i>
                                            <i className="fab fa-twitter fa-stack-1x"></i>
                                        </a>
                                    </span>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-col">
                                <h4>About HamroNote</h4>
                                <p>HamroNote is a place where students can find the old books and Notes to help his/her career move ahead.</p>
                            </div>
                        </div> 
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">Copyright © 2020 <a href="https://inovatik.com">HamroNote</a> - All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Home;