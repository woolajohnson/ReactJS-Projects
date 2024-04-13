import React from "react";

const TaskStatus = ({ tasks, handleOptionChange }) => {
    return (
        <section className=" max-w-screen-xl my-2 flex justify-around mx-auto items-top">
            {/*Sprint task here */}
            <div className="w-[35rem] shadow-md  rounded-md p-10 bg-[#F6F5F5]">
                <div className="flex justify-between mb-8">
                    <h2 className="text-xl font-semibold">
                        Sprint ({tasks.sprint.length})
                    </h2>
                    <span className="text-xl font-semibold">
                        {tasks.sprint.length <= 0
                            ? 0
                            : Math.floor(
                                  ((tasks.sprint.filter(
                                      (task) => task.status == "completed"
                                  ).length *
                                      100 +
                                      tasks.sprint.filter(
                                          (task) => task.status == "ongoing"
                                      ).length *
                                          50) /
                                      (tasks.sprint.length * 100)) *
                                      100
                              )}
                        %
                    </span>
                </div>
                {tasks.sprint.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`flex justify-between mb-3 px-3 py-4 border-2 rounded-md ${
                                item.status === "pending"
                                    ? "border-red-500"
                                    : item.status === "ongoing"
                                    ? "border-blue-500"
                                    : item.status === "completed"
                                    ? "border-green-500"
                                    : "border-red-500"
                            }`}
                        >
                            <p>{item.title}</p>
                            <form>
                                <input
                                    type="radio"
                                    name={item.id}
                                    id="pending"
                                    value="pending"
                                    className="ml-4 mr-1"
                                    checked={item.status === "pending"}
                                    onChange={(e) =>
                                        handleOptionChange(
                                            e,
                                            item.id,
                                            item.designation
                                        )
                                    }
                                />
                                <label htmlFor={item.id}>Pending</label>
                                <input
                                    type="radio"
                                    name={item.id}
                                    id="ongoing"
                                    value="ongoing"
                                    className="ml-4 mr-1"
                                    checked={item.status === "ongoing"}
                                    onChange={(e) =>
                                        handleOptionChange(
                                            e,
                                            item.id,
                                            item.designation
                                        )
                                    }
                                />
                                <label htmlFor={item.id}>Ongoing</label>
                                <input
                                    type="radio"
                                    name={item.id}
                                    id="completed"
                                    value="completed"
                                    className="ml-4 mr-1"
                                    checked={item.status === "completed"}
                                    onChange={(e) =>
                                        handleOptionChange(
                                            e,
                                            item.id,
                                            item.designation
                                        )
                                    }
                                />
                                <label htmlFor={item.id}>Completed</label>
                            </form>
                        </div>
                    );
                })}
                {tasks.sprint.length > 0 && (
                    <div className="mt-5 text-center text-lg font-semibold">
                        Last added:{" "}
                        <span className="text-blue-600">
                            {new Date(
                                tasks.sprint[tasks.sprint.length - 1].id
                            ).toLocaleString()}
                        </span>
                    </div>
                )}
            </div>
            {/*Backlog task here */}
            <div className="w-[35rem] shadow-md rounded-md p-10 bg-[#F6F5F5]">
                <div className="flex justify-between mb-8">
                    <h2 className="text-xl font-semibold">
                        Backlog ({tasks.backlog.length})
                    </h2>
                    <span className="text-xl font-semibold">
                        {tasks.backlog.length <= 0
                            ? 0
                            : Math.floor(
                                  ((tasks.backlog.filter(
                                      (task) => task.status == "completed"
                                  ).length *
                                      100 +
                                      tasks.backlog.filter(
                                          (task) => task.status == "ongoing"
                                      ).length *
                                          50) /
                                      (tasks.backlog.length * 100)) *
                                      100
                              )}
                        %
                    </span>
                </div>
                {tasks.backlog.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`flex justify-between mb-3 px-3 py-4 border-2 rounded-md ${
                                item.status === "pending"
                                    ? "border-red-500"
                                    : item.status === "ongoing"
                                    ? "border-blue-500"
                                    : item.status === "completed"
                                    ? "border-green-500"
                                    : "border-red-500"
                            }`}
                        >
                            <p>{item.title}</p>
                            <form>
                                <input
                                    type="radio"
                                    name={item.id}
                                    id="pending"
                                    value="pending"
                                    className="ml-4 mr-1"
                                    checked={item.status === "pending"}
                                    onChange={(e) =>
                                        handleOptionChange(
                                            e,
                                            item.id,
                                            item.designation
                                        )
                                    }
                                />
                                <label htmlFor={item.id}>Pending</label>
                                <input
                                    type="radio"
                                    name={item.id}
                                    id="ongoing"
                                    value="ongoing"
                                    className="ml-4 mr-1"
                                    checked={item.status === "ongoing"}
                                    onChange={(e) =>
                                        handleOptionChange(
                                            e,
                                            item.id,
                                            item.designation
                                        )
                                    }
                                />
                                <label htmlFor={item.id}>Ongoing</label>
                                <input
                                    type="radio"
                                    name={item.id}
                                    id="completed"
                                    value="completed"
                                    className="ml-4 mr-1"
                                    checked={item.status === "completed"}
                                    onChange={(e) =>
                                        handleOptionChange(
                                            e,
                                            item.id,
                                            item.designation
                                        )
                                    }
                                />
                                <label htmlFor={item.id}>Completed</label>
                            </form>
                        </div>
                    );
                })}
                {tasks.backlog.length > 0 && (
                    <div className="mt-50 text-center text-lg font-semibold">
                        Last added:{" "}
                        <span className="text-blue-600">
                            {new Date(
                                tasks.backlog[tasks.backlog.length - 1].id
                            ).toLocaleString()}
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TaskStatus;
