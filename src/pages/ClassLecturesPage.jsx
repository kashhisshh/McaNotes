import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./resourcePage.css";

const ClassLecturesPage = () => {
    const { id } = useParams();
    const [classLectures, setClassLectures] = useState([]);

    useEffect(() => {
        fetch("/semesterData.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched Data:", data);
                setClassLectures(data.semesters[id]?.classLecture || []);
            })
            .catch((error) => console.error("Error loading class lectures data:", error));
    }, [id]);

    return (
        <div className="resource-page">
            <h1>Class Lectures - Semester {id}</h1>
            {classLectures.length === 0 ? (
                <p>No class lectures available for this semester.</p>
            ) : (
                <div className="button-container">
                    {classLectures.map((lecture, index) => (
                        <button
                            key={index}
                            onClick={() => window.open(lecture.link, "_blank")}
                            className="resource-button"
                        >
                            {lecture.title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ClassLecturesPage;
