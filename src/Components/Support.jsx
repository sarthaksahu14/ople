import React from "react";
import Page8 from "./Page8";

function Support() {
    return (
        <div className="font-dm">
            <div className="bg-[#072B49] text-white text-center">
                <div className="flex justify-start">
                    <img src="/assets/logo.png" alt="Ople Logo" className="cursor-pointer ml-2 md:ml-12 xl:ml-[54px] 2xl:ml-[54px] mb-4 md:mb-4 xl:mb-[8px] 2xl:mb-[10px] mt-4 md:mt-4 xl:mt-[8px] 2xl:mt-[8px] w-[80px] h-auto sm:w-[90px] sm:h-auto md:w-[90px] md:h-auto lg:w-[100px] lg:h-auto xl:w-[106px] xl:h-auto 2xl:w-[100px] 2xl:h-auto" />
                </div>
            </div>
            <div className="bg-[#E9ECEF] text-[#072B49] text-left px-4 py-4 md:px-12 lg:px-24 xl:px-[71px] xl:py-7 md:text-left">
                <h1 className="text-2xl md:text-5xl lg:text-[34px] font-bold text-[#072B49] mt-4 md:mt-0 text-left md:text-left"> Ople Support </h1>
            </div>
            <div className="bg-[#F5F5F5] text-left px-4 py-6 md:px-12 lg:px-24 xl:px-[71px] xl:py-7 md:text-left">
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[29px] font-normal text-[#072B49]"><span className="font-bold"> Hello Ople Educators and Users
                </span>! </h2><br />
                <p className="mt-4 text-[#072B49] text-xl md:text-xl xl:font-semibold"> If you have any questions or issues about the Ople app, please take the following steps: </p><ul className="text-md font-normal pl-0 mt-10 text-[#072B49]"><li className="mb-2 flex">
                    <img src="/assets/asset.png" alt="Bullet" className="w-4 h-4 mt-1 mr-2" />If possible and appropriate, take a screenshot of any relevant and important screens where you are encountering any issues</li><li className="mb-2 flex"><img src="./assets/asset.png" alt="Bullet" class="w-4 h-4 mt-1 mr-2" /> Write us at hello@ople.us with your question and/or describe context or issue faced in brief and/or detail, as appropriate. </li><li className="mb-2 flex"><img src="./assets/asset.png" alt="Bullet" class="w-4 h-4 mt-1 mr-2" />Include with your email: </li><ul className="list-none pl-12 mt-2"><li className="mb-2 flex"><img src="./assets/asset.png" alt="Bullet" class="w-4 h-4 mt-1 mr-2" /> Include your username in the subject line and body of your email</li><li className="mb-2 flex"><img src="./assets/asset.png" alt="Bullet" class="w-4 h-4 mt-1 mr-2" /> Include the email address associated with your account</li><li className="mb-2 flex"><img src="./assets/asset.png" alt="Bullet" class="w-4 h-4 mt-1 mr-2" /> The screenshots (if any) of relevant context or issue</li></ul></ul><br /><p className="mt-3 text-[#072B49] text-base font-medium md:text-[17px]"> Important note: we are currently a young and small company. We might not be able to respond or solve your issues immediately. But we are committed to responding in as expeditious a manner as possible and rectifying any problems to the best of our ability. </p><br />
                <p className="mt-8 text-[#072B49] font-bold md:text-[18px]"> Thank you!<br /><span className="font-bold">The Ople Team</span></p>
            </div>
            <Page8 />
        </div>

    )
}

export default Support;
