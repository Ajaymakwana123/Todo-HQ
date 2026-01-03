import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const VitalTaskView = ({ tasks }) => {
    const [activeTask, setActiveTask] = useState(tasks[0]);

    return (
        <div className="flex w-[78%] ml-3 p-4 mt-4 px-3 gap-3">
            {/* ================= LEFT SIDE (TASK LIST) ================= */}
            <div className="w-[45%] bg-[#F5F8FF] border-[1.8px] border-[#A1A3AB] rounded-lg p-4 overflow-y-auto">
                <div>
                    <h1
                        className="cursor-pointer text-black font-semibold">
                        Vital Tasks
                    </h1>
                    <div className='w-9 ml-1 rounded-md -mt-.5 h-[2px] bg-[#FF6767]'></div>
                </div>
                <div className="mt-4 flex flex-col gap-4 overflow-y-auto h-[54vh]">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTask(task)}
                            className={`cursor-pointer w-full flex flex-col p-2 border-[#A1A3AB] border-[1.8px] rounded-xl overflow-hidden transition
                                ${activeTask?.title === task.title
                                    ? "border-[#7c7f8a] bg-[#a1a3ab2c]"
                                    : "border-[#A1A3AB]"
                                }
                            `}>
                            <div className={`ml-1 rounded-full border-2 mt-1.5 ${task.priority === "Extreme"
                                            ? "border-[#F21E1E]"
                                            : task.priority === "Moderate"
                                                ? "border-[#42ADE2]"
                                                : "border-[#05A301]"
                                            } h-3 w-3`} />

                            <div className="flex flex-row gap-2 ml-7 -mt-4.5 justify-between">
                                <div className='w-[80%] flex justify-between'>
                                    <div>
                                        <h1 className="font-semibold text-md">{task.title}</h1>
                                        <p className="text-sm mt-2 max-h-30 text-[#747474] w-[80%]">
                                            {task.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[20%] flex me-2 flex-col items-end">
                                    <CiMenuKebab className="rotate-90" />
                                    {task.image && (
                                        <img
                                            src={task.image}
                                            alt=""
                                            className="rounded-sm w-20 h-20"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-center gap-5 mt-2 text-[.9vw] w-full text-[#747474]">
                                <p >
                                    Priority:{" "}
                                    <span
                                        className={`font-medium ${task.priority === "Extreme"
                                            ? "text-[#F21E1E]"
                                            : task.priority === "Moderate"
                                                ? "text-[#42ADE2]"
                                                : "text-[#05A301]"
                                            }`}
                                    >
                                        {task.priority}
                                    </span>

                                </p>
                                <p>Status: Not Started</p>
                                <p>Created on: {task.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= RIGHT SIDE (TASK DETAIL) ================= */}
            <div className="w-[55%] bg-[#F5F8FF] border-[1.8px] border-[#A1A3AB] rounded-xl p-5">
                {activeTask ? (
                    <>
                        {activeTask.image && (
                            <img
                                src={activeTask.image}
                                alt={activeTask.title}
                                className="w-full h-56 object-cover rounded-lg"
                            />
                        )}

                        <div className="flex justify-between items-start mt-4">
                            <h1 className="text-xl font-semibold">
                                {activeTask.title}
                            </h1>
                            <CiMenuKebab className="rotate-90 cursor-pointer" />
                        </div>

                        <p className="text-[#747474] mt-3 leading-relaxed">
                            {activeTask.description}
                        </p>

                        <div className="mt-4 flex gap-6 text-sm">
                            <p>
                                Priority:{" "}
                                <span
                                    className={`font-medium
                                        ${activeTask.priority === "Extreme"
                                            ? "text-[#F21E1E]"
                                            : activeTask.priority === "Moderate"
                                                ? "text-[#42ADE2]"
                                                : "text-[#05A301]"
                                        }
                                    `}
                                >
                                    {activeTask.priority}
                                </span>
                            </p>

                            <p className="text-[#747474]">
                                Created on: {activeTask.date}
                            </p>
                        </div>

                        <p className="mt-3 text-sm">
                            Status:{" "}
                            <span className="text-[#F21E1E]">
                                Not Started
                            </span>
                        </p>
                    </>
                ) : (
                    <p className="text-center text-[#747474] mt-20">
                        Select a task to view details
                    </p>
                )}
            </div>
        </div >
    );
};

export default VitalTaskView;
