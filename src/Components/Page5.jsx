import React from "react";

function Page5() {
    return (
        <>
            <div className="w-full h-[103vh] xl:h-[70vh] bg-[#FFD700] font-dm font-bold p-10 xl:flex xl:flex-row-reverse items-center text-[#072B49]">
                <div className="xl:ml-32 xl:mt-20">
                    <h1 className="text-[1.4rem] xl:text-5xl mb-4 xl:mb-10 leading-8">Ople is for PK-12 educators, schools, districts, and organizations looking for:</h1>
                    <ul className="text-lg xl:text-3xl leading-7" >
                        <li className="flex items-center gap-5 xl:gap-5 mb-4 xl:mb-16"><img src="/assets/checkB.png" alt="" />Continuous, bite-sized professional learning that fits into busy schedules</li>
                        <li className="flex items-center gap-5 xl:gap-5 mb-4 xl:mb-16"><img src="/assets/checkB.png" alt="" />A platform to highlight and celebrate teaching excellence as well as innovative ideas</li>
                        <li className="flex items-center gap-5 xl:gap-5 mb-4 xl:mb-16"><img src="/assets/checkB.png" alt="" />A space to engage privately within your own community or expand collaboration across the platform</li>
                    </ul>
                </div>
                <div className="xl:ml-20">
                    <img className="w-[80%] h-[80%] xl:w-full xl:h-full" src="/assets/sec5.png" alt="" />
                </div>

            </div>
            <div className="w-full h-[20rem] xl:h-[19rem] bg-[#072B49] relative">
                <img className="absolute top-[0%] w-[190%] h-[100%]" src="/assets/backimg.png" alt="" />
                <p className="text-center text-white text-xl xl:text-4xl md:w-[80%] xl:ml-32 font-dm font-semibold p-10 md:p-16 leading-9 xl:leading-tight z-10"> Join a verified community of educators and access a growing library of vetted, educator-produced content, available for individual and school-based adoption in the 2024-2025 school year.</p>
            </div>
        </>
    )
}

export default Page5;