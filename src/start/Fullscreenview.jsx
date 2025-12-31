import React from 'react'

function Fullscreenview({ selectedTask, setSelectedTask }) {
    return (
        <div>
            <div>
                <div className='flex justify-between px-2'>
                    <div className='flex'>
                        {selectedTask.image && (
                            <img
                                src={selectedTask.image}
                                alt=""
                                className="border-[#a1a3ab9d] border-1 rounded-lg w-48 h-56"
                            />
                        )}
                        <div className='ml-4 mt-1'>
                            <h1 className="text-2xl font-semibold">{selectedTask.title}</h1>
                            <div className="flex flex-col gap-2 mt-4">
                                <p>
                                    Priority:
                                    <span className={`ml-2 font-medium font-medium ${selectedTask.priority === "Extreme"
                                        ? "text-[#F21E1E]"
                                        : selectedTask.priority === "Moderate"
                                            ? "text-[#42ADE2]"
                                            : "text-[#05A301]"
                                        }`}>
                                        {selectedTask.priority}
                                    </span>
                                </p>
                                <p>Status: Not Started</p>
                                <p className='text-[#A1A3AB]'>Created on: {selectedTask.date}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1
                            onClick={() => setSelectedTask(null)}
                            className="cursor-pointer text-black border-black font-semibold">
                            Go Back
                        </h1>
                        <div className='w-14 ml-1 rounded-md -mt-1 h-[2px] bg-black'></div>
                    </div>
                </div>

                <p className="mt-3 text-[#747474] w-[60%]">
                    {selectedTask.description}
                </p>
            </div>
        </div >
    )
}

export default Fullscreenview