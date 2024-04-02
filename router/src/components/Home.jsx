import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Edward from "../assets/images/edward2.jpg";

const Home = ({ darkMode, toggleDarkMode }) => {
    const toggleMode = (menu) => {
        toggleDarkMode(menu);
    };
    return (
        <main
            className={`${darkMode && "dark"} min-h-screen dark:bg-[#101010]`}
        >
            <NavBar currentMode={darkMode} toggleMode={toggleMode} />
            <article className="flex md:flex-row flex-col px-4 py-10 justify-between items-center max-w-screen-lg mx-auto gap-8 leading-loose">
                <section className="pr-10 max-w-[65%]">
                    <h1 className=" text-6xl font-bold mb-6 w-5/6 dark:text-white">
                        Hi, I'm <span className="text-[#08D9D6]">Edward</span>,
                        aspiring to be a Web Developer.
                    </h1>
                    <p className="leading-relaxed my-8 text-xl font-medium dark:text-white">
                        I love everything about web development, and{" "}
                        <span className=" bg-[#e7ce72] dark:text-black">
                            I'm eager to learn and grow
                        </span>
                        . Let's team up and build some awesome projects
                        together!
                    </p>
                    <a className="px-6 py-3 font-medium bg-slate-800 rounded text-white hover:bg-[#08D9D6] shadow-md duration-500 cursor-pointer dark:bg-white dark:text-slate-800 dark:hover:text-white">
                        <Link to="/projects">View Projects</Link>
                    </a>
                </section>
                <section>
                    <img
                        src={Edward}
                        className="w-60 rounded-xl shadow shadow-slate-700 dark:shadow-[#e7ce72] hover:-translate-y-2 duration-700"
                        alt="My profile"
                    />
                </section>
            </article>
        </main>
    );
};

export default Home;
