import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Projects />
        </>
    );
};

export default App;
