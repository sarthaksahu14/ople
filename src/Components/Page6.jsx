import React from "react";

function Page6() {
    return (
        <div className="w-full h-[55vh] xl:h-[75vh] p-10 bg-[#E9ECEF]">
            <h1 className="text-3xl text-[#EB674C] mb-5 xl:text-center xl:text-5xl xl:mt-10">Join the Waitlist</h1>
            <p className="text-xl text-[#072B4E] mb-8 xl:text-center xl:text-3xl"> Get early access, news, and updates by signing up. </p>

            <div className="xl:w-[50%] xl:ml-[25%]">
                <div className="flex flex-col mb-5">
                    <label className="mb-3 text-sm xl:text-xl">NAME</label>
                    <input className="border-[1.1px] border-gray-700 rounded-full p-2 xl:p-5 bg-[#E9ECEF]"></input>
                </div>
                <div className="flex flex-col mb-10">
                    <label className="mb-3 text-sm  xl:text-xl">EMAIL</label>
                    <input className="border-[1.1px] border-gray-700 rounded-full p-2 xl:p-5 bg-[#E9ECEF]"></input>
                </div>
                <button className="border-[1.1px] border-[#00C7B2] w-full xl:w-[20%] xl:ml-[40%] xl:p-4 py-2 rounded-full text-[#00C7B2] font-light xl:font-bold hover:bg-[#00C7B1] hover:text-white">SUBMIT</button>
            </div>
        </div>
    )
}

export default Page6;