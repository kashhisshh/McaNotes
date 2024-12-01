import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SemesterPage from "./pages/SemesterPage"; // Adjust path if neede
import PreviousPapersPage from "./pages/PreviousPapersPage";
import ClassLecturesPage from "./pages/ClassLecturesPage";
import NotesPage from "./pages/NotesPage";


const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/semester/:id" element={<SemesterPage />} />
                    <Route path="/semester/:id/previous-year" element={<PreviousPapersPage />} />
    <Route path="/semester/:id/class-lectures" element={<ClassLecturesPage />} />
    <Route path="/semester/:id/notes" element={<NotesPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
