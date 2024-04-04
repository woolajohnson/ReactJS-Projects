import React, { useEffect, useState } from "react";
import Pet1 from "../assets/images/pet1.gif";
import "../assets/stylesheets/MyPet.css";

const MyPet = () => {
    const [petName, setPetName] = useState("");
    const handleForm = (event) => {
        event.preventDefault();
        localStorage.setItem("name", JSON.stringify(petName));
    };
    useEffect(() => {
        const names = JSON.parse(localStorage.getItem("name"));
        names && setPetName(names);
    }, []);
    return (
        <main>
            <img src={Pet1} alt="My pet" />
            {petName == "" ? (
                <h1>Give me a name...</h1>
            ) : (
                <h1>My name is {petName}</h1>
            )}

            <form action="#" onSubmit={handleForm}>
                <label htmlFor="pet"></label>
                <input
                    type="text"
                    name="pet"
                    onChange={(event) => setPetName(event.target.value)}
                />
                <input type="submit" value="Set Pet Name" />
            </form>
        </main>
    );
};

export default MyPet;
