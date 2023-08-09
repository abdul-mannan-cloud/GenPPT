import React, {useEffect, useState} from 'react';

const Header = () => {
    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="#" className="logo">
                                <img className="img" src="/images/GenPPt (2).png" alt=""/>
                            </a>
                            <ul className="nav">
                                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                <li className="scroll-to-section"><a href="#about">About</a></li>
                                <li className="scroll-to-section"><a href="#services">Services</a></li>
                                <li className="scroll-to-section"><a href="#portfolio">Projects</a></li>
                                <li className="scroll-to-section">
                                    <div className="border-first-button"><a href="#contact">Pricing</a></div>
                                </li>
                            </ul>
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

    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    }

    useEffect(() => {
        const dropContainer = document.getElementById("dropcontainer")
        const fileInput = document.getElementById("pdfInput")

        dropContainer.addEventListener("dragover", (e) => {
            // prevent default to allow drop
            e.preventDefault()
        }, false)

        dropContainer.addEventListener("dragenter", () => {
            dropContainer.classList.add("drag-active")
        })

        dropContainer.addEventListener("dragleave", () => {
            dropContainer.classList.remove("drag-active")
        })

        dropContainer.addEventListener("drop", (e) => {
            e.preventDefault()
            dropContainer.classList.remove("drag-active")
            fileInput.files = e.dataTransfer.files
            setSelectedFile(e.dataTransfer.files)
        })
    }, [0]);

    return (
        <div className="main-banner wow fadeIn vh-100" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12 align-self-center text-center">
                                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s"
                                     data-wow-delay="1s">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h6>Introducing GENPPT - Powered by ChatGPT</h6>
                                            <h2>Transform PDFs into Engaging PPT Slides</h2>
                                            <p>With just a few clicks, GENPPT utilizes advanced AI technology to convert
                                                your PDFs into compelling PowerPoint slides using the keywords you
                                                provide. Say goodbye to manual slide creation and elevate your
                                                presentations.</p>
                                        </div>
                                        <div className="col-lg-12">

                                        </div>
                                        <div className="col-lg-12 bg-white shadow-lg p-4 rounded">
                                            <div className="input-group mb-3 justify-content-center">
                                                <label htmlFor="pdfInput" className="drop-container" id="dropcontainer">
                                                    <span className="drop-title">Drop files here</span>
                                                    or
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="pdfInput"
                                                        accept=".pdf"
                                                        onChange={handleFileChange}
                                                    />
                                                </label>

                                            </div>
                                            <div className="border-first-button scroll-to-section">
                                                <button>Get Started</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="col-lg-6">*/}
                            {/*    <div className="right-image wow fadeInRight" data-wow-duration="1s"*/}
                            {/*         data-wow-delay="0.5s">*/}
                            {/*        <img className="img1" src="/images/GenPPt (5).png" alt="GENPPT Demo Image"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutSection = () => {
    return (
        <div id="about" className="about section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-left-image wow fadeInLeft" data-wow-duration="1s"
                                     data-wow-delay="0.5s">
                                    <img src="/images/GenPPt (3).png" alt="GENPPT Team at Quest Islamabad"/>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s"
                                 data-wow-delay="0.5s">
                                <div className="about-right-content">
                                    <div className="section-heading">
                                        <h6>About GENPPT</h6>
                                        <h4>Innovation at <em>Quest Islamabad</em></h4>
                                        <div className="line-dec"></div>
                                    </div>
                                    <p>GENPPT was crafted during the "Summer of Innovation" at Quest Islamabad, a
                                        groundbreaking program that empowers interns to design and develop cutting-edge
                                        AI products. We're proud to introduce GENPPT, an AI-driven tool that turns PDFs
                                        into compelling slides, ensuring your presentations always make an impact.</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                                            <div>
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
                                                    <span className="icon"><img src="/images/service-icon-04.png"
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
                                                                <h4>SEO Analysis & Daily Reports</h4>
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
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="left-text">
                                                                <h4>Healthy Food & Life</h4>
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
                                                                <h4>Car Re-search & Transport</h4>
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
                                                                <h4>Online Shopping & Tracking ID</h4>
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
                                                                <img src="/images/services-image-04.jpg" alt=""/>
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
                                            </li>
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
                                        <button type="submit" className="main-button">
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
                                            src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            width="100%"
                                            height="636px"
                                            frameBorder="0"
                                            style={{border: '0'}}
                                            allowFullScreen
                                        ></iframe>
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
                                                        <a href="#">our@email.com</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="info-post">
                                                    <div className="icon">
                                                        <img src="/images/location-icon.png" alt=""/>
                                                        <a href="#">123 Rio de Janeiro</a>
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
    return (
        <div className="container mt-4 d-flex flex-column gap-3">
            <div className="row text-primary">
                <h1>Pricing</h1>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card p-4 d-grid gap-2 h-100">
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
                                <p className="text-black">10 Conversion per month</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">8 Slides per Presentation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card p-4 d-flex flex-column gap-2">
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
                        <button className="btn btn-primary w-100">
                            Subscribe
                        </button>
                        <div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">20 Conversion per month</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">Upto 10 Slides per Presentation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card p-4 d-flex flex-column gap-2">
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
                        <button className="btn btn-primary w-100">
                            Subscribe
                        </button>
                        <div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">Unlimited Conversion per month</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p className="text-primary">&#10003; </p>
                                <p className="text-black">Upto 14 Slides per Presentation</p>
                            </div>
                        </div>
                    </div>
                </div>
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

            {/*/!* Pre-header *!/*/}
            {/*<div className="pre-header">*/}
            {/*    /!* Pre-header content *!/*/}
            {/*</div>*/}

            {/* Header */}
            <Header/>
            {/* Main banner */}
            <MainBanner/>
            <AboutSection/>
            {/* You can include other sections here */}
            <Services/>
            <FreeQuote/>
            <Pricing/>
            <Contact/>
        </div>
    );
};

