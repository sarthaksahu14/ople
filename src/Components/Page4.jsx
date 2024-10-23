import React from "react";

function Page4() {
  return (
    <div className="w-full h-[69vh] 2xl:h-[52.5vw] flex flex-col 2xl:flex-row items-center justify-center font-dm font-bold p-8 2xl:px-32">
      <div className="mt-12 2xl:mt-48">
        <h1 className="text-[1.4rem] 2xl:text-5xl mb-4 2xl:mb-10 2xl:mt-[-12rem] ">With Ople, you can:</h1>
        <ul className="text-lg 2xl:text-3xl 2xl:w-[80%] leading-6">
          <li className="flex items-center gap-2 2xl:gap-5 mb-4 2xl:mb-16"><img src="/assets/check.png" alt="" />Discover practical strategies and lesson ideas in minutes</li>
          <li className="flex items-center gap-2 2xl:gap-5 mb-4 2xl:mb-16"><img src="/assets/check.png" alt="" />Learn directly from fellow educators who understand your day-to-day challenges</li>
          <li className="flex items-center gap-2 2xl:gap-5 mb-4 2xl:mb-16"><img src="/assets/check.png" alt="" />Save and organize favorite content for easy reference</li>
          <li className="flex items-center gap-2 2xl:gap-5"><img src="/assets/check.png" alt="" />Support the teacher community by sharing your expertise</li>
        </ul>
      </div>
      <div className="flex gap-2 2xl:gap-12 mt-10 2xl:mt-60 2xl:mr-32">
        <img className="w-28 h-[15rem] 2xl:w-full 2xl:h-[40vw]" src="/assets/s4-1.png" alt="" />
        <img className="w-28 h-[15rem] 2xl:w-full 2xl:h-[40vw]" src="/assets/s4-3.png" alt="" />
      </div>
    </div>
  )
}

export default Page4;

