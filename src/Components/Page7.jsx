import React, { useState } from "react";

function Page7() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Please complete this required field.";
        if (!formData.email) newErrors.email = "Please enter valid email address.";
        if (!formData.message) newErrors.message = "Please complete this required field.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Form submission logic here
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div className="w-full py-10 2xl:py-20 bg-[#072B49] text-[#FFFFFF] px-8 xl:px-0 2xl:px-12">
            <div className="md:text-center mb-8 sm:mb-8 md:mb-[28px] 2xl:mb-14">
                <h2 className="text-[24px] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.7em] xl:text-[1.8rem] 2xl:text-[2.8rem] font-bold text-[#EB674C] mb-4 sm:mb-6 md:mb-[2px] px-0 xl:px-64 xl:mb-0">
                    Have a question? Want to connect? Let's get in touch!
                </h2>
                <p className="text-[20px] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.3rem] xl:text-[21px] 2xl:text-[32px] font-semibold px-0 lg:px-60 xl:px-60 2xl:px-72 sm:mb-[-5px]">
                    Whether you want to share feedback, ask a question, or discuss how Ople can support you or your team, we'd love to hear from you!
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row justify-between px-0 xl:px-40">
                        <div className="w-full md:w-1/2 md:pr-4 mb-2 xl:mb-4 sm:mb-6 md:mb-2">
                            <div className="mb-2">
                                <label className="block text-base sm:text-lg md:text-[16px] 2xl:text-[24px] font-medium mb-1 sm:mb-2">NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-full bg-[#072B49] border border-gray-700 py-2 px-3 2xl:py-5 shadow-sm focus:bg-[#122E4D] text-sm sm:text-base md:text-lg text-white lg:text-xl xl:mb-10"
                                />
                                {errors.name && <div className="text-left text-red-500 xl:mt-[-37px] xl:pb-0 pb-[4px]">{errors.name}</div>}
                            </div>
                            <div className="mb-2 xl-mb-6 mt-5">
                                <label className="block text-base sm:text-lg md:text-[16px] 2xl:text-[24px] font-medium b-1 sm:mb-2 text-left mt-[-4px] xl:mt-4">EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-full bg-[#072B49] border border-gray-700 py-2 px-3 2xl:py-5 shadow-sm focus:bg-[#122E4D] text-sm sm:text-base md:text-lg text-white lg:text-xl xl:mb-[11px] mb-[1px]"
                                />
                                {errors.email && <div className="text-left text-red-500 xl:mt-[-37px] xl:pb-0 pb-[4px]">{errors.email}</div>}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:pl-4 md:pr-4 mb-[8px] xl:mb-5 sm:mb-6 md:mb-2 xl:pt-0 pt-[4px]">
                            <div className="mb-2 flex flex-col h-full">
                            <label className="block text-base sm:text-lg md:text-[16px] 2xl:text-[24px] font-medium sm:mb-1 xl:mt-0 mt-[-4px]">MESSAGE</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-2xl bg-[#072B49] border border-gray-700 py-2 px-3 shadow-sm focus:bg-[#122E4D] text-sm sm:text-base md:text-lg text-white grow xl:mb-[6px] mb-[10px] min-h-28 max-h-[201px] lg:text-xl"
                                ></textarea>

                            </div>
                            {errors.message && <div className="text-left text-red-500 xl:mt-[-32px] xl:pb-0 pb-[4px]">{errors.message}</div>}
                        </div>


                    </div>
                    <div className="flex justify-center mt-0 xl:mt-[8px] 2xl:mt-8">
                        <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center bg-transparent border-[1px] border-[#00C7B2] text-[#00C7B2] py-[6px] xl:py-3 px-7 2xl:py-5 2xl:px-14 font-light 2xl:font-semibold rounded-full hover:bg-[#00C7B2] hover:text-white text-10px sm:text-base md:text-[14px] 2xl:text-[18px] 2xl:mt-[16px] mt-[18px]">
                            SUBMIT
                        </button>
                    </div>
                </form>
                <div className="text-center mt-6 sm:mt-8 md:mt-[12px] 2xl:mt-5">
                    <p className="text-[16px] sm:text-[1.6rem] md:text-lg lg:text-xl xl:text-[21px] 2xl:text-[32px] font-semibold">
                        Or email us directly at <a href="mailto:learning@ople.us" className="text-[#ffd700]">learning@ople.us</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page7;
