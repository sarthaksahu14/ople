import React from "react";



function Page1() {
  return (
    <>
      <div className="w-full h-auto flex flex-col bg-[#072B49] pb-[10%]" >
        <div className="mb-[90px] md:mb-[10px] xl:mb-[10px]">
          <img src="/assets/logo.png" alt="Ople Logo" className="ml-2 md:ml-10 xl:ml-[82px] 2xl:ml-[140px] mt-8 md:mt-8 xl:mt-[96px] 2xl:mt-[50px] w-[70px] h-auto sm:w-[154px] sm:h-auto md:w-[150px] md:h-auto lg:w-[152px] lg:h-auto xl:w-[152px] xl:h-auto 2xl:w-[240px] 2xl:h-auto xl:mb-[30px]" />
        </div>
        <div className="flex flex-col items-end mb-4 mt-[-100px]">
          <img src="/assets/ople-hero.png" alt="Hero Image" className="w-[93%] sm:w-[100%] md:w-[60%] lg:w-[56%] xl:w-[56%] 2xl:w-[60%] h-auto max-w-min mb-44 md:mb-1 xl:mb-12 2xl:mb-14" />
        </div>
        <div className="flex justify-center md:justify-start md:ml-[8%] mx-[4%] 2xl:ml-[180px]">
          <h1 className="font-extrabold text-[26px] sm:text-[40px] md:text-[34px] lg:text-[45px] xl:text-[52px] 2xl:text-6xl leading-tight text-left xl:text-left text-[#e9ecef] mt-[-140px] xl:mt-[-260px] 2xl:mt-[-320px] lg:px-0 px-0 md:px-0 tracking-wider 2xl:tracking-widest justify-center sm-justify-center md:justify-center xl:justify-start 2xl:leading-tight"> Where inspired teachers<br />inspire teachers<br /><span className="animate-fade text-yellow-400">through short-form video</span></h1>
        </div>
        <div className="w-auto md:w-auto flex justify-center md:justify-start mx-[4%] md:ml-[8%] 2xl:ml-[180px]">
          <button className="w-full bg-transparent border-2 border-[#00C7B2] text-[#00C7B2] py-3 px-auto 2xl:py-7 sm:py-4 md:w-auto md:px-10 2xl:px-20 font-semibold rounded-full hover:bg-[#00C7B2] hover:text-white mt-[10px] sm:mt-5 md:mt-0 xl:mt-[-30px] tracking-wider 2xl:text-2xl"><a href="#form-section">JOIN THE WAITLIST</a>  </button>
        </div>
      </div>

    </>
  )
}

export default Page1;