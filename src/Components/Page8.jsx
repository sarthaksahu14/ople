import React from "react";

function Page8() {
    return (
        <div className="w-full h-[45vh] xl:h-[30vh] p-8 xl:p-32 xl:flex xl:items-center xl:justify-between ">
            <img className=" ml-16 mb-8" src="/assets/footer.png" alt="" />
            <div className="xl:flex flex-col gap-2">
                <div className="flex gap-5 ml-24 mb-5">
                    <a href="https://www.instagram.com/opleteachers/"><img src="/assets/insta.png" alt="" /></a>
                    <a href="https://www.linkedin.com/company/opleteachers/"> <img src="/assets/linkdin.png" alt="" /></a>
                    <a href="https://www.facebook.com/opleteachers">  <img src="/assets/face.png" alt="" /></a>
                    <a href="https://www.tiktok.com/@opleteachers">  <img src="/assets/tiktok.png" alt="" /></a>
                </div>
                <div><h1 className="text-gray-400 font-light text-sm xl:text-xl text-center">hello@ople.us | www.ople.us | (646) 466-5344<br />© 2024 Ople Learning Inc.<br />Support |
                    EULA |   Terms |      Privacy</h1></div>
            </div>
        </div>
    )
}

export default Page8;