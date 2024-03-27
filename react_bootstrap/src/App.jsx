import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import { Container } from "react-bootstrap";
import Gallery from "./Gallery";
import Register from "./Register";

function App() {
    return (
        <>
            <Header />
            <Container>
                <Hero />
                <Gallery />
                <Register />
            </Container>
        </>
    );
}

export default App;
