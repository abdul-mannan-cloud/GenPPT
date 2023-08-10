import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const IntroPage = () => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

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
