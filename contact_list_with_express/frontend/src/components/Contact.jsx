import React, { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
    const [contacts, setContacts] = useState([]);
    const [newContacts, setNewContacts] = useState({
        name: "",
        number: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newContacts) {
            try {
                await axios.post("http://localhost:8000", newContacts);
            } catch (error) {
                console.log(error);
            }
        }
    };
    const handleChange = (event) => {
        setNewContacts((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8000");
                setContacts(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [contacts]);
    return (
        <>
            <section>
                <h1>Contact Registration Form</h1>
                <form action="#" onSubmit={handleSubmit}>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={newContacts.name}
                        name="name"
                        id="name"
                        onChange={handleChange}
                    />
                    <label htmlFor="number"></label>
                    <input
                        type="text"
                        placeholder="Contact Number"
                        value={newContacts.number}
                        name="number"
                        id="number"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Add" />
                </form>
            </section>
            <section>
                <h1>Contacts</h1>
                <ol>
                    {contacts.length > 0 ? (
                        contacts.map((contact) => (
                            <li key={contact.id}>
                                <h4>{contact.name}</h4>
                                <p>{contact.number}</p>
                            </li>
                        ))
                    ) : (
                        <h3>No contacts added yet.</h3>
                    )}
                </ol>
            </section>
        </>
    );
}

export default Contact;
