import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const TaskMasterDetailView = ({
    title,
    tasks,
    onEdit,
    onDelete,
}) => {
    const [activeTask, setActiveTask] = useState(tasks[0] || null);

    return (
        <div className="w-[78%] p-3">
            <h1 className="text-[2vw] font-medium mb-4 text-black">
                {title}
            </h1>

            <div className="flex gap-5 h-[75vh]">

                {/* LEFT */}
                <div className="w-[45%] bg-[#F5F8FF] border-[1.8px] rounded-xl p-4 overflow-y-auto">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTask(task)}
                            className={`mb-4 cursor-pointer border-[1.8px] rounded-xl overflow-hidden
                                ${activeTask?.id === task.id
                                    ? "border-[#FF6767] bg-white"
                                    : "border-[#A1A3AB]"
                                }`}
                        >
                            {task.image && (
                                <img
                                    src={task.image}
                                    className="w-full h-32 object-cover"
                                />
                            )}

                            <div className="p-3">
                                <h2 className="font-semibold">
                                    {task.title}
                                </h2>

                                <p className="text-sm text-[#747474] line-clamp-2 mt-1">
                                    {task.description}
                                </p>

                                <span className={`text-sm font-medium mt-2 inline-block
                                    ${task.priority === "Extreme"
                                        ? "text-[#F21E1E]"
                                        : task.priority === "Moderate"
                                            ? "text-[#42ADE2]"
                                            : "text-[#05A301]"
                                    }`}>
                                    {task.priority}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT */}
                <div className="w-[55%] bg-[#F5F8FF] border-[1.8px] rounded-xl p-5">
                    {activeTask ? (
                        <>
                            {activeTask.image && (
                                <img
                                    src={activeTask.image}
                                    className="w-full h-56 object-cover rounded-lg"
                                />
                            )}

                            <div className="flex justify-between mt-4">
                                <h1 className="text-xl font-semibold">
                                    {activeTask.title}
                                </h1>
                                <CiMenuKebab className="rotate-90 cursor-pointer" />
                            </div>

                            <p className="text-[#747474] mt-3">
                                {activeTask.description}
                            </p>

                            <div className="mt-4 flex gap-6 text-sm">
                                <p>
                                    Priority:{" "}
                                    <span className="font-medium">
                                        {activeTask.priority}
                                    </span>
                                </p>
                                <p>Created: {activeTask.date}</p>
                            </div>

                            <div className="mt-5 flex gap-3">
                                <button
                                    onClick={() => onEdit(activeTask)}
                                    className="px-4 py-1.5 bg-[#FF6767] text-white rounded-md"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(activeTask.id)}
                                    className="px-4 py-1.5 border border-[#FF6767] text-[#FF6767] rounded-md"
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="text-center mt-20 text-[#747474]">
                            Select a task
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskMasterDetailView;
