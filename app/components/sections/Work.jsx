'use client'
import { useState, useRef } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import WorkSliderButtons from '../WorkSliderButtons';

const images = [
    { name: 'barber image 1', path: '/assets/barber/1.jpg' },
    { name: 'barber image 2', path: '/assets/barber/2.jpg' },
    { name: 'barber image 3', path: '/assets/barber/3.jpg' },
    { name: 'barber image 4', path: '/assets/barber/4.jpg' },
    { name: 'barber image 5', path: '/assets/barber/5.jpg' },
    { name: 'barber image 6', path: '/assets/barber/6.jpg' },
    { name: 'barber image 7', path: '/assets/barber/7.jpg' },
    { name: 'barber image 8', path: '/assets/barber/8.jpg' },
    { name: 'barber image 9', path: '/assets/barber/9.jpg' },
    { name: 'barber image 10', path: '/assets/barber/10.jpg' },
]

const Work = () => {
    const swiper1Ref = useRef(null)
    const [isFirstSlide, setIsFirstSlide] = useState(true)
    const [isLastSlide, setIsLastSlide] = useState(false)

    return (
        <div className="w-full h-screen bg-[#ebe0cb] flex flex-row pl-20 py-16">

            {/* row 1 - WORK */}
            <div className='flex flex-row w-full overflow-hidden '>
                <div className='flex flex-col justify-evenly w-[30%] h-[50%] '>
                    <h1 className='text-[62px] font-semibold uppercase leading-[70px]'>Discover our work</h1>
                    <p>Our team of experienced barbers is dedicated to their craft. We stay updated with the latest techniques and styles to ensure you get the best service possible.</p>
                    <div>
                        <WorkSliderButtons swiperRef={swiper1Ref} isFirstSlide={isFirstSlide} isLastSlide={isLastSlide} />
                    </div>
                </div>

                <div className='w-[70%] h-[50%] translate-x-[50px]'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={40}
                        className=""
                        onSwiper={(swiper) => {
                            swiper1Ref.current = swiper
                            setIsFirstSlide(swiper.activeIndex === 0);
                            setIsLastSlide(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setIsFirstSlide(swiper.activeIndex === 0);
                            setIsLastSlide(swiper.isEnd);
                        }}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={`${image}-${index}`} className='relative'>
                                <Image src={image.path} width={300} height={400} alt={image.name}
                                    className='rounded-lg min-w-[300px] min-h-[400px] max-h-[400px]'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* row 2 - PRICES*/}
            <div></div>
        </div>
    )
}
export default Work