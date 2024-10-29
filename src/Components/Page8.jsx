import React from "react";
import { Link } from "react-router-dom";

function Page8() {
    return (
        <div className="flex flex-col md:flex-row justify-between bg-white py-2 2xl:py-10 px-8 xl:px-16 2xl:px-24 w-full">
            <div className="mb-4 xl:mt-0 mt-3 flex justify-center md:justify-start">
                <img src="/assets/footer.png" alt="Footer Image" className="h-auto w-[135px] 2xl:w-[210px] mt-5" />
            </div>
            <div className="right flex flex-col items-center md:items-end py-2 xl:py-4">
                <div className="flex space-x-4 mb-2">
                    <a href="https://www.instagram.com/opleteachers/" aria-label="Instagram">
                        <img src="/assets/insta.png" alt="Instagram" className="h-4 w-4 2xl:h-[28px] 2xl:w-auto" />
                    </a>
                    <a href="https://www.linkedin.com/company/opleteachers/" aria-label="LinkedIn">
                        <img src="./assets/linkdin.png" alt="LinkedIn" className="h-4 w-4 2xl:h-[28px] 2xl:w-auto" />
                    </a>
                    <a href="https://www.facebook.com/opleteachers" aria-label="Facebook">
                        <img src="./assets/face.png" alt="Facebook" className="h-4 w-4 2xl:h-[28px] 2xl:w-auto" />
                    </a>
                    <a href="https://www.tiktok.com/@opleteachers" aria-label="TikTok">
                        <img src="./assets/tiktok.png" alt="TikTok" className="h-4 w-4 2xl:h-[28px] 2xl:w-auto" />
                    </a>
                </div>
                <div className="text-[#8F8F8F] text-[13px] 2xl:text-[18px] text-center md:text-right"> hello@ople.us | www.ople.us | (646) 466-5344 </div>
                <div className="text-[#8F8F8F] text-[13px] 2xl:text-[18px] text-center md:text-right"> © 2024 Ople Learning Inc. </div>
                <div className="flex text-[#8F8F8F] text-[15px] 2xl:text-[20px]">
                    <div className="text-[#8F8F8F] text-[13px] 2xl:text-[18px] text-center md:text-right xl:mr-[4px] mr-[4px]">
                        <Link to="/support">Support |</Link> 
                    </div>
                    <div className="text-[#8F8F8F] text-[13px] 2xl:text-[18px] text-center md:text-right xl:mr-[4px] mr-[4px]">
                    <Link to="/eula">EULA |</Link> 
                    </div>
                    <div className="text-[#8F8F8F] text-[13px] 2xl:text-[18px] text-center md:text-right xl:mr-[4px] mr-[4px]">
                 <Link to="/terms"> Terms | </Link> 
                    </div>
                    <div className="text-[#8F8F8F] text-[13px] 2xl:text-[18px] text-center md:text-right xl:mr-[4px] mr-[4px]">
                       <Link to="/privacy">Privacy </Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page8;