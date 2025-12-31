import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";


function Register() {

    const [form, setForm] = useState({
        email: "",
        pass1: "",
        pass2: "",
        terms: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async () => {
        const { email, pass1, pass2, terms } = form;

        if (pass1.length < 6) {
            toast.error("Password must be at least 6 characters!");
            return;
        }
        if (pass1 !== pass2) {
            toast.error("Passwords do not match!");
            return;
        }

        if (!terms) {
            toast.error("Accept terms!");
            return;
        }

        console.log("Firebase Auth:", auth);

        try {
            const userCredential =
                await createUserWithEmailAndPassword(auth, email, pass1);
            if (userCredential && userCredential.user) {
                const user = userCredential.user;
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    uid: user.uid,
                });
            }
            toast.success("Account created!");
            navigate("/");
        } catch (error) {
            console.error("REGISTER ERROR:", error.code, error.message);
            toast.error(error.message);
        }
    };

    return (
        <div>
            <div className='min-h-screen w-full h-[100vh] relative'>
                <ToastContainer />
                <img className='fixed h-[100vh] w-full object-cover' src="/images/loginbg.png" alt="" />

                {/* CENTER */}
                <div className='absolute flex justify-baseline left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] h-[87%] bg-white'>
                    <img className='flex mt-24 mb-2 ml-3' src="/images/icregister.png" alt="" />
                    <div className='text-black w-full me-24 ml-52 mt-4'>
                        <h1 className='font-bold text-2xl mb-4'>Sign Up</h1>

                        <div className='flex py-2.5 px-4 items-center border-[#565454] border-[1px] rounded-md'>
                            <img className='w-5 h-fit' src="/images/rg1.png" alt="" />
                            <input type="text" placeholder="Enter First Name"
                                className="text-[#999999] text-md ml-3 w-full font-medium focus:outline-none focus:ring-0 focus:border-transparent" />
                        </div>

                        <div className='mt-4 flex py-2.5 px-4 items-center border-[#565454] border-[1px] rounded-md'>
                            <img className='w-5 h-fit' src="/images/rg2.png" alt="" />
                            <input type="text" placeholder="Enter Last Name"
                                className="text-[#999999] text-md ml-3 w-full font-medium focus:outline-none focus:ring-0 focus:border-transparent" />
                        </div>

                        <div className='mt-4 flex py-2.5 px-4 items-center border-[#565454] border-[1px] rounded-md'>
                            <img className='w-5 h-fit' src="/images/rg3.png" alt="" />
                            <input type="text" placeholder="Enter Username"
                                className="text-[#999999] text-md ml-3 w-full font-medium focus:outline-none focus:ring-0 focus:border-transparent" />
                        </div>

                        <div className='mt-4 flex py-2.5 px-4 items-center border-[#565454] border-[1px] rounded-md'>
                            <img className='w-5 h-fit' src="/images/rg4.png" alt="" />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter Email"
                                className="text-[#999999] text-md ml-3 w-full font-medium focus:outline-none focus:ring-0 focus:border-transparent" />
                        </div>

                        <div className='mt-4 flex py-2.5 px-4 items-center border-[#565454] border-[1px] rounded-md'>
                            <img className='w-5 h-fit' src="/images/rg5.png" alt="" />
                            <input
                                type="password"
                                name="pass1"
                                value={form.pass1}
                                onChange={handleChange}
                                placeholder="Enter Password"
                                className="text-[#999999] text-md ml-3 w-full font-medium focus:outline-none focus:ring-0 focus:border-transparent" />
                        </div>

                        <div className='mt-4 flex py-2.5 px-4 items-center border-[#565454] border-[1px] rounded-md'>
                            <img className='w-5 h-fit' src="/images/rg6.png" alt="" />
                            <input
                                type="password"
                                name="pass2"
                                value={form.pass2}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className="text-[#999999] text-md ml-3 w-full font-medium focus:outline-none focus:ring-0 focus:border-transparent" />
                        </div>

                        <label className="mt-3 flex items-center text-sm text-gray-600">
                            <input type="checkbox" onChange={handleChange} name="terms" />
                            <span className="text-md ml-2 text-[#212427]">I agree to all terms </span>
                        </label>
                        <button onClick={handleSubmit} className='mt-2 bg-[#FF9090] text-white rounded-[3px] px-5 py-2.5'>Register</button>
                        <p
                            className="mt-2 text-sm text-center md:text-left cursor-pointer"
                        >
                            Already have an account?
                            <span
                                onClick={() => navigate("/")}
                                className="text-[#008BD9] font-medium ml-1">Log In</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register