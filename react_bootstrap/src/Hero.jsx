import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function Hero() {
    return (
        <Row id="home" className="text-center bg-warning-subtle">
            <Col></Col>
            <Col lg={6} className="p-5">
                <h1 className="text-dark mb-3">
                    Be the next <span className="text-warning">hero!</span>
                </h1>
                <p className="lead mb-4">
                    "The call for heroes is now! Take the challenge, register
                    for the exam, and stand a chance to be crowned as the next
                    hero in the incredible universe of One-Punch Man. Don't miss
                    your shot at greatness!"
                </p>
                <a href="#form">
                    <Button variant="primary">Register Now!</Button>{" "}
                </a>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default Hero;
