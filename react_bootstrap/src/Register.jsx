import React from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";

function Register() {
    return (
        <Row id="form" className="p-5 mb-5">
            <h1 className="mb-3 text-center">
                Register and be the next{" "}
                <span className="text-warning">hero!</span>
            </h1>
            <Col></Col>
            <Col lg={6} className="p-5">
                <Card className="p-5 bg-warning-subtle">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicHeroName"
                        >
                            <Form.Label>Hero Name</Form.Label>
                            <Form.Control type="text" placeholder="Hero Name" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default Register;
