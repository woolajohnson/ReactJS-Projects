import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import JsImage from "../assets/images/javascript.png";
import ReactJs from "../assets/images/react.png";
import Codeigniter from "../assets/images/codeigniter.png";
import Tailwind from "../assets/images/tailwind.png";
import Bootstrap from "../assets/images/bootstrap.png";
import NodeJs from "../assets/images/node.png";
import Php from "../assets/images/php.png";
import Github from "../assets/images/github.png";
import MySql from "../assets/images/mysql.png";
import Jquery from "../assets/images/jQuery.png";

const AboutMe = ({ darkMode, toggleDarkMode }) => {
    const toggleMode = (menu) => {
        toggleDarkMode(menu);
    };
    const techs = [
        {
            id: 1,
            src: Html,
            shadow: "shadow-orange-500",
            alt: "Html profile",
        },
        {
            id: 2,
            src: Css,
            shadow: "shadow-blue-500",
            alt: "Css profile",
        },
        {
            id: 3,
            src: JsImage,
            shadow: "shadow-yellow-500",
            alt: "JsImage profile",
        },
        {
            id: 4,
            src: ReactJs,
            shadow: "shadow-sky-500",
            alt: "ReactJs profile",
        },
        {
            id: 5,
            src: NodeJs,
            shadow: "shadow-green-500",
            alt: "NodeJs profile",
        },
        {
            id: 6,
            src: Tailwind,
            shadow: "shadow-cyan-500",
            alt: "Tailwind profile",
        },
        {
            id: 7,
            src: Bootstrap,
            shadow: "shadow-purple-500",
            alt: "Bootstrap profile",
        },
        {
            id: 8,
            src: Codeigniter,
            shadow: "shadow-orange-500",
            alt: "Codeigniter profile",
        },
        {
            id: 9,
            src: MySql,
            shadow: "shadow-[#00758f]",
            alt: "MySql profile",
        },
        {
            id: 10,
            src: Github,
            shadow: "shadow-slate-800 dark:shadow-white",
            alt: "Github profile",
        },
        {
            id: 11,
            src: Jquery,
            shadow: "shadow-cyan-600",
            alt: "Jquery profile",
        },
        {
            id: 12,
            src: Php,
            shadow: "shadow-[#306bff]",
            alt: "Php profile",
        },
    ];
    return (
        <main
            className={`${darkMode && "dark"} min-h-screen dark:bg-[#101010]`}
        >
            <NavBar currentMode={darkMode} toggleMode={toggleMode} />
            <article className="flex px-4 py-5 gap-16 justify-between max-w-screen-lg mx-auto ">
                <section className="pr-5 max-w-[55%]">
                    <h2 className=" text-4xl font-bold mb-6 w-5/6 dark:text-white">
                        A Little About Me
                    </h2>
                    <p className="leading-relaxed my-8 text-xl font-medium text-justify dark:text-white">
                        My name is{" "}
                        <span className="bg-[#e7ce72]">
                            Edwardson Andrade Jr.
                        </span>
                        , and I'm from the beautiful province of Cebu. I hold a{" "}
                        <span className=" bg-[#e7ce72] dark:text-black">
                            degree in IT
                        </span>{" "}
                        and have some experience in data entry and online
                        freelancing. Recently, I graduated from the{" "}
                        <span className="bg-[#08D9D6]">
                            Village88 training bootcamp
                        </span>
                        , where I gained experience in using these tech stack.
                    </p>
                    <a className="px-6 py-3 font-medium bg-slate-800 rounded text-white hover:bg-[#08D9D6] shadow-md duration-500 cursor-pointer dark:bg-white dark:text-slate-800 dark:hover:text-white">
                        <Link to="/projects">View Projects</Link>
                    </a>
                </section>
                <section className="w-[45%]">
                    <h2 className=" text-4xl font-bold mb-9 decoration-sky-800 dark:text-white text-center">
                        Tech Stack
                    </h2>
                    <div className="grid grid-cols-4 gap-y-5 px-2">
                        {techs.map(({ id, src, shadow, alt }) => {
                            return (
                                <img
                                    key={id}
                                    src={src}
                                    className={`size-20 p-2 hover:-translate-y-2 duration-700 rounded-xl shadow-md ${shadow}`}
                                    alt={alt}
                                />
                            );
                        })}
                    </div>
                </section>
            </article>
        </main>
    );
};

export default AboutMe;
