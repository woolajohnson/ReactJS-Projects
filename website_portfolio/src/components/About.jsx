import React from "react";
import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import JsImage from "../assets/images/javascript.png";
import ReactJs from "../assets/images/react.png";
import Codeigniter from "../assets/images/codeigniter.png";
import Tailwind from "../assets/images/tailwind.png";
import Bootstrap from "../assets/images/bootstrap.png";
import NodeJs from "../assets/images/node.png";
import Php from "../assets/images/php.png";
import Laravel from "../assets/images/laravel.png";
import MySql from "../assets/images/mysql.png";
import Jquery from "../assets/images/jQuery.png";

const About = ({ darkMode, toggleDarkMode }) => {
    const toggleMode = (menu) => {
        toggleDarkMode(menu);
    };
    const techs = [
        {
            id: 1,
            src: Html,
            name: "Html",
            shadow: "shadow-orange-500",
            alt: "Html profile",
        },
        {
            id: 2,
            src: Css,
            name: "Css",
            shadow: "shadow-blue-300",
            alt: "Css profile",
        },
        {
            id: 3,
            src: JsImage,
            name: "Javascript",
            shadow: "shadow-yellow-500",
            alt: "JsImage profile",
        },
        {
            id: 4,
            src: ReactJs,
            name: "React",
            shadow: "shadow-sky-500",
            alt: "ReactJs profile",
        },
        {
            id: 5,
            src: NodeJs,
            name: "NodeJs",
            shadow: "shadow-green-500",
            alt: "NodeJs profile",
        },
        {
            id: 6,
            src: Tailwind,
            name: "Tailwind",
            shadow: "shadow-cyan-500",
            alt: "Tailwind profile",
        },
        {
            id: 7,
            src: Bootstrap,
            name: "Bootstrap",
            shadow: "shadow-purple-500",
            alt: "Bootstrap profile",
        },
        {
            id: 8,
            src: Codeigniter,
            name: "CodeIgniter",
            shadow: "shadow-orange-500",
            alt: "Codeigniter profile",
        },
        {
            id: 9,
            src: MySql,
            name: "MySql",
            shadow: "shadow-[#00758f]",
            alt: "MySql profile",
        },
        {
            id: 10,
            src: Laravel,
            name: "Laravel",
            shadow: "shadow-red-600",
            alt: "Laravel profile",
        },
        {
            id: 11,
            src: Jquery,
            name: "Jquery",
            shadow: "shadow-cyan-600",
            alt: "Jquery profile",
        },
        {
            id: 12,
            src: Php,
            name: "Php",
            shadow: "shadow-purple-300",
            alt: "Php profile",
        },
    ];
    return (
        <main
            name="about"
            className={`${
                darkMode && "dark"
            } min-h-screen dark:bg-[#101010] pt-20 md:pt-10 bg-white`}
        >
            <article className="flex flex-col lg:flex-row px-4 py-16 gap-2 lg:gap-10 justify-between items-center min-h-screen max-w-screen-lg mx-auto">
                <section className="lg:max-w-[50%] px-5">
                    <h2 className=" text-3xl font-semibold mb-12 w-5/6 dark:text-white underline underline-offset-8">
                        About me
                    </h2>
                    <p className="my-8 text-xl text-justify dark:text-white leading-loose">
                        My name is{" "}
                        <span className="bg-[#08D9D6]">
                            Edwardson Andrade Jr.
                        </span>
                        , and I'm from Minglanilla, Cebu. I hold a{" "}
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
                </section>
                <section className="w-full lg:w-[45%] flex justify-center items-center p-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4 p-2">
                        {techs.map(({ id, src, alt, name }) => {
                            return (
                                <div
                                    key={id}
                                    className={`size-28 flex flex-col gap-2 justify-center items-center rounded-md hover:-translate-y-2 duration-700 bg-white shadow-md`}
                                >
                                    <img
                                        src={src}
                                        className={`size-10`}
                                        alt={alt}
                                    />
                                    <p className="text-xs text-gray-400">
                                        {name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </article>
        </main>
    );
};

export default About;
