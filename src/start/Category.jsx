import React from 'react';

function Category() {
    const taskStatus = [
        { sn: 1, status: 'Completed' },
        { sn: 2, status: 'In Progress' },
        { sn: 3, status: 'Not Started' },
    ];
    const taskpriority = [
        { sn: 1, status: 'Extreme' },
        { sn: 2, status: 'Moderate' },
        { sn: 3, status: 'Low' },
    ];

    return (
        <div className="ml-4 w-[78%] bg-[#F5F8FF] border-[1.8px] rounded-xl p-4 overflow-y-auto">
            {/* Header */}
            <div className='flex justify-between px-2'>
                <div>
                    <h1 className="cursor-pointer text-black font-semibold">
                        Task Categories
                    </h1>
                    <div className='w-8 ml-1 rounded-md -mt-1 h-[2px] bg-[#F24E1E]'></div>
                </div>
                <div>
                    <h1 className="cursor-pointer text-black font-semibold">
                        Go Back
                    </h1>
                    <div className='w-14 ml-1 rounded-md -mt-1 h-[2px] bg-black'></div>
                </div>
            </div>

            <div className='mt-5 ml-3'>
                <h1 className="text-black font-semibold">
                    Task Status
                </h1>
                <div className='w-9 ml-1 rounded-md -mt-1 h-[2px] bg-[#F24E1E]'></div>

                {/* Table Container */}
                <div className="mt-2 bg-[#F8FAFF] border-[1px] rounded-lg overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-2 bg-[#F1F4FF] font-semibold text-sm">
                        <div className="px-10 py-3 border-r">SN</div>
                        <div className="px-10 py-3 text-center">Task Status</div>
                    </div>

                    {/* Table Rows */}
                    {taskStatus.map((item) => (
                        <div
                            key={item.sn}
                            className="grid grid-cols-2 text-sm border-t font-bold"
                        >
                            <div className="px-10 py-3 border-r">
                                {item.sn}
                            </div>
                            <div className="px-10 py-3 text-center">
                                {item.status}
                            </div>
                        </div>
                    ))}
                </div>

            </div>


            <div className='mt-8 ml-3'>
                <h1 className="text-black font-semibold">
                    Task Status
                </h1>
                <div className='w-9 ml-1 rounded-md -mt-1 h-[2px] bg-[#F24E1E]'></div>

                {/* Table Container */}
                <div className="mt-2 bg-[#F8FAFF] border-[1px] rounded-lg overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-2 bg-[#F1F4FF] font-semibold text-sm">
                        <div className="px-10 py-3 border-r">SN</div>
                        <div className="px-10 py-3 text-center">Task Status</div>
                    </div>

                    {/* Table Rows */}
                    {taskpriority.map((item) => (
                        <div
                            key={item.sn}
                            className="grid grid-cols-2 text-sm border-t font-bold"
                        >
                            <div className="px-10 py-3 border-r">
                                {item.sn}
                            </div>
                            <div className="px-10 py-3 text-center">
                                {item.status}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Category;
