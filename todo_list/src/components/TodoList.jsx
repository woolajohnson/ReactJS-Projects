import React, { useReducer, useState } from "react";
const reducer = (todos, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const listOfTasks = [...todos.tasks, action.payload];
            return {
                ...todos,
                tasks: listOfTasks,
            };
        case "SELECT_STATUS":
            const updatedTasks = todos.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        status: action.payload.newStatus,
                    };
                }
                return task;
            });
            return {
                ...todos,
                tasks: updatedTasks,
            };
        default:
            return todos;
    }
};
const defaultValues = {
    tasks: [],
};

const TodoList = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
    const [todos, dispatch] = useReducer(reducer, defaultValues);
    const handleOptionChange = (e, id) => {
        const newStatus = e.target.value;
        dispatch({ type: "SELECT_STATUS", payload: { newStatus, id } });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle && taskDetails) {
            const newItems = {
                id: Date.now(),
                status: "pending",
                taskTitle,
                taskDetails,
            };
            dispatch({ type: "ADD_TODO", payload: newItems });
            setTaskTitle("");
            setTaskDetails("");
        }
    };

    return (
        <main className="flex flex-col gap-10 justify-center max-w-screen-lg items-center mx-auto mt-8 p-2">
            <h1 className="text-4xl text-blue-500 font-semibold">
                To-do List App
            </h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-2">
                    <label
                        className="mr-2 text-md text-gray-500"
                        htmlFor="title"
                    >
                        Task
                    </label>
                    <input
                        className="border border-gray-300 outline-none indent-2 p-1 rounded"
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label
                        className="mr-2 text-md text-gray-500"
                        htmlFor="details"
                    >
                        Details
                    </label>
                    <textarea
                        className="border border-gray-300 outline-none indent-2 p-1 rounded"
                        name="details"
                        id="details"
                        cols="30"
                        rows="3"
                        onChange={(e) => setTaskDetails(e.target.value)}
                    ></textarea>
                </div>

                <button className="py-2 px-4 mb-5 mt-3 bg-green-600 text-white shadow rounded">
                    Add Todo
                </button>
            </form>
            <section className="grid grid-cols-3 gap-5 my-5">
                {todos.tasks.map((todo) => {
                    return (
                        <div
                            key={todo.id}
                            className="shadow-md bg-gray-200 rounded overflow-hidden"
                        >
                            <h2
                                className={`p-3 text-lg font-semibold text-center ${
                                    todo.status === "pending"
                                        ? "bg-red-500"
                                        : todo.status === "ongoing"
                                        ? "bg-blue-500"
                                        : todo.status === "completed"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                }`}
                            >
                                {todo.taskTitle}
                            </h2>
                            <p className="p-4 text-justify">
                                {todo.taskDetails}
                            </p>
                            <form className="p-4 text-sm">
                                <h2 className="mb-3 text-lg font-semibold">
                                    Marked task as:{" "}
                                </h2>
                                <input
                                    type="radio"
                                    name={todo.id}
                                    id="pending"
                                    value="pending"
                                    onChange={(e) =>
                                        handleOptionChange(e, todo.id)
                                    }
                                />
                                <label className="ml-1 mr-3" htmlFor={todo.id}>
                                    Pending
                                </label>
                                <input
                                    type="radio"
                                    name={todo.id}
                                    id="ongoing"
                                    value="ongoing"
                                    onChange={(e) =>
                                        handleOptionChange(e, todo.id)
                                    }
                                />
                                <label className="ml-1 mr-3" htmlFor={todo.id}>
                                    Ongoing
                                </label>
                                <input
                                    type="radio"
                                    name={todo.id}
                                    id="completed"
                                    value="completed"
                                    onChange={(e) =>
                                        handleOptionChange(e, todo.id)
                                    }
                                />
                                <label className="ml-1 mr-3" htmlFor={todo.id}>
                                    Completed
                                </label>
                            </form>
                        </div>
                    );
                })}
            </section>
        </main>
    );
};

export default TodoList;
