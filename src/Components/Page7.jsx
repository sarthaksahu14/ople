import React from "react";
function Page7() {
    return (
        <div className="w-full h-[83vh] 2xl:h-[90vh] p-10 bg-[#072B49]">
            <h1 className="text-md text-[#EB674C] mb-5 2xl:text-center 2xl:text-5xl 2xl:mt-10">Have a question? Want to connect? Let's get in touch!</h1>
            <p className="text-md text-white mb-8 2xl:text-center 2xl:text-3xl 2xl:w-[68%] 2xl:ml-[16%]">Whether you want to share feedback, ask a question, or discuss how Ople can support you or your team, we'd love to hear from you! </p>

            <div className="2xl:w-[50%] 2xl:ml-[25%] text-white ">
                <div className="flex flex-col mb-5 ">
                    <label className="mb-3 text-sm lg:text-xl">NAME</label>
                    <input className="border-[1.1px] border-gray-700 rounded-full p-2 2xl:p-5 bg-[#072B49]"></input>
                </div>
                <div className="flex flex-col mb-10">
                    <label className="mb-3 text-sm lg:text-xl">EMAIL</label>
                    <input className="border-[1.1px] border-gray-700 rounded-full p-2 2xl:p-5 bg-[#072B49]"></input>
                </div>
                <div className="flex flex-col mb-10 ">
                    <label className="mb-3 text-sm lg:text-xl">MESSAGE</label>
                    <input className="border-[1.1px] border-gray-700 rounded-2xl p-10 2xl:p-5 bg-[#072B49]"></input>
                </div>
                <button className="border-[1.1px] border-[#00C7B2] w-full 2xl:w-[20%] 2xl:ml-[40%] 2xl:p-4 py-2 rounded-full text-[#00C7B2] font-light 2xl:font-bold mb-5 hover:bg-[#00C7B1] hover:text-white">SUBMIT</button>
                <h1 className="text-center 2xl:text-3xl">Or email us directly at<span className="text-[#D7CC07]"> learning@ople.us</span></h1>
            </div>
        </div>
    )
}

export default Page7;