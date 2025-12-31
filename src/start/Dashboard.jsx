import React, { use, useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import { auth } from "../firebase";
import { FaPlus } from "react-icons/fa6";
import AddTaskModal from './AddTaskModal';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CiMenuKebab } from "react-icons/ci";
import DashboardLeft from './DashboardLeft';
import Fullscreenview from './Fullscreenview';


function Dashboard() {

    const [active, setActive] = useState("dashboard");
    const [userName, setUserName] = useState("");
    const [percents, setPercents] = useState(40);
    const [percents2, setPercents2] = useState(84);
    const [percents3, setPercents3] = useState(40);

    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);


    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    const addTask = (task) => {
        const updated = [...tasks, task];
        setTasks(updated);
        localStorage.setItem("tasks", JSON.stringify(updated));
        setShowModal(false);
    };

    useEffect(() => {
        const user = auth.currentUser;

        if (user) {
            if (user.displayName) {
                setUserName(user.displayName);
            } else {
                setUserName(user.email.split("@")[0]);
            }
        }
    }, []);


    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", {
        weekday: "long",
    });
    const formattedDate = today.toLocaleDateString("en-GB");

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: "/images/icd1.png" },
        { id: "vital", label: "Vital Task", icon: "/images/icd2.png" },
        { id: "mytask", label: "My Task", icon: "/images/icd3.png" },
        { id: "categories", label: "Task Categories", icon: "/images/icd4.png" },
        { id: "settings", label: "Settings", icon: "/images/icd5.png" },
        { id: "help", label: "Help", icon: "/images/icd6.png" },
    ];

    return (
        <div>
            <div className='bg-[#F5F8FF] overflow-hidden w-full min-h-screen h-[100vh] relative'>
                <div className='bg-[#F8F8F8] py-4 px-7 items-center justify-between flex shadow-[10px] shadow-amber-50'>
                    <h1 className='text-2xl font-semibold text-[#FF6767]'>Dash<span className='text-black'>board</span></h1>
                    <div className="bg-[#F5F8FF] w-full max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search your task here..."
                                className="w-full h-12 pl-5 rounded-xl shadow-md outline-none text-[#A1A3AB] bg-[#fafbff] text-md ml-1 font-medium focus:outline-none"
                            />
                            <div className='bg-[#FF6767] absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-lg p-2.5'>
                                <IoSearch className='text-white' />
                            </div>
                        </div>
                    </div>


                    <div className='flex gap-6 items-center'>
                        <div className='flex gap-2.5'>
                            <div className=' bg-[#FF6767] rounded-lg p-2.5'>
                                <RiNotification3Line className='text-white w-5 h-5' />
                            </div>
                            <div className=' bg-[#FF6767] rounded-lg p-2.5'>
                                <LuCalendarDays className='text-white w-5 h-5' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-black font-medium'>{dayName}</h1>
                            <h1 className='text-[#3ABEFF] font-medium'>{formattedDate}</h1>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    {/* LEft Menu */}
                    <DashboardLeft className="w-[22%] text-center bg-[#F5F8FF] h-screen relative"
                        menuItems={menuItems} active={active} setActive={setActive} />
                    {/* Center Part */}

                    <div className='w-[78%] p-4'>
                        <div className='flex mt-4 px-3 justify-between'>
                            <h1 className='text-[2.2vw] font-medium text-black'>Welcome Back, {userName} 👋</h1>
                            <div className='flex border-[1.8px] py-1.5 px-4 items-center border-[#FF6767] rounded-lg cursor-pointer'>
                                <img className='w-5 h-3 mr-1.5' src="/images/invite.png" alt="" />
                                <h3 className='text-[#FF6767]'>Invite</h3>
                            </div>
                        </div>
                        {!selectedTask ? (
                            <div className='border-[#a1a3ab9d] p-4 flex rounded mx-3 my-5 w-full h-full border-[1.8px]'>
                                <div className='w-[54%] border-[#a1a3ab9d] bg-[#F5F8FF] p-4 rounded-xl border-[1.8px] h-full flex flex-col'>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <img src="/images/todo1.png" alt="" />
                                            <h1 className='ml-1 font-medium text-[#FF6767]'>To-Do</h1>
                                        </div>
                                        <div onClick={() => setShowModal(true)} className='cursor-pointer flex items-center'>
                                            <FaPlus className='text-[#F24E1E]' />
                                            <h3 className='text-[#A1A3AB]'>Add task</h3>
                                        </div>
                                    </div>

                                    <div className='mt-1 flex'>
                                        <h2 className='text-black'>20 June</h2>
                                        <h2 className='text-[#A1A3AB] ml-2'>•Today</h2>
                                    </div>

                                    <div className="mt-4 flex flex-col gap-4 overflow-y-auto h-[54vh]">
                                        {tasks.map((task, index) => (
                                            <div
                                                key={index}
                                                onClick={() => setSelectedTask(task)}
                                                className="w-full flex flex-col p-2 border-[#A1A3AB] border-[2px] rounded-xl">
                                                <div className="ml-1 rounded-full border-2 mt-1.5 border-[#05A301] h-3 w-3" />

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

                                <div className='ml-4 w-[46%] h-fit'>
                                    {/* Task Status */}
                                    <div className='drop-shadow-sm px-4 py-2 rounded-xl bg-[rgb(245,248,255)]'>
                                        <div className='flex items-center'>
                                            <img src="/images/todo2.png" alt="" />
                                            <h1 className='ml-1 font-medium text-[#FF6767]'>Task Status</h1>
                                        </div>
                                        <div className='flex px-3 items-center py-2 gap-10'>
                                            <div>
                                                <CircularProgressbar className='h-26 mt-2'
                                                    styles={buildStyles(
                                                        {
                                                            pathColor: `#05A301`,
                                                            textColor: '#000',
                                                            textSize: '1.5vw',
                                                            trailColor: '#D9D9D9',
                                                            backgroundColor: '#3e98c7',
                                                            strokeLinecap: 'butt',
                                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                                            transform: 'rotate(0.25turn)',
                                                        }
                                                    )} value={percents} text={`${percents}%`} />
                                                <h2 className='mt-2 font-medium text-sm tracking-tight'>🟢 Completed</h2>
                                            </div>

                                            <div>
                                                <CircularProgressbar className='h-26 mt-2'
                                                    styles={buildStyles(
                                                        {
                                                            pathColor: `#0225FF`,
                                                            textColor: '#000',
                                                            textSize: '1.5vw',
                                                            trailColor: '#D9D9D9',
                                                            backgroundColor: '#3e98c7',
                                                            strokeLinecap: 'butt',
                                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                                            transform: 'rotate(0.25turn)',
                                                        }
                                                    )} value={percents2} text={`${percents2}%`} />
                                                <h2 className='mt-2 font-medium text-sm tracking-tight'>🔵 In Progress</h2>
                                            </div>

                                            <div>
                                                <CircularProgressbar className='h-26 mt-2'
                                                    styles={buildStyles(
                                                        {
                                                            pathColor: `#F21E1E`,
                                                            textColor: '#000',
                                                            textSize: '1.5vw',
                                                            trailColor: '#D9D9D9',
                                                            backgroundColor: '#3e98c7',
                                                            strokeLinecap: 'butt',
                                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                                            transform: 'rotate(0.25turn)',
                                                        }
                                                    )} value={percents3} text={`${percents3}%`} />
                                                <h2 className='mt-2 font-medium text-sm tracking-tight'>🔴 Not Started</h2>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Completed Task */}
                                    <div className='mt-3 drop-shadow-sm px-4 py-2 rounded-xl bg-[#F5F8FF]'>
                                        <div className='flex items-center'>
                                            <img src="/images/todo3.png" alt="" />
                                            <h1 className='ml-2 font-medium text-[#FF6767]'>Completed Task</h1>
                                        </div>

                                        <div className='flex flex-col-reverse mt-3 gap-3 px-5 py-3'>
                                            <div className='w-fit max-w-fit flex p-2 justify-center border-[#A1A3AB] border-[2px] rounded-xl'>
                                                <div className='ml-1 rounded-full border-2 mt-1 border-[#05A301] h-3.5 w-4.5' />
                                                <div className='ml-2.5 flex flex-col gap-1.5'>
                                                    <h1 className='font-semibold'>Walk the dog</h1>
                                                    <p className='text-[.9vw] text-[#747474] w-[80%]'>Take the dog to the park and bring treats as well.</p>
                                                    <p className='text-[.9vw]'>Status: <span className='text-[#05A301]'>Completed</span></p>
                                                    <p className='text-sm text-[#747474]'>Completed 2 days ago.</p>
                                                </div>
                                                <div className='mr-5 flex flex-col items-end'>
                                                    <CiMenuKebab className='rotate-90 mb-2' />
                                                    <img className='rounded-sm w-32 h-24' src="/images/demo.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {showModal && (
                                    <AddTaskModal onClose={() => setShowModal(false)} onAddTask={addTask} />
                                )}
                            </div>
                        ) : (
                            /* ================= FULL TASK VIEW ================= */
                            <div className="border-[#a1a3ab9d] p-4 rounded mx-3 my-5 w-full h-fu border-[1.8px] bg-[#F5F8FF]">
                                <Fullscreenview selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Dashboard