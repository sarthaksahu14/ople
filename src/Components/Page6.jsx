import React from "react";

function Page6() {
    return (
        <div id="form-section"   className="bg-[#E9ECEF] text-center py-10 md:py-10 lg:py-10 xl:py-10 2xl:py-24 px-8 md:px-6 lg:px-8 xl:px-8">
            <div className="px-0 xl:px-4 sm:px-[22%] text-left sm:text-center pt-0 xl:pt-10">
                <p className="text-[#eb674c] text-[2rem] sm:text-[2rem] md:text-[2.1rem] lg:text-[2.1rem] xl:text-4xl 2xl:text-[2.8rem] font-semibold mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2"> Join the Waitlist </p>
                <h3 className="text-[#072B49] 2xl:font-semibold text-[1.1rem] sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[32px] font-bold pt-1 sm:pt-[5px] mb-2 sm:mb-2 md:mb-2 xl:mb-6">
                    Get early access, news, and updates by signing up.
                </h3>
            </div>
            <form>
                <div className="mt-7 w-full mx-auto lg:w-auto lg:mx-[26%] px-0 sm:px-0">
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-8 mb-4 sm:mb-6 2xl:mb-10">
                        <div className="w-full">
                            <label className="block text-base sm:text-lg md:text-[16px] 2xl:text-[24px] font-bold mb-1 sm:mb-2 text-left text-[#072B49]"> NAME </label>
                            <input type="text" required="" className="w-full py-2 px-3 2xl:py-5 border border-gray-700 rounded-full bg-transparent text-sm sm:text-base lg:text-xl" />

                        </div>
                    </div>
                    <div className="mb-4 sm:mb-1">
                        <label className="block text-base sm:text-lg md:text-[16px] 2xl:text-[24px] font-bold mb-1 sm:mb-2 text-left text-[#072B49]"> EMAIL </label>
                        <input type="email" required className="w-full py-2 px-3 2xl:py-5 border border-gray-700 rounded-full bg-transparent mb-3 xl:mb-3 text-sm sm:text-base lg:text-xl" />

                    </div>
                </div>
                <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center bg-transparent border-[1px] border-[#00C7B2] text-[#00C7B2] py-[6px] xl:py-3 px-7 2xl:py-5 2xl:px-14 font-light 2xl:font-semibold rounded-full hover:bg-[#00C7B2] hover:text-white text-10px sm:text-base md:text-[14px] 2xl:text-[18px] 2xl:mt-[60px] mt-[16px]" > SUBMIT </button>
            </form>
        </div>
    )
}

export default Page6;












