import React from "react";

function Page4() {
  return (
    <div className="flex h-auto flex-col md:flex-row justify-start text=left pl-[7.2vw] 2xl:pl-[6.1vw] pr-8 mt-[20px] md:mt-[50px] xl:mt-[50px] 2xl:mt-[60px] 2xl:pt-28">
      <div className="text-left flex flex-1 flex-col justify-start items-start lg:items-start lg:text-left lg:w-1/3 mt-[20px] xl:mt-[40px] 2xl:mt-0">
        <h1 className="text-[#072B49] text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[2rem] xl:text-3xl 2xl:text-[2.8rem] font-bold mb-2 lg:mb-8 md:mb-8 xl:mb-10 2xl:mb-16 mt-1">
          With Ople, you can:
        </h1>
        <ul className="text-[1.1rem] xl:text-[22px] 2xl:text-[32px] w-[100%] lg:w-[90%] xl:font-semibold font-bold 2xl:font-bold flex leading-tight flex-col justify-center h-auto">
          <li className="mb-4 xl:mb-8 2xl:mb-16 text-[#072B49] flex items-center">
            <img src="/assets/checkg.png" alt="Image description" className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 rounded-full mr-[3%] 2xl:mr-[4%]" />
            Discover practical strategies and lesson ideas in minutes
          </li>
          <li className="mb-4 sm:mb-6 lg:mb-4 xl:mb-8 2xl:mb-16 text-[#072B49] flex items-center">
            <img src="/assets/checkg.png" alt="Image description" className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 rounded-full mr-[3%] 2xl:mr-[4%]" />
            Learn directly from fellow educators who understand your day-to-day challenges
          </li>
          <li className="mb-4 lg:mb-6 xl:mb-8 2xl:mb-16 text-[#072B49] flex items-center">
            <img src="/assets/checkg.png" alt="Image description" className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 rounded-full mr-[3%] 2xl:mr-[4%]" />
            Save and organize favorite content for <br className="hidden sm:block"/>easy reference
          </li>
          <li className="mb-4 lg:mb-6 xl:mb-8 2xl:mb-16 text-[#072B49] flex items-center">
            <img src="/assets/checkg.png" alt="Image description" className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 rounded-full mr-[3%] 2xl:mr-[4%]" />
            Support the teacher community by sharing your expertise
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center justify-center flex-1 space-x-2 xl:space-x-4 2xl:space-x-16 mt-4 xl:mt-0 lg:ml-[10px] 2xl:ml-0">
        <div className="">
          <img src="/assets/sec4-1.png" alt="Feature Image 1" className="h-[220px] w-28 sm:h-[280px] sm:w-40 xl:w-60 xl:h-[520px] 2xl:w-[373px] 2xl:h-[830px] rounded-t-3xl xl:rounded-lg" />
        </div>
        <div className="">
          <img src="/assets/sec4-2.png" alt="Feature Image 3" className="h-[220px] w-28 sm:h-[280px] sm:w-40 xl:w-60 xl:h-[520px] 2xl:w-[373px] 2xl:h-[830px] rounded-t-3xl xl:rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default Page4;

