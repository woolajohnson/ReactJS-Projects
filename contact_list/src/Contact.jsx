import React, { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contacts, setContacts] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && email) {
            setContacts([...contacts, { name, email }]);
            setName("");
            setEmail("");
        }
    };
    return (
        <>
            <section>
                <h1>Contact Registration Form</h1>
                <form action="#" onSubmit={handleSubmit}>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        name="name"
                        id="name"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor="email"></label>
                    <input
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        name="email"
                        id="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input type="submit" value="Add" />
                </form>
            </section>
            <section>
                <h1>Contacts</h1>
                <ol>
                    {contacts.length > 0 ? (
                        contacts.map((contact, index) => (
                            <li key={index}>
                                <h4>{contact.name}</h4>
                                <p>{contact.email}</p>
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
