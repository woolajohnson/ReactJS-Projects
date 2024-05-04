import React from "react";
import ShoppingCart from "../assets/images/shopping.png";
import OnOff from "../assets/images/on_off.png";
import Sports from "../assets/images/sports.png";
import OnePunch from "../assets/images/onepunch.png";

const Projects = ({ darkMode, toggleDarkMode }) => {
    const toggleMode = (menu) => {
        toggleDarkMode(menu);
    };
    const projectImages = [
        {
            id: 1,
            src: ShoppingCart,
            alt: "Shopping Cart",
            title: "Shopping Cart App",
            stack: "Tech Stack - CodeIgniter, Bootststrap",
        },
        {
            id: 2,
            src: OnOff,
            alt: "Lights On, Lights Off",
            title: "Lights On, Lights Off App",
            stack: "Tech Stack - ReactJs, Html, Css",
        },
        {
            id: 3,
            src: Sports,
            alt: "Sports Player",
            title: "Sports Player App",
            stack: "Tech Stack - CodeIgniter, Bootstrap, Ajax",
        },
        {
            id: 4,
            src: OnePunch,
            alt: "React Bootstrap",
            title: "React-Bootstrap App",
            stack: "Tech Stack - Reactjs, React-Bootstrap",
        },
    ];
    return (
        <main
            name="projects"
            className={`${
                darkMode && "dark"
            } min-h-screen dark:bg-[#101010] pt-20`}
        >
            <article className="px-4 py-2 max-w-screen-lg mx-auto w-full">
                <h2 className=" text-3xl font-bold mb-6 text-center dark:text-white">
                    Projects
                </h2>
                <section className="grid grid-cols-2 px-2 py-4 gap-12 mb-11">
                    {projectImages.map(({ id, src, alt, title, stack }) => {
                        return (
                            <div
                                key={id}
                                className="shadow-lg hover:scale-105 duration-1000 shadow-[#08D9D6] bg-gray-100 border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <h4 className="text-center text-white bg-slate-800 py-3 text-xl font-semibold">
                                    {title}
                                </h4>
                                <img src={src} alt={alt} />
                                <h4 className="p-4 text-lg font-semibold text-center">
                                    {stack}
                                </h4>
                                <div className="flex justify-center gap-4 py-4">
                                    <a
                                        href="https://github.com/woolajohnson"
                                        target="_blank"
                                        className="py-2 px-5 bg-slate-800 text-white rounded-md hover:bg-slate-700 duration-300"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href="https://github.com/woolajohnson"
                                        target="_blank"
                                        className="py-2 px-5 bg-slate-800 text-white rounded-md hover:bg-slate-700 duration-300"
                                    >
                                        View code
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </article>
        </main>
    );
};

export default Projects;
