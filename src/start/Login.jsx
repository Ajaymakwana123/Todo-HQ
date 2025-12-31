import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";


function Login() {

    const [rememberMe, setRememberMe] = useState(false);

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        const remember = localStorage.getItem("rememberMe");
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && remember === "true") {
                navigate("/dashboard");
            }
        });

        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        if (!login.email || !login.password) {
            toast.error("Email and password required");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, login.email, login.password);

            if (rememberMe) {
                localStorage.setItem("rememberMe", "true");
            } else {
                localStorage.removeItem("rememberMe");
            }

            toast.success("Login successful!");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const navigate = useNavigate();
    return (
        <div>
            <div className='min-h-screen w-full h-[100vh] relative'>
                <ToastContainer />
                <img className='fixed h-[100vh] w-full object-cover' src="/images/loginbg.png" alt="" />

                ` {/* CENTER */}`
                <div className='absolute flex justify-baseline left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] h-[87%] bg-white'>
                    <div className='text-black w-full me-24 ml-14 mt-4 flex flex-col justify-center'>
                        <h1 className='font-bold text-2xl mb-5'>Sign In</h1>

                        <div className='flex py-2.5 px-4 items-center border-[#565454] border-[1px] rounded-md'>
                            <img className='w-5 h-fit' src="/images/rg1.png" alt="" />
                            <input
                                type="email"
                                name="email"
                                value={login.email}
                                onChange={handleChange}
                                placeholder="Enter Email"

                                className="text-[#999999] text-md ml-3 w-full font-medium outline-focus:none" />
                        </div>

                        <div className='mt-4 flex py-2.5 px-4 items-center border-[#565454] border-[1px] rounded-md'>
                            <img className='w-5 h-fit' src="/images/rg5.png" alt="" />
                            <input
                                type="password"
                                name="password"
                                value={login.password}
                                onChange={handleChange}
                                placeholder="Enter Password"
                                className="text-[#999999] text-md ml-3 w-full font-medium focus:outline-none" />
                        </div>

                        <label className="mt-3 ml-0.5 flex items-center text-sm text-gray-600">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span className="text-md ml-2.5 text-[#212427]">Remember Me</span>
                        </label>


                        <button onClick={handleLogin} className='mt-5 w-fit bg-[#FF9090] text-white rounded-[3px] px-5 py-2.5'>Login</button>

                        <div className='flex mt-5 gap-2'>
                            <p>Or, Login with </p>
                            <img src="/images/lggoogle.png" alt="" />
                        </div>
                        <p
                            className="mt-2 text-sm text-center md:text-left cursor-pointer">
                            Don’t have an account?
                            <span
                                onClick={() => navigate("/register")}
                                className="text-[#008BD9] font-medium ml-1">Create One</span>
                        </p>
                    </div>
                    <img className='flex mt-24 mb-1 ml-5' src="/images/loginbg1.png" alt="" />

                </div>
            </div>
        </div >

    )
}

export default Login
