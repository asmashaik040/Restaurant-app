// ScrollToTopButton.jsx
import React, { useState } from 'react';
import { FaArrowUp }  from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Function to toggle visibility of scroll-to-top button based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    return (
        <button
            className={`fixed bottom-10 right-10 bg-amber-400 hover:bg-amber-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300 ${isVisible ? 'visible' : 'invisible'}`}
            onClick={scrollToTop}
        >
            <FaArrowUp className="h-6 w-6" />
        </button>
    );
};

export default ScrollToTop;
