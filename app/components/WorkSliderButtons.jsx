"use client"

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";


const WorkSliderButtons = ({ swiperRef, isFirstSlide, isLastSlide }) => {

    return (
        <div className="flex flex-row gap-2 my-5">
            {/* <button onClick={() => swiper.slidePrev()}> */}
            <button onClick={() => swiperRef.current?.slidePrev()} disabled={isFirstSlide}>
                <HiArrowLongLeft color={`${isFirstSlide ? 'gray' : ''}`} size={30} />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} disabled={isLastSlide}>
                <HiArrowLongRight color={`${isLastSlide ? '#A9A9A9' : ''}`} size={30} />
            </button>
        </div >
    )
}
export default WorkSliderButtons