import React, { useState } from "react";

function Helps() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="ml-4 w-[78%] bg-[#F5F8FF] border-[1.8px] rounded-xl p-4 overflow-y-auto">

            <div className="flex justify-between px-2">
                <div>
                    <h1 className="cursor-pointer text-black font-semibold">
                        How to Use
                    </h1>
                    <div className="w-12 ml-1 rounded-md -mt-1 h-[2px] bg-[#F24E1E]"></div>
                </div>
            </div>

            {/* 1️⃣ Reset Password */}
            <div className="mb-3 mt-6">
                <div
                    onClick={() => toggleDropdown(0)}
                    className="flex justify-between items-center cursor-pointer p-4 rounded-md border"
                >
                    <h1 className="font-medium text-black">
                        How can I reset my password?
                    </h1>

                    <span
                        className={`transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""
                            }`}
                    >
                        ▼
                    </span>
                </div>

                {openIndex === 0 && (
                    <div className="mt-2 bg-white p-4 rounded-md border text-gray-700">
                        Go to <b>Settings → Update Password</b>.
                        Enter your current password and then set a new password.
                    </div>
                )}
            </div>

            {/* 2️⃣ Add Todo */}
            <div className="mb-3">
                <div
                    onClick={() => toggleDropdown(1)}
                    className="flex justify-between items-center cursor-pointer p-4 rounded-md border"
                >
                    <h1 className="font-medium text-black">
                        How to add a new todo?
                    </h1>

                    <span
                        className={`transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""
                            }`}
                    >
                        ▼
                    </span>
                </div>

                {openIndex === 1 && (
                    <div className="mt-2 bg-white p-4 rounded-md border text-gray-700">
                        Go to the Dashboard Click on the <b>Add Todo</b> button, enter your task title
                        and description, set priority and add image then click <b>Save</b>.
                    </div>
                )}
            </div>

            {/* 3️⃣ Edit Todo */}
            <div className="mb-3">
                <div
                    onClick={() => toggleDropdown(2)}
                    className="flex justify-between items-center cursor-pointer p-4 rounded-md border">
                    <h1 className="font-medium text-black">
                        How to edit an existing todo?
                    </h1>

                    <span
                        className={`transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""
                            }`}
                    >
                        ▼
                    </span>
                </div>

                {openIndex === 2 && (
                    <div className="mt-2 bg-white p-4 rounded-md border text-gray-700">
                        Click the <b>Edit</b> icon next to a todo inside a bottom right side,
                        update the details and press <b>Update</b>.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Helps;
