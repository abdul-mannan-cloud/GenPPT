
import React, { useState, useEffect } from "react";
const text = "Generating Your Presentation ...";



const TextAnimation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentText.length === text.length) {
                setCurrentText("");
                setCurrentIndex(0);
            } else {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
            }
        }, 100); // Change the delay as desired (in milliseconds)

        return () => clearInterval(interval);
    }, [currentText, currentIndex]);

    return (
        <div className="text" >
            {currentText}
            <span className="animate-pulse">|</span>
        </div>
    );
};

export default TextAnimation;

