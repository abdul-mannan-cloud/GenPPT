import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const IntroPage = () => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    const bubbleAnimation = useSpring({
        loop: true,
        to: { transform: 'translateY(10px)', opacity: 0 },
        from: { transform: 'translateY(0px)', opacity: 1 },
        config: { duration: 1500 },
    });

    const handleStartClick = () => {
        // Redirect to the PDF to PPT conversion page or perform other actions
    };

    return (
        <>
            <animated.div style={fadeIn} className="intro-page">

                <animated.div className="bubble-background">
                    <div className="bubble bubble1"></div>
                    <div className="bubble bubble2"></div>
                    <div className="bubble bubble3"></div>
                    <div className="bubble bubble4"></div>
                    <div className="bubble bubble5"></div>
                    {/* Add more bubble elements */}
                </animated.div>
                <div className="blur-back">

                </div>
                <div className="content">
                    <h1>Welcome to PDF to PPT Converter</h1>
                    <p>Your gateway to hassle-free file conversion!</p>
                    <input type="text" placeholder="Enter your text" className="input-field" />
                    <button className="start-button">Get Started</button>
                </div>
            </animated.div>
        </>

    );
};

function Intro() {
    return (
        <IntroPage/>
    );
}

export default Intro;
