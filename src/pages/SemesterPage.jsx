import React from "react";
import { useParams } from "react-router-dom";
import "./SemesterPage.css";

const SemesterPage = () => {
    const { id } = useParams(); // Extract semester ID from the URL

    const cards = [
        {
            title: "Previous Year",
            description: "Download and practice question papers from previous years.",
            link: `/semester/${id}/previous-year`,
        },
        {
            title: "Class Lectures",
            description: "Access recorded class lectures and resources.",
            link: `/semester/${id}/class-lectures`,
        },
        {
            title: "Notes",
            description: "Find curated notes for this semester.",
            link: `/semester/${id}/notes`,
        },
    ];

    return (
        <div className="semester-page">
            <h1>Semester {id}</h1>
            <div className="grid-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                        <a href={card.link} className="btn">
                            View
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SemesterPage;
