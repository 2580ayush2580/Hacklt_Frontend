import React from 'react';
import './footer.css'
import ecllipse from '../../assets/Ellipse.svg';

const Footer = () => {
    return (
        <div className="footer">
        <img src={ecllipse} alt="" className="img1" />
        <img src={ecllipse} alt="" className="img2" />
       </div>
    );
}

export default Footer;
