import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./resourcePage.css";

const PreviousPapersPage = () => {
    const { id } = useParams(); // Extract semester ID from the URL
    const [previousPapers, setPreviousPapers] = useState([]);

    useEffect(() => {
        // Fetch data from JSON file
        fetch("/semesterData.json")
            .then((response) => response.json())
            .then((data) => setPreviousPapers(data.semesters[id]?.previousYear || []))
            .catch((error) => console.error("Error loading previous papers data:", error));
    }, [id]);

    return (
        <div className="resource-page">
            <h1>Previous Year Papers - Semester {id}</h1>
            {previousPapers.length === 0 ? (
                <p>No previous papers available for this semester.</p>
            ) : (
                <div className="button-container">
                    {previousPapers.map((paper, index) => (
                        <button
                            key={index}
                            onClick={() => window.open(paper.link, "_blank")}
                            className="resource-button"
                        >
                            {paper.title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PreviousPapersPage;
