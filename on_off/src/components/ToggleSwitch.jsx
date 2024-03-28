import React, { useState } from "react";
import "../assets/stylesheets/ToggleSwitch.css";
import Akane from "../assets/images/akane.jpg";

function ToggleSwitch() {
    const [toggleSwitch, setToggleSwitch] = useState(false);

    const toggle = () => {
        setToggleSwitch(!toggleSwitch);
    };
    return (
        <>
            <section className="monitor">
                <img
                    src={Akane}
                    alt="Alpha Image"
                    className={toggleSwitch ? "show" : "hide"}
                />
                <h1>Netflix</h1>
            </section>
            {toggleSwitch ? (
                <button onClick={toggle}>OFF</button>
            ) : (
                <button onClick={toggle}>ON</button>
            )}
        </>
    );
}

export default ToggleSwitch;
