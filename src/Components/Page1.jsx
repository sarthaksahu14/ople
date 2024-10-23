import React from "react";



function Page1 () {
  return (
    <>
      <div className="w-full h-[56vh] md:h-[70vw] xl:h-[67vw] 2xl:h-[56vw] bg-[#072B49] px-5 xl:px-[9.4rem] relative">
        <div className="logo flex">
          <img className="w-16 h-10 xl:w-full xl:h-full object-cover mt-7 xl:mt-12" src="/assets/logo.png" alt="" />
          <img className="w-[21.6rem] h-full sm:w-full xl:w-full xl:h-full object-cover xl:ml-[22rem] mt-16 xl:mt-32" src="/assets/ople-hero.png" alt="" />
        </div>
        <div className="text text-xl lg:text-3xl xl:text-6xl text-white font-dm absolute top-[46%] font-bold tracking-widest p-5">
                <h1 className="lg:mb-5 xl:mb-5">Where inspired teachers</h1>
                <h1  className="lg:mb-5 xl:mb-5">inspire teachers</h1>
                <h1 className="text-[#FFD700]">through short-form video</h1>
          </div>
        <button className="mt-[10rem] sm:mt-10 md:mt-2 2xl:mt-12 ml-5 font-dm font-semibold text-[#00C7B1] text-md xl:text-xl tracking-wider px-24 py-3 xl:py-7 xl:px-20 border-2 border-[#00C7B1] rounded-full hover:bg-[#00C7B1] hover:text-white">JOIN THE WAITLIST</button>
      </div>

    </> 
  )
} 

export default Page1;