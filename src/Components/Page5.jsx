import React from "react";

function Page5() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row bg-[#FFD700] h-auto text-center font-extrabold text-[#072B49] justify-around px-8 md:px-8 py-6 xl:py-6 2xl:py-10 xl:px-4">
                <div className="flex flex-col ml-1">
                    <img src="./assets/sec5.png" alt="Test" className="h-auto w-[270px] sm:w-[300px] md:w-[350px] lg:w-[550px] 2xl:w-[590px] xl:h-auto xl:w-auto md:ml-4 mx-auto mt-[20px] xl:mt-[20px] md:mb-5 ml-15 xl:ml-20" />
                </div>
                <div className="ml-0 md:ml-20 lg:ml-[120px] text-left space-y-6 w-full self-center md:text-left py-0 xl:py-8 2xl:py-16 2xl:px-10">
                    <h1 className="text-3xl font-extrabold 2xl:font-semibold text-[#072B49] md:text-xl mt-3 md:mt-10 xl:mt-10 2xl:mt-0 text-[1.6rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.8rem] xl:text-3xl 2xl:text-[2.8rem] px-0 xl:px-0 2xl:leading-tight">
                        Ople is for PK-12 educators, schools, districts, and organizations looking for:
                    </h1>
                    <ul className="space-y-6 font-extrabold text-[#072B49] 2xl:font-bold text-[1.2rem] sm:text-[1.4rem] md:text-[1rem] lg:text-[1.4rem] xl:text-[1.25rem] 2xl:text-[32px] text-left">
                        <li className="flex items-center justify-center md:justify-start">
                            <img src="./assets/checkB.png" alt="Checkmark" className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 rounded-full mr-4 md:mr-2 2xl:mr-6" />
                            Continuous, bite-sized professional learning that fits into busy schedules
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                            <img src="./assets/checkB.png" alt="Checkmark" className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 rounded-full mr-4 md:mr-2 2xl:mr-6" />
                            A platform to highlight and celebrate teaching excellence as well as innovative ideas
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                            <img src="./assets/checkB.png" alt="Checkmark" className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 rounded-full mr-4 md:mr-2 2xl:mr-6" />
                            A space to engage privately within your own community or expand collaboration across the platform
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center bg-[#072B49] h-auto text-center relative py-12 2xl:py-16">
                <div className="absolute inset-0 bg-cover bg-center opacity-70">
                    <img src="/assets/backimg.png" className="w-full h-full" />
                </div>
                <div className="md:w-[90%] w-auto mx-auto relative z-10">
                    <p className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.8rem] xl:text-3xl 2xl:text-[2.8rem] text-white font-semibold px-12 xl:px-8 2xl:px-28 leading-9 xl:leading-9 2xl:leading-tight">
                        Join a verified community of educators and access a growing library of vetted, educator-produced content, available for individual and school-based adoption in the 2024-2025 school year.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Page5;