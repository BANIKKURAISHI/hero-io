import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div>
            <div>
                <h1>We Build <span>Productive</span>Apps</h1>
                <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <Link><button><span><FaGooglePlay /></span></button></Link>  
                <Link><button><span><FaGooglePlay /></span></button></Link>  
            </div>
        </div>
    );
};

export default Banner;