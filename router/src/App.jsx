import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = (result) => setDarkMode(result);
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            darkMode={darkMode}
                            toggleDarkMode={toggleDarkMode}
                        />
                    }
                />
                <Route
                    path="/about"
                    element={
                        <AboutMe
                            darkMode={darkMode}
                            toggleDarkMode={toggleDarkMode}
                        />
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <Projects
                            darkMode={darkMode}
                            toggleDarkMode={toggleDarkMode}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
