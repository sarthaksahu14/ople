import React from "react";

function Page3() {
    return (
        <div className="w-full h-[68vh] xl:h-[90vh] bg-[#E9ECEF] flex flex-col xl:flex-row p-9 xl:p-0 xl:py-10 relative">
            <div className="xl:absolute xl:right-[1%] 2xl:right-[18%] xl:top-60">
                <h3 className="text text-[1.1rem] xl:text-3xl font-bold font-dm text-[#072B49] leading-tight">
                    Ople is a knowledge-sharing platform <br className="hidden xl:block" />
                    where PK-12 educators are the experts —  <br className="hidden xl:block" />
                    sharing best practices, strategies, and ideas <br className="hidden xl:block" />
                    through short-form video.
                </h3>
            </div>
            <div className="py-16">
                <img src="/assets/section3.png" alt="" />
            </div>
            <div className="xl:mt-[20rem]">

                <h3 className="text text-[1.1rem] xl:text-3xl font-bold font-dm text-[#072B49] xl:mt-20 leading-6 xl:leading-tight ">
                    Ople places the learning teachers want at their fingertips, <br className="hidden xl:block" />
                    in 1-5 minute videos made by teachers for teachers,<br className="hidden xl:block" />
                    down the hall, across the country, and beyond.

                </h3>
            </div>
        </div>
    )
}

export default Page3;