import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./resourcePage.css";

const NotesPage = () => {
    const { id } = useParams();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("/semesterData.json")
            .then((response) => response.json())
            .then((data) => setNotes(data.semesters[id]?.notes || []))
            .catch((error) => console.error("Error loading notes data:", error));
    }, [id]);

    return (
        <div className="resource-page">
            <h1>Notes - Semester {id}</h1>
            {notes.length === 0 ? (
                <p>No notes available for this semester.</p>
            ) : (
                <div className="button-container">
                    {notes.map((note, index) => (
                        <button
                            key={index}
                            onClick={() => window.open(note.link, "_blank")}
                            className="resource-button"
                        >
                            {note.title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NotesPage;
