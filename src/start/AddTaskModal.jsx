import React, { useEffect, useState } from 'react';
export default function AddTaskModal({ onClose,
    onAddTask,
    editTask,
    onUpdateTask }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        if (file) reader.readAsDataURL(file);
    };

    useEffect(() => {
        if (editTask) {
            setTitle(editTask.title);
            setDate(editTask.date);
            setPriority(editTask.priority);
            setDescription(editTask.description);
            setImage(editTask.image);
        }
    }, [editTask]);


    const handleSubmit = () => {
        if (!title) return alert("Title required");

        if (editTask) {
            onUpdateTask({
                ...editTask,
                title,
                date,
                priority,
                description,
                image,
            });
        } else {
            onAddTask({
                id: Date.now(),
                title,
                date,
                priority,
                description,
                image,
            });
        }
        onClose();
    };

    return (
        <>
            {/* 🔵 BLUE OVERLAY */}
            <div className="fixed inset-0 bg-[#000000]/70 backdrop-blur-sm z-4"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white w-full mx-30 p-4 rounded-sm shadow-xl">
                    {/* HEADER */}
                    <div className="flex justify-between items-center px-5 py-3">
                        <h2 className="font-semibold text-md">
                            {editTask ? "Edit Task" : "Add New Task"}
                        </h2>

                        <button onClick={onClose} className="font-semibold">
                            Go Back
                        </button>
                    </div>

                    <div className="p-3 flex border rounded-sm m-4">
                        {/* LEFT */}
                        <div className="w-[80%] pe-5 flex flex-col gap-3">
                            <input
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="border px-3 py-2"
                            />

                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="border px-3 py-2"
                            />

                            <div className="flex gap-4">
                                {["Extreme", "Moderate", "Low"].map((p) => (
                                    <label key={p}>
                                        <input
                                            type="radio"
                                            name="priority"
                                            checked={priority === p}
                                            onChange={() => setPriority(p)}
                                        />{" "}
                                        {p}
                                    </label>
                                ))}
                            </div>

                            <textarea
                                placeholder="Task Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="border px-3 py-2 h-28"
                            />
                        </div>

                        {/* RIGHT */}
                        <div className="w-[20%] text-center">
                            <label className="border p-4 block cursor-pointer">
                                Upload Image
                                <input type="file" hidden onChange={handleImage} />
                            </label>

                            {image && (
                                <img src={image} alt="" className="mt-2 rounded" />
                            )}
                        </div>
                    </div>

                    <div className="px-8 pb-2">
                        <button
                            onClick={handleSubmit}
                            className="bg-[#F24E1E] text-white px-6 py-2 rounded">
                            {editTask ? "Save Changes" : "Done"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
    /*     
      <>
     <div className="fixed inset-0 bg-[#000000]/70 backdrop-blur-sm z-4"></div>
     <div className="fixed inset-0 flex items-center justify-center z-50">
         <div className="bg-white w-full mx-30 p-4 rounded-sm shadow-xl">
             <div className="flex justify-between items-center px-5 py-3">
                 <div>
                     <h2 className="font-semibold text-md">Add New Task</h2>
                     <div className='-mt-1 bg-[#F24E1E] w-22 h-0.5 rounded-md'></div>
                 </div>
                 <div>
                     <button
                         onClick={onClose}
                         className="text-sm font-semibold text-black">
                         Go Back
                     </button>
                     <div className='-mt-1 bg-black w-12 ml-0.5 h-0.5 rounded-md'></div>
                 </div>
             </div>
    
             <div className="p-3 flex border-[1px]  items-end border-[#A1A3AB]/64 rounded-sm m-4">
                 <div className="w-[80%] pe-5 flex flex-col gap-3">
                     <div>
                         <label className="text-sm font-semibold">Title</label>
                         <input
                             className="w-full border border-[#A1A3AB] rounded px-3 py-1.5 text-sm mt-1"
                         />
                     </div>
                     <div>
                         <label className="text-sm font-semibold">Date</label>
                         <input
                             type="date"
                             className="w-full border border-[#A1A3AB] rounded px-3 py-1.5 text-sm mt-1"
                         />
                     </div>
    
                     <div>
                         <label className="mt-2 flex text-sm font-medium">Priority</label>
                         <div className="flex gap-4 mt-1 text-sm">
                             <label className="flex items-center gap-1">
                                 🔴 Extreme
                                 <input type="checkbox" className="order-last" />
                             </label>
                             <label className="flex items-center gap-1">
                                 🔵 Moderate
                                 <input type="checkbox" className="order-last" />
                             </label>
                             <label className="flex items-center gap-1">
                                 🟢 Low
                                 <input type="checkbox" className="order-last" />
                             </label>
                         </div>
                     </div>
    
                     <div>
                         <label className="text-xs font-medium">Task Description</label>
                         <textarea
                             placeholder="Start writing here..."
                             className="w-full border-[1px] focus:outline-none border-[#A1A3AB]/64 rounded-md px-3 py-2 text-sm mt-1 h-28"
                         />
                     </div>
                 </div>
    
                 <div className="w-[20%] cursor-pointerh-fit flex flex-col justify-end text-center">
                     <h1 className='text-start ml-1 font-semibold mb-1'>Upload Image</h1>
                     <div className="gap-2 border-[2px] border-[#A1A3AB]/64 rounded w-full h-42 flex flex-col items-center justify-center text-[#A1A3AB] text-xs">
                         <img className='w-11' src="/images/icgallery.png" alt="" />
                         <span className='text-md'>Drag&Drop files here</span>
                         <span className="text-md">or</span>
                         <button className="border px-3 h-7 rounded-md text-xs">
                             Browse
                         </button>
                     </div>
                 </div>
             </div>
             <div className="px-8 pb-2">
                 <button className="bg-[#F24E1E] text-white text-xs px-6 py-2 rounded">
                     Done
                 </button>
             </div>
         </div>
     </div>
         </>
    
     
     */
}
