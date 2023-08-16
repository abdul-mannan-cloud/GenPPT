import React, {useEffect, useState} from 'react';
import {animated, useInView, useSpring} from "react-spring";
import Avatar from "boring-avatars";
import {useAuth} from "../components/AuthProvider";
import {Link, useNavigate} from "react-router-dom";
import {signOut} from "@firebase/auth";
import {auth} from "../services/firebase";
import {toast} from "react-toastify";

export const Header = () => {

    const user = useAuth();
    const navigate = useNavigate()

    return (
        <header className="header-area header-sticky sticky-top" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="/" className="logo">
                                <img className="img" src="/images/GenPPt (2).png" alt=""/>
                            </a>
                            <div className="d-flex flex-row justify-content-end align-items-center">
                                <ul className="nav">
                                    <li className="scroll-to-section "><a onClick={()=>document.location.href = ('/#top')}  className="active hover-link"
                                    >Home</a></li>
                                    <li className="scroll-to-section"><a onClick={()=>document.location.href = ('/#about')} className="hover-link">About</a></li>
                                    <li className="scroll-to-section"><a onClick={()=>document.location.href = ('/#services')} className="hover-link">Features</a></li>
                                    <li className="scroll-to-section">
                                        <a onClick={()=>document.location.href = ('/#pricing')} className="hover-link">Pricing</a>
                                    </li>
                                    {!user ? <li>
                                            <div className="border-first-button">
                                                 <button onClick={()=>navigate("/signin")}>Sign in</button>
                                            </div>
                                        </li> :
                                        <button className="border-0 bg-white ps-4" data-toggle="tooltip" data-placement="bottom" title="Signout" onClick={async () => {
                                            await auth.signOut()
                                        }}>
                                            <Avatar
                                                size={40}
                                                name={user.displayName ? user.displayName : "Guest"}
                                                variant="marble"
                                                colors={["#A3A948", "#fa65b1", "#F85931", "#009989"]}
                                            />
                                        </button>
                                    }
                                </ul>
                            </div>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

const MainBanner = () => {

    const navigate = useNavigate()
    const auth = useAuth()

    const [comeFromLeftRef, comeFromLeftInView] = useInView({
        triggerOnce: true,
    });

    const [comeFromRightRef, comeFromRightInView] = useInView({
        triggerOnce: true,
    });

    const comeFromLeftAnimation = useSpring({
        opacity: comeFromLeftInView ? 1 : 0,
        transform: comeFromLeftInView ? "translateX(0)" : "translateX(-100%)",
        config: { duration: 1000 },
    });

    const comeFromRightAnimation = useSpring({
        opacity: comeFromRightInView ? 1 : 0,
        transform: comeFromRightInView ? "translateX(0)" : "translateX(100%)",
        config: { duration: 1000 },
    });

    return (
        <div className="main-banner wow fadeIn " id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="position-absolute" style={{
                                top: -500,
                                left: 800,
                            }}>
                                {/*<img src="/graph.png" width={50} alt="background"/>=*/}
                                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                            <stop id="stop1" stopColor="rgba(28.319, 33.995, 192.46, 1)"
                                                  offset="0%"></stop>
                                            <stop id="stop2" stopColor="rgba(194.797, 31, 251, 1)" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#sw-gradient)"
                                          d="M17,-25.4C22.6,-22.8,28.2,-19.1,27.5,-14.4C26.8,-9.7,19.7,-3.9,19.5,3.3C19.2,10.6,25.9,19.4,25.2,23.9C24.5,28.4,16.5,28.6,9,30.9C1.5,33.3,-5.5,37.8,-11.5,37C-17.6,36.2,-22.7,30.2,-25.9,23.9C-29.2,17.6,-30.5,11.1,-29.2,5.5C-27.9,0,-24.1,-4.6,-21.8,-10.1C-19.5,-15.5,-18.8,-21.8,-15.4,-25.5C-12,-29.2,-6,-30.3,-0.2,-30C5.7,-29.7,11.3,-28.1,17,-25.4Z"
                                          width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"
                                          style={{transition: " all 0.3s ease 0s;"}}></path>
                                </svg>
                            </div>

                            <div className="col-lg-6 align-self-center">
                                <animated.div ref={comeFromLeftRef} style={comeFromLeftAnimation}
                                              className="left-content show-up header-text wow fadeInLeft"
                                              data-wow-duration="1s"
                                              data-wow-delay="1s">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h6>Introducing GENPPT</h6>
                                            <h2>Transform PDFs into Engaging PPT Slides</h2>
                                            <p>With just a few clicks, GENPPT utilizes advanced AI technology to convert
                                                your PDFs into compelling PowerPoint slides using the keywords you
                                                provide. Say goodbye to manual slide creation and elevate your
                                                presentations.</p>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="border-first-button scroll-to-section">
                                                <button
                                                    onClick={() => {
                                                        console.log('auth,',auth)
                                                        if(!auth)
                                                            toast.error("Please Signin First")
                                                        else navigate("/converter")
                                                    }}
                                                    className="button-get-started"
                                                >Get Started</button>
                                            </div>
                                        </div>
                                    </div>
                                </animated.div>
                            </div>
                            <div className="col-lg-6">
                                <animated.div ref={comeFromRightRef} style={comeFromRightAnimation}
                                              className="right-image wow fadeInRight" data-wow-duration="1s"
                                              data-wow-delay="0.5s">
                                    <img className="img1" src="/images/GenPPt (5).png" alt="GENPPT Demo Image"/>
                                </animated.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutSection = () => {


    const [comeFromLeftRef, comeFromLeftInView] = useInView({
        triggerOnce: true,
    });

    const [comeFromRightRef, comeFromRightInView] = useInView({
        triggerOnce: true,
    });

    const comeFromLeft = useSpring({
        opacity: comeFromLeftInView ? 1 : 0,
        transform: `translate3d(${comeFromLeftInView ? 0 : -100}%, 0, 0)`,
        config: {duration: 1000},
    });

    const comeFromRight = useSpring({
        opacity: comeFromRightInView ? 1 : 0,
        transform: `translate3d(${comeFromRightInView ? 0 : 100}%, 0, 0)`,
        config: {duration: 1000},
    });

    return (
        <animated.div id="about" className="about section">
            <div className="container bg-transparent">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row ">
                            <div className="position-absolute d-sm-none" style={{
                                left: 0,
                                top: 900,
                            }}>
                                <svg id="sw-js-blob-svg" viewBox="0 0 250 300" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                            <stop id="stop1" stopColor="rgba(28.319, 33.995, 192.46, 1)"
                                                  offset="0%"></stop>
                                            <stop id="stop2" stopColor="rgba(194.797, 31, 251, 1)" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#sw-gradient)"
                                          d="M16.5,-21.1C19.6,-13.3,19.3,-6.7,18.8,-0.5C18.3,5.6,17.6,11.3,14.4,18.8C11.3,26.4,5.6,35.8,0.5,35.3C-4.6,34.8,-9.2,24.3,-17.3,16.8C-25.5,9.2,-37.1,4.6,-39.1,-2.1C-41.2,-8.7,-33.7,-17.5,-25.6,-25.3C-17.5,-33.1,-8.7,-39.9,-1,-38.9C6.7,-37.8,13.3,-28.9,16.5,-21.1Z"
                                          width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"
                                          style={{transition: " all 0.3s ease 0s;"}}></path>
                                </svg>
                            </div>
                            <animated.div ref={comeFromLeftRef} className="col-lg-6" style={comeFromLeft}>
                                <div className="about-left-image wow fadeInLeft" data-wow-duration="1s"
                                     data-wow-delay="0.5s">
                                    <img src="/images/GenPPt (3).png" alt="GENPPT Team at Quest Islamabad"/>
                                </div>
                            </animated.div>
                            <animated.div ref={comeFromRightRef} className="col-lg-6 align-self-center wow fadeInRight"
                                          data-wow-duration="1s" style={comeFromRight}
                                          data-wow-delay="0.5s">
                                <div className="about-right-content">
                                    <div className="section-heading">
                                        <h6>About GENPPT</h6>
                                        <h4>Easily Generate <em>Presentations</em></h4>
                                        <div className="line-dec"></div>
                                    </div>
                                    <p>Elevate your presentation game with GenPPT's unparalleled features that enable you to effortlessly craft stunning slideshows from PDFs of all sizes. Our platform offers a diverse range of themes tailored to different styles and purposes, ensuring your presentations not only convey information but also captivate audiences visually. With just a few clicks, you can select from a library of themes and customize the appearance of each slide, all while our state-of-the-art AI technology preserves the integrity of your content. Let your creativity soar as you transform PDFs into dynamic PowerPoint presentations that leave a lasting impression.</p>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="skill-item first-skill-item wow fadeIn"
                                                 data-wow-duration="1s" data-wow-delay="0s">
                                                <div className="progress" data-percentage="95">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                                                    <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                                                    <div className="progress-value">
                                                        <div>
                                                            95%<br/>
                                                            <span>AI Capabilities</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="skill-item second-skill-item wow fadeIn"
                                                 data-wow-duration="1s" data-wow-delay="0s">
                                                <div className="progress" data-percentage="90">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                                                    <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                                                    <div className="progress-value">
                                                        <div>
                                                            90%<br/>
                                                            <span>Processing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="skill-item third-skill-item wow fadeIn"
                                                 data-wow-duration="1s" data-wow-delay="0s">
                                                <div className="progress" data-percentage="88">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                                                    <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                                                    <div className="progress-value">
                                                        <div>
                                                            88%<br/>
                                                            <span>Slide Design</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
};


const Services = () => {
    return (
        <div id="services" className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h6>Our Services</h6>
                            <h4>What Our Agency <em>Provides</em></h4>
                            <div className="line-dec"></div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="naccs">
                            <div className="grid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="menu">
                                            <div className="first-thumb active">
                                                <div className="thumb">
                                                    <span className="icon"><img src="/images/service-icon-01.png"
                                                                                alt=""/></span>
                                                    PDF to PPT
                                                </div>
                                            </div>
                                            <div className="thumb-button">
                                                <div className="thumb">
                                                    <span className="icon"><img src="/images/service-icon-02.png"
                                                                                alt=""/></span>
                                                    Multiple Themes
                                                </div>
                                            </div>
                                            <div>
                                                <div className="thumb">
                                                    <span className="icon"><img src="/images/service-icon-03.png"
                                                                                alt=""/></span>
                                                    Smart Content
                                                </div>
                                            </div>
                                            <div>
                                                <div className="thumb">
                                                    <span className="icon icon-effect"><img src="/images/service-icon-04.png"
                                                                                alt=""/></span>
                                                    Enhanced Images
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <ul className="nacc">
                                            <li className="active">
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="left-text">
                                                                <h4>Convert PDF to PPT</h4>
                                                                <p>Seamless PDF to PPTX Conversion</p>
                                                                <div className="ticks-list">
                                                                    <span><i className="fa fa-check"></i>Seamless PDF Conversion</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>Preserve Layout</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>Reduced Effort</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>Formatted Slides</span>

                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="right-image">
                                                                <img src="/images/services-image.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="left-text">
                                                                <h4>Multiple Themes to Select From</h4>
                                                                <p>Choose the best theme that suits your need</p>
                                                                <div className="ticks-list">
                                                                    <span><i className="fa fa-check"></i>Diverse Themes</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>Stylish Templates</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>Theme Selection</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>Regular Updates</span>

                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="right-image">
                                                                <img src="/images/services-image-02.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="left-text">
                                                                <h4>Smart Content Organization</h4>
                                                                <p>Smarly organize content from PDF to Powerpoint
                                                                    Slides</p>
                                                                <div className="ticks-list">
                                                                    <span><i className="fa fa-check"></i> Auto Organization</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>Headings & Bullets</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>Relevant Info</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>Accurate Info</span>

                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="right-image">
                                                                <img src="/images/services-image-03.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="left-text">
                                                                <h4>Visual Enhancement</h4>
                                                                <p>Visually enhance your slides by adding images</p>
                                                                <div className="ticks-list">
                                                                    <span><i
                                                                        className="fa fa-check"></i>Online Images</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>PDF Graphics</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>Enhanced Visuals</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i>High Quality Images</span>

                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="right-image">
                                                                <img src="/images/services-image-04.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <li>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="left-text">
                                                                <h4>Enjoy & Travel</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                    elit...</p>
                                                                <div className="ticks-list">
                                                                    <span><i className="fa fa-check"></i> Optimized Template</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i> Data Info</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i> SEO Analysis</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i> Data Info</span>
                                                                    <span><i
                                                                        className="fa fa-check"></i> SEO Analysis</span>
                                                                    <span><i className="fa fa-check"></i> Optimized Template</span>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                    elit...</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="right-image">
                                                                <img src="/images/services-image.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FreeQuote = () => {
    return (
        <div id="free-quote" className="free-quote">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                            <h6>Get Your Free Quote</h6>
                            <h4>Grow With Us Now</h4>
                            <div className="line-dec"></div>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <form id="search" action="#" method="GET">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4">
                                    <fieldset>
                                        <input
                                            type="web"
                                            name="web"
                                            className="website"
                                            placeholder="Your website URL..."
                                            autoComplete="on"
                                            required
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <fieldset>
                                        <input
                                            type="address"
                                            name="address"
                                            className="email"
                                            placeholder="Email Address..."
                                            autoComplete="on"
                                            required
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <fieldset>
                                        <button type="submit" className="main-button ">
                                            Get Quote Now
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Contact = () => {

    return (
        <div id="contact" className="contact-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h6>Contact Us</h6>
                            <h4>Get In Touch With Us <em>Now</em></h4>
                            <div className="line-dec"></div>
                        </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <form id="contact" action="" method="post">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-dec">
                                        <img src="/images/contact-dec.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div id="map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d519.4234124287747!2d73.07493036192332!3d33.66830414389061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1691622558978!5m2!1sen!2s"
                                            width="100%"
                                            height="636px" style={{border: 0}} allowFullScreen="" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="fill-form">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="info-post">
                                                    <div className="icon">
                                                        <img src="/images/phone-icon.png" alt=""/>
                                                        <a href="#">010-020-0340</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="info-post">
                                                    <div className="icon">
                                                        <img src="/images/email-icon.png" alt=""/>
                                                        <a href="#">haroon@quest.com</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="info-post">
                                                    <div className="icon">
                                                        <img src="/images/location-icon.png" alt=""/>
                                                        <a href="#">i8 Markaz</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input
                                                        type="name"
                                                        name="name"
                                                        id="name"
                                                        placeholder="Name"
                                                        autoComplete="on"
                                                        required
                                                    />
                                                </fieldset>
                                                <fieldset>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        pattern="[^ @]*@[^ @]*"
                                                        placeholder="Your Email"
                                                        required
                                                    />
                                                </fieldset>
                                                <fieldset>
                                                    <input
                                                        type="subject"
                                                        name="subject"
                                                        id="subject"
                                                        placeholder="Subject"
                                                        autoComplete="on"
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset>
                          <textarea
                              name="message"
                              type="text"
                              className="form-control"
                              id="message"
                              placeholder="Message"
                              required
                          ></textarea>
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <button
                                                        type="submit"
                                                        id="form-submit"
                                                        className="main-button"
                                                    >
                                                        Send Message Now
                                                    </button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Pricing = () => {

    const [comeFromBottomRef, comeFromBottomInView] = useInView({
        triggerOnce: true,
    });

    const [comeFromLeftRef, comeFromLeftInView] = useInView({
        triggerOnce: true,
    });

    const [comeFromRightRef, comeFromRightInView] = useInView({
        triggerOnce: true,
    });

    const comeFromBottom = useSpring({
        opacity: comeFromBottomInView ? 1 : 0,
        transform: `translate3d(0, ${comeFromBottomInView ? 0 : 100}%, 0)`,
        config: {duration: 700},
    });

    const comeFromLeft = useSpring({
        opacity: comeFromLeftInView ? 1 : 0,
        transform: `translate3d(${comeFromLeftInView ? 0 : -100}%, 0, 0)`,
        config: {duration: 700},
    });

    const comeFromRight = useSpring({
        opacity: comeFromRightInView ? 1 : 0,
        transform: `translate3d(${comeFromRightInView ? 0 : 100}%, 0, 0)`,
        config: {duration: 700},
    });


    return (
        <div className="container mt-4 d-flex flex-column gap-3" id="pricing">
            <div className="row " style={{color: '#726ae3'}}>
                <h1 style={{zIndex:100}}>Pricing</h1>
            </div>
            <div className="row gap-3 gap-lg-0">
                <animated.div ref={comeFromLeftRef} className="col-lg-4" style={comeFromLeft}>
                    <div className="card p-4 d-grid gap-2 h-100 " style={{borderRadius: '23px'}}>
                        <h1 style={{color: "#fa65b1"}}>
                            Free
                        </h1>
                        <div>
                            A plan to effortlessly craft amazing presentations for any field and boost your professional
                            or personal success.
                        </div>
                        <div>
                            <h2>0 $</h2>
                        </div>
                        <div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">5 Conversions</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">8 Slides per Presentation</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">Single Theme</p>
                            </div>
                        </div>
                    </div>
                </animated.div>
                <animated.div ref={comeFromBottomRef} style={comeFromBottom} className="col-lg-4">
                    <div className="card p-4 d-flex flex-column gap-2" style={{borderRadius: '23px'}}>
                        <h1 style={{color: "#fa65b1"}}>
                            Standard
                        </h1>
                        <div>
                            A plan for everyone in any field: from healthcare workers to business people and
                            collaborating teams.
                        </div>
                        <div>
                            <h2>5 $</h2>
                        </div>
                        <div className="border-first-button">
                            <button className="w-100 mb-2">
                                Subscribe
                            </button>
                        </div>
                        <div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">20 Conversion per month</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">Upto 10 Slides per Presentation</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">Multiple Themes</p>
                            </div>
                        </div>
                    </div>
                </animated.div>
                <animated.div ref={comeFromRightRef} style={comeFromRight} className="col-lg-4">
                    <div className="card p-4 d-flex flex-column gap-2" style={{borderRadius: '23px'}}>
                        <h1 style={{color: "#fa65b1"}}>
                            Premium
                        </h1>
                        <div>
                            A special plan for everyone in any field: from healthcare workers to business people and
                            collaborating teams.
                        </div>
                        <div>
                            <h2>10 $</h2>
                        </div>
                        <div className="border-first-button">
                            <button className="w-100 mb-2">
                                Subscribe
                            </button>
                        </div>
                        <div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">Unlimited Conversion per month</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">Upto 14 Slides per Presentation</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">Multiple Themes</p>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
        </div>
    )
}

export const Home = () => {
    return (
        <div>
            {/* Pre-loader */}
            {/*<div id="js-preloader" className="js-preloader">*/}
            {/*    /!* Pre-loader content *!/*/}
            {/*</div>*/}

            <MainBanner/>
            <AboutSection/>
            <Services/>
            {/* <FreeQuote/> */}
            <Pricing/>
            <Contact/>
        </div>
    );
};

