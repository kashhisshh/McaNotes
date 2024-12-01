import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const semesters = [
        "Semester 1",
        "Semester 2",
        "Semester 3",
        "Semester 4",
        "Semester 5",
        "Semester 6",
    ];

    return (
        <div id="home" className="home">
            <h2>Welcome to MCA Notes - NIT Raipur</h2>
            <p className="subtitle">MCA - Masters in Computer Applications</p>
            <div className="grid-container">
                {semesters.map((sem, index) => (
                    <div key={index} className="grid-item">
                        <Link to={`/semester/${index + 1}`} className="dark-btn">
                            {sem}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
