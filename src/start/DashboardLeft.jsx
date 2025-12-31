import React from 'react'
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

function DashboardLeft({ menuItems, active, setActive }) {

    const navigate = useNavigate();
    const logoutmethod = () => {
        auth.signOut().then(() => {
            navigate('/');
        }).catch((error) => {
        });
    }

    return (
        <div>
            <div className='w-full text-center bg-[#F5F8FF] h-screen relative'>
                <img className='ml-auto mr-auto relative w-20' src="/images/iclogo.png" alt="" />
                <div className='bg-[#FF6767] -mt-10 pt-13 h-screen text-center rounded-r-xl shadow-md w-full text-white'>
                    <h2>Sachin Vadhel</h2>
                    <h6>sachinvadhel@gmail.com</h6>
                    <nav className="flex flex-col px-7 py-2">
                        {menuItems.map((item) => {
                            const isActive = active === item.id;
                            return (
                                <button
                                    className={`items-center my-1 w-full flex gap-3 px-4 py-3 rounded-xl text-left transition
                                                        ${isActive ? "bg-white text-[#FF6B6B] shadow-md" : "text-white hover:bg-white/20"}`}
                                    key={item.id}
                                    onClick={() => setActive(item.id)}>
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className={`h-5 w-5 transition duration-200 ${!isActive
                                            ? "brightness-0 invert opacity-100"
                                            : "opacity-100"}`} />
                                    <span className="ml-1 font-medium">{item.label}</span>
                                </button>
                            );
                        })}
                        <button
                            onClick={() => logoutmethod()}
                            className={`cursor-pointer mt-9 items-center w-full flex gap-3 px-4 rounded-xl text-left transition
                                                        "text-white hover:bg-white/20"}`}
                        >
                            <img
                                src="/images/iclogout.png"
                                alt=""
                                className={`h-5 w-5 transition duration-200 
                                                "opacity-100"}`} />
                            <span className="ml-1 font-medium">Log Out</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default DashboardLeft