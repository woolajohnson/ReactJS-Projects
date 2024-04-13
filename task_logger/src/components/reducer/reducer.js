export const reducer = (tasks, action) => {
    switch (action.type) {
        case "ADD_SPRINT":
            const newSprint = [...tasks.sprint, action.payload];
            return { ...tasks, sprint: newSprint };
        case "ADD_BACKLOG":
            const newBacklog = [...tasks.backlog, action.payload];
            return { ...tasks, backlog: newBacklog };
        case "SELECT_STATUS":
            if (action.payload.designation == "sprint") {
                const updatedSprint = tasks.sprint.map((task) => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            status: action.payload.newStatus,
                        };
                    }
                    return task;
                });
                return {
                    ...tasks,
                    sprint: updatedSprint,
                };
            }
            if (action.payload.designation == "backlog") {
                const updatedBacklog = tasks.backlog.map((task) => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            status: action.payload.newStatus,
                        };
                    }
                    return task;
                });
                return {
                    ...tasks,
                    backlog: updatedBacklog,
                };
            }
        case "SET_TASKS":
            console.log(action.payload);
            return action.payload;
        default:
            return tasks;
    }
};
