import Image from "next/image";

//icons
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";

const Location = () => {
    return (
        <div className="w-full h-screen flex flex-col lg:grid lg:grid-cols-[3fr_2fr_3fr] gap-5 bg-primary place-content-center place-items-center">

            {/* COL 1 */}

            <div className="flex flex-col mb-10 lg:mb-0 order-2 lg:order-1 items-center lg:items-start lg:pl-20 xxl:px-20 gap-12">
                <h1 className="uppercase mt-5 lg:mt-0 text-[25px] sm:text-[35px] lg:text-[40px] xl:text-[55px] xxl:text-[65px] text-white xl:leading-[70px]">Service beyond expeciation</h1>
                <p className="text-center lg:text-left w-[80%] lg:w-full text-white text-[16px] sm:text-[18px] lg:text-[18px] lg:pr-10">Our barbershop is the territory created purely for men who appreciate premium quality, time and flawless look. We'll help you to look stylish and confident in the most discreet way.</p>
                <button className='flex flex-row items-center text-[12px] text-black border-[1px] border-accent bg-accent rounded px-3 py-2'>
                    Submit request <span className="ml-2"><FaLongArrowAltRight /></span>
                </button>

            </div>

            {/* COL 2 */}
            <div className="flex flex-row order-1 lg:order-2 items-center justify-center">
                <Image className='rounded-[30px] w-[40%] lg:w-[100%]' src='/assets/map.png' width={400} height={600} alt='manhatten map' />
            </div>

            {/* COL 3 */}
            <div className="flex flex-col order-2 lg:order-3 items-start xl:gap-10 ">

                {/* location */}
                <div className="flex flex-row items-center justify-center gap-x-5">
                    {/* icons */}
                    <div className="bg-white flex justify-center p-3 xl:p-5 rounded-[10px]">
                        <FaMapMarkerAlt className="w-[24px] h-[24px] xl:w-[32px] xl:h-[32px] xxl:w-[48px] xxl:h-[48px]" />
                    </div>

                    {/* details */}
                    <div className="flex flex-col justify-between py-1">
                        <h1 className="text-[14px] xl:text-[24px] text-white font-bold uppercase">Location</h1>
                        <div className="text-[14px] xl:text-[15px] text-white">
                            <p>128 Winston st, Upper West Side, Manhattan</p>
                            <p>New York, NY 05120</p>
                        </div>
                    </div>
                </div>

                {/* hr */}
                <hr className="self-center w-[80%] xl:w-full my-10 xl:my-20" />

                {/* phone */}
                <div className="flex flex-row items-center justify-center gap-x-5">
                    {/* icons */}
                    <div className="bg-white flex justify-center p-3 xl:p-5 rounded-[10px]">
                        <BiSolidPhoneCall className="w-[24px] h-[24px] xl:w-[32px] xl:h-[32px] xxl:w-[48px] xxl:h-[48px]" />
                    </div>

                    {/* details */}
                    <div className="flex flex-col justify-between py-1">
                        <h1 className="text-[14px] xl:text-[24px] text-white font-bold uppercase">+1 234 5678</h1>
                        <div className="text-[14px] xl:text-[15px] text-white">
                            <p>Monday - Saturday: 9am - 8pm</p>
                            <p>Sunday: 9am - 6pm</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Location