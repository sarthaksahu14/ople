import React from "react";

function Page3() {
    return (
        <div className="flex flex-col md:flex-row items-center xl:items-start py-2 xl:py-16 2xl:py-28 px-8 h-auto bg-[#E9ECEF]">
            <div className="text-[#072B49] w-full text-left md:hidden">
                <h3 className="font-bold mt-3 text-[1.1rem] sm:text-[1rem] md:text-h3">
                    Ople is a knowledge-sharing platform where PK-12 educators are the experts — sharing best practices, strategies, and ideas through short-form video.<br /><br />
                </h3>
            </div>
            <div className="w-full md:w-1/2 h-auto">
                <img src="./assets/sec3.png" alt="Section 3 Image" className="w-full h-auto xl:h-[450px] 2xl:h-[675px] 2xl:w-auto mx-auto md:ml-[-30px] xl:ml-[-80px] 2xl:ml-[-40px]" />
            </div>
            <div className="w-full h-full leading-tight md:w-1/2 py:0 xl:py-6 lg:p-1 md:p-4 xl:p-5 text-[#072B49] md:pl-0 lg:pl-2 xl:pl-0">
                <h3 className="text-[21px] md:text-[15px] xl:text-[21px] 2xl:text-[32px] font-bold md:ml-[0px] xl:ml-[-10px] 2xl:ml-[-36px] mt-24 md:mt-1 xl:mt-20 2xl:mt-32 hidden md:block">
                    Ople is a knowledge-sharing platform <br />
                    where PK-12 educators are the experts — <br />
                    sharing best practices, strategies, and ideas <br />
                    through short-form video.<br /><br />
                    Ople places the learning teachers want at their fingertips,<br />
                    in 1-5 minute videos made by teachers for teachers,<br />
                    down the hall, across the country, and beyond.
                </h3>
            </div>
            <div className="text-[#072B49] w-full text-left md:hidden">
                <h3 className="font-bold mt-3 text-[1.1rem] sm:text-[1rem] md:text-h3 mb-4">
                    Ople places the learning teachers want at their fingertips, in 1-5 minute videos made by teachers for teachers down the hall, across the country, and beyond.
                </h3>
            </div>
        </div>
    )
}

export default Page3;