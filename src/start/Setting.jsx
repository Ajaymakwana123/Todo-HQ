import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";


function Setting() {

    const auth = getAuth();
    const user = auth.currentUser;

    const [passwords, setPasswords] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const handleUpdatePassword = async () => {
        const { currentPassword, newPassword, confirmPassword } = passwords;

        if (!currentPassword || !newPassword || !confirmPassword) {
            toast.error("All fields are required");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("New password & Confirm password do not match");
            return;
        }

        try {
            // 🔑 Re-authenticate user with current password
            const credential = EmailAuthProvider.credential(
                user.email,
                currentPassword
            );

            await reauthenticateWithCredential(user, credential);

            // 🔄 Update password
            await updatePassword(user, newPassword);

            toast.success("Password updated successfully!");

            setPasswords({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
        } catch (error) {
            toast.error("Current password is incorrect");
        }
    };
    return (
        <div className="ml-4 w-[78%] bg-[#F5F8FF] border-[1.8px] rounded-xl p-4 overflow-y-auto">
            <ToastContainer />

            {/* Header */}
            <div className="flex justify-between px-2">
                <div>
                    <h1 className="cursor-pointer text-black font-semibold">
                        Update Password
                    </h1>
                    <div className="w-8 ml-1 rounded-md -mt-1 h-[2px] bg-[#F24E1E]"></div>
                </div>
            </div>

            {/* User Info */}
            <div className="mt-6 flex ml-3">
                <img className="mr-auto h-20 w-20" src="/images/iclogo.png" alt="" />
                <div className="w-full text-start ml-3 mt-4">
                    <h2>{user?.displayName || "User"}</h2>
                    <h6>{user?.email}</h6>
                </div>
            </div>

            {/* Password Form */}
            <div className="text-black w-full mt-4 flex flex-col border-[#A1A3AB] border-[1.8px] rounded-xl p-4">

                <h1 className="font-medium text-md mb-1">Current Password</h1>
                <input
                    type="text"
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handleChange}
                    className="px-4 py-2 w-[70%] border rounded-md"
                />

                <h1 className="font-medium text-md mt-4">New Password</h1>
                <input
                    type="text"
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handleChange}
                    className="px-4 py-2 w-[70%] border rounded-md"
                />

                <h1 className="font-medium text-md mt-4">Confirm Password</h1>
                <input
                    type="text"
                    name="confirmPassword"
                    value={passwords.confirmPassword}
                    onChange={handleChange}
                    className="px-4 py-2 w-[70%] border rounded-md"
                />

                <div className="flex mt-3">
                    <button
                        onClick={handleUpdatePassword}
                        className="mt-5 bg-[#F24E1E] text-white rounded-md px-4 py-2"
                    >
                        Update Password
                    </button>

                    <button
                        onClick={() =>
                            setPasswords({
                                currentPassword: "",
                                newPassword: "",
                                confirmPassword: "",
                            })
                        }
                        className="mt-5 ml-6 bg-[#F24E1E] text-white rounded-md px-6 py-2"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Setting