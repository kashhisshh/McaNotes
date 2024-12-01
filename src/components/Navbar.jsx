import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => {
            const newState = !prevState;
            if (newState) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
            return newState;
        });
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);
 
    return (
        <nav className="navbar">
        <div className="logo"><Link to="/">MCA Notes</Link></div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            </ul>
            <div className="burger-menu" onClick={toggleMenu}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
        </nav>
    );
};

export default Navbar;
