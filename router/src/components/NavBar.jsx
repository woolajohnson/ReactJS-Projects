import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ toggleMode, toggleStateMode }) => {
    const links = [
        {
            id: 1,
            destination: "/",
            name: "Home",
        },
        {
            id: 2,
            destination: "/about",
            name: "About me",
        },
        {
            id: 3,
            destination: "/projects",
            name: "Projects",
        },
    ];
    return (
        <nav className="py-10 px-4 max-w-screen-lg mx-auto flex justify-end items-center mb-10">
            <ul className="flex">
                {links.map(({ id, destination, name }) => {
                    return (
                        <li>
                            <Link
                                key={id}
                                to={destination}
                                className="mx-3 text-xl font-medium hover:text-[#08D9D6] duration-200 dark:text-white"
                            >
                                {name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {toggleStateMode == "dark" ? (
                <button
                    onClick={() => toggleMode("")}
                    className="text-2xl font-medium dark:text-white ml-2 text-[#e7ce72]"
                >
                    <i class="fa-solid fa-moon text-[#e7ce72]"></i>
                </button>
            ) : (
                <button
                    onClick={() => toggleMode("dark")}
                    className="text-2xl font-medium dark:text-white ml-2"
                >
                    <i className="fa-solid fa-sun text-[#e7ce72]"></i>
                </button>
            )}
        </nav>
    );
};

export default NavBar;
