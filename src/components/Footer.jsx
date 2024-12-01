import React from "react";
import './Footer.css';
import instagramLogo from '/instagram-logo.png'; // Adjust path if needed
import linkedinLogo from '/linkedin.png'; // LinkedIn logo path

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content">
                {/* Mission Statement */}
                <div className="mission-statement">
                    <p>
                        Our mission is to provide quality notes that can help you in figuring all the necessary things in your exams. 
                        We also provide different sorts of exam preparation material for NIT Raipur MCA students for free.
                    </p>
                    <p><strong>Start Learning!</strong></p>
                </div>
                
                {/* Footer Info */}
                <p>&copy; 2024 MCA Notes | All Rights Reserved</p>
                <p>Contact us at <a href="mailto:kashishnarang311@gmail.com">kashishnarang311@gmail.com</a></p>
                
                {/* Social Links */}
                <div className="social-links">
                    {/* Updated LinkedIn link with logo */}
                    <a href="https://www.linkedin.com/company/mca-nitrr/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                    </a>
                    {/* Instagram Link with Logo */}
                    <a href="https://www.instagram.com/nitrr_mca/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Instagram" className="social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
