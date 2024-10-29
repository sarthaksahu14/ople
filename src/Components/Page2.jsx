import React from "react";

function Page2() {
    return (
        <div className="flex flex-col md:flex-row mx-[2%] md:mx-[8%]">
            <div className="w-full md:w-1/2 font-extrabold 2xl:font-bold text-[#072B49] xl:p-4 px-6 md:px-0 xl:py-6 md:py-0 py-6 leading-5 sm:leading-9 xl:leading-8 2xl:leading-[1.05] 2xl:tracking-wide xl:px-5">
                <h2 className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.2rem] 2xl:text-[2.8rem] ml-0 xl:ml-[15px] 2xl:ml-[32px] xl:text-[28px] mt-6 md:mt-20 xl:mt-[112px] 2xl:mt-[178px] "><span className="block mb-4 lg:mb-[25px] 2xl:mb-12">Curious what’s happening in other classrooms?</span><span className="block mb-4 lg:mb-[25px] 2xl:mb-12">Want to learn directly from peers?</span><span className="block mb-4 lg:mb-[25px] 2xl:mb-12">Short on time and could use a little inspiration?</span><span className="animate-fade text-[#EB674C] block mt-4">Ople is for you.</span>
                </h2>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/hero-char.png" alt="Character Image" className="h-[305px] sm-[350px] xl:h-[630px] md:h-[530px] lg:h-[550px] 2xl:h-[950px] w-auto mt-[20px] sm:mt-20px mx-auto md:mr-auto md:mt-[-95px] 2xl:mt-[-130px]" />
            </div>
        </div>
    )

}


export default Page2;