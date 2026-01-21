import React from 'react'

function Setting() {
    return (
        <div className="ml-4 w-[78%] bg-[#F5F8FF] border-[1.8px] rounded-xl p-4 overflow-y-auto">
            {/* Header */}
            <div className='flex justify-between px-2'>
                <div>
                    <h1 className="cursor-pointer text-black font-semibold">
                        Update Password
                    </h1>
                    <div className='w-8 ml-1 rounded-md -mt-1 h-[2px] bg-[#F24E1E]'></div>
                </div>
            </div>

            <div className='mt-6 flex ml-3'>
                <img className='mr-auto relative h-20 w-20' src="/images/iclogo.png" alt="" />
                <div className='w-full text-start ml-3 mt-4 bg-[#F5F8FF] relative'>
                    <h2>Sachin Vadhel</h2>
                    <h6>sachinvadhel@gmail.com</h6>
                </div>
            </div>

            <div className='text-black w-full mt-4 flex flex-col border-[#A1A3AB] border-[1.8px] rounded-xl p-4 justify-center'>
                <h1 className='font-medium text-md mb-1'>Current Password</h1>
                <input
                    type="text"
                    name="text"
                    // value={login.email}
                    // onChange={handleChange}
                    className="text-[#999999] px-4 py-2 text-md w-[70%] border-[#565454] border-[1px] rounded-md font-medium outline-focus:none" />

                <h1 className='font-medium text-md mt-4'>New Password</h1>
                <input
                    type="text"
                    name="text"
                    // value={login.password}
                    // onChange={handleChange}
                    className="text-[#999999] px-4 py-2 text-md w-[70%] border-[#565454] border-[1px] rounded-md font-medium outline-focus:none" />

                <h1 className='font-medium text-md mt-4'>Confirm Password</h1>
                <input
                    type="text"
                    name="text"
                    // value={login.email}
                    // onChange={handleChange}
                    className="text-[#999999] px-4 py-2 text-md w-[70%] border-[#565454] border-[1px] rounded-md font-medium outline-focus:none" />
                <div className='flex mt-3'>
                    <button className='mt-5 w-fit bg-[#F24E1E] text-white rounded-md px-4'>Update Password</button>
                    <button className='mt-5 ml-6 w-fit bg-[#F24E1E] text-white rounded-md px-6 py-2'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Setting