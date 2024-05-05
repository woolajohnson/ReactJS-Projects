import React from "react";
import Edward from "../assets/images/edward2.jpg";
import { Link } from "react-scroll";

const Home = ({ darkMode, toggleDarkMode }) => {
    const toggleMode = (menu) => {
        toggleDarkMode(menu);
    };
    return (
        <main
            name="home"
            className={`${
                darkMode && "dark"
            } min-h-screen -z-100 dark:bg-[#101010]`}
        >
            <article className="flex md:flex-row flex-col px-4 pt-2 md:pt-24 justify-center items-center max-w-screen-lg mx-auto md:gap-8 leading-loose">
                <section className="md:pr-10 order-2 md:order-1 p-10 text-left">
                    <h1 className=" text-4xl md:text-6xl font-bold mb-6 flex-grow md:w-5/6 dark:text-white">
                        Hi, I'm <span className="text-[#08D9D6]">Edward</span>,
                        aspiring to be a Web Developer.
                    </h1>
                    <p className="leading-relaxed my-8 text-xl dark:text-white">
                        I love everything about web development, and{" "}
                        <span className=" bg-[#e7ce72] dark:text-black">
                            I'm eager to learn and grow
                        </span>
                        . Let's team up and build some awesome projects
                        together!
                    </p>
                    <span className="px-6 py-3 font-medium bg-slate-800 rounded text-white hover:bg-[#08D9D6] shadow-md duration-500 cursor-pointer dark:bg-white dark:text-slate-800 dark:hover:text-white">
                        <Link to="projects">View Projects</Link>
                    </span>
                </section>
                <section className="order-1 md:order-2 shrink-0">
                    <img
                        src={Edward}
                        className="md:w-60 w-48 rounded-xl shadow shadow-slate-700 dark:shadow-[#e7ce72] hover:-translate-y-2 duration-700"
                        alt="My profile"
                    />
                </section>
            </article>
        </main>
    );
};

export default Home;
