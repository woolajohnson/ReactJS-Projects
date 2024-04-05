import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ContactList = () => {
    const [contacts, setContacts] = useState(() => {
        const storedContacts = localStorage.getItem("contacts");
        return storedContacts ? JSON.parse(storedContacts) : [];
    });

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newContact = { name, number };
        setContacts([...contacts, newContact]);
        setName("");
        setNumber("");
        localStorage.setItem(
            "contacts",
            JSON.stringify([...contacts, newContact])
        );
    };

    const handleDelete = (index) => {
        const updatedContacts = [...contacts];
        updatedContacts.splice(index, 1);
        setContacts(updatedContacts);
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    };

    return (
        <Row className="mt-5">
            <Col></Col>
            <Col lg={6}>
                <h1>Contact List</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                            value={number}
                            onChange={(event) => setNumber(event.target.value)}
                            type="text"
                        />
                    </Form.Group>
                    <Button type="submit" variant="primary">
                        Add
                    </Button>
                </Form>
                <div className="mt-4">
                    {contacts.map((contact, index) => (
                        <div key={index} className="mb-3">
                            <p>Name: {contact.name}</p>
                            <p>Contact Number: {contact.number}</p>
                            <Button
                                onClick={() => handleDelete(index)}
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </div>
                    ))}
                </div>
            </Col>
            <Col></Col>
        </Row>
    );
};

export default ContactList;
