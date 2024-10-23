import React from "react";

function Page2() {
    return (
        <div className="w-full h-[63.6vh] 2xl:h-[36vw] bg-[#FFFFFF] 2xl:p-32 flex flex-col 2xl:flex-row">
            <div className="text text-[#072B49] text-xl md:text-xl lg:text-3xl xl:text-5xl font-dm px-8 py-10 mr-[1rem] font-bold tracking-tight 2xl:w-1/2">
                <h1 className="mb-3 lg:mb-10 mt-[-6px]">Curious what’s happening in  other classrooms?</h1>
                <h1 className="mb-3 lg:mb-10">Want to learn directly from peers?</h1>
                <h1 className="mb-3 lg:mb-10 mt-[-6px]">Short on time and could use a  little inspiration?</h1>
                <h1 className="text-[#EB674C]">Ople is for you</h1>
            </div>
            <div className="ml-[9rem] lg:absolute lg:top-[100%] lg:right-[20rem]">
                <img className="w-[10rem] h-[20rem] sm:w-[30vw] sm:h-[58vw] md:w-[30vw] md:h-[49vw] lg:w-[22vw] lg:h-[43.6vw]" src="/assets/hero-char.png" alt="" />
            </div>
        </div>
    )

}


export default Page2;