import React, { useReducer, useState, useEffect } from "react";
import { reducer } from "./reducer/reducer";
import TaskStatus from "./TaskStatus";

const getDefaultTasks = () => {
    const savedTasks = localStorage.getItem("items");
    return savedTasks
        ? JSON.parse(savedTasks)
        : {
              sprint: [],
              backlog: [],
          };
};

const TaskLogger = () => {
    const [title, setTitle] = useState("");
    const [designation, setDesignation] = useState("sprint");
    const [dark, setDark] = useState(false);
    const [tasks, dispatch] = useReducer(reducer, getDefaultTasks());

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const savedTasks = localStorage.getItem("items");
        console.log(savedTasks);
        if (savedTasks) {
            dispatch({ type: "SET_TASKS", payload: JSON.parse(savedTasks) });
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            if (designation == "sprint") {
                dispatch({
                    type: "ADD_SPRINT",
                    payload: {
                        id: Date.now(),
                        status: "pending",
                        title,
                        designation,
                    },
                });
            }
            if (designation == "backlog") {
                dispatch({
                    type: "ADD_BACKLOG",
                    payload: {
                        id: Date.now(),
                        status: "pending",
                        title,
                        designation,
                    },
                });
            }
        }
    };
    const handleOptionChange = (e, id, designation) => {
        const newStatus = e.target.value;
        dispatch({
            type: "SELECT_STATUS",
            payload: { newStatus, id, designation },
        });
    };
    return (
        <main
            className={`pt-1 pb-6 min-h-screen bg-[#DAC0A3] ${
                dark && "dark"
            } dark:bg-[#101010]`}
        >
            {/* task logger form here */}
            <section className=" max-w-screen-lg p-5 mb-3 flex flex-col justify-center items-center gap-8 mx-auto">
                <h1 className="text-4xl font-bold text-blue-600">
                    Task Logger{" "}
                    {dark ? (
                        <button
                            onClick={() => setDark(!dark)}
                            className="text-2xl font-medium dark:text-white ml-4"
                        >
                            <i className="fa-solid fa-sun text-[#e7ce72]"></i>
                        </button>
                    ) : (
                        <button
                            onClick={() => setDark(!dark)}
                            className="text-2xl font-medium dark:text-white ml-4 text-[#e7ce72]"
                        >
                            <i class="fa-solid fa-moon text-[#101010]"></i>
                        </button>
                    )}
                </h1>
                <form
                    className="flex flex-col w-[25rem] p-14 shadow-md rounded-md bg-[#F6F5F5]"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="title" className="text-xl font-semibold">
                        Task Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="border border-gray-300 rounded p-2 indent-2 outline-none focus:border-blue-400 duration-100 mt-2 mb-5"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="" className="text-xl font-semibold">
                        Task Designation
                    </label>
                    <select
                        name="designation"
                        id="designation"
                        className="border border-gray-300 rounded p-2 indent-2 outline-none focus:border-blue-400 duration-100 mt-2 mb-5"
                        onChange={(e) => setDesignation(e.target.value)}
                    >
                        <option value="sprint">Sprint</option>
                        <option value="backlog">Backlog</option>
                    </select>
                    <button
                        type="submit"
                        className="py-2 bg-blue-600 rounded text-white mt-10"
                    >
                        Add
                    </button>
                </form>
            </section>
            <TaskStatus tasks={tasks} handleOptionChange={handleOptionChange} />
        </main>
    );
};

export default TaskLogger;
