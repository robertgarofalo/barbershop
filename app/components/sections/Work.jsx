'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { BsDash } from "react-icons/bs";


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

const testimonials = [
    { name: 'James R.', text: "Best haircut I’ve ever had! The attention to detail was amazing, and the atmosphere was top-notch. The barber took his time to make sure everything was perfect. Definitely my go-to spot from now on!" },
    { name: 'Michael T.', text: "Friendly staff, great vibes, and an even better haircut! They really listen to what you want and make sure you leave looking sharp. The hot towel shave was a game-changer. Highly recommend this place!" },
    { name: 'Daniel S', text: "Top-quality service with a relaxed, professional touch. The fade was flawless, and the beard trim was on point. You can tell they care about their craft. I won’t be going anywhere else!" },
]

const pricing = [
    { name: 'Haircut', price: '$40' },
    { name: 'Shave', price: '$35' },
    { name: 'Haircut + Shave', price: '$70' },
    { name: 'Beard Trim', price: '$15' },
]

const Work = () => {
    const swiper1Ref = useRef(null)
    const [isFirstSlide, setIsFirstSlide] = useState(true)
    const [isLastSlide, setIsLastSlide] = useState(false)
    const [spaceBetween, setSpaceBetween] = useState(50);

    return (
        <div className="w-full lg:h-screen bg-[#ebe0cb] flex flex-col px-20 lg:pl-20 py-16">

            {/* row 1 - WORK */}
            <div className='flex flex-col items-center lg:items-start lg:flex-row w-full overflow-hidden mb-20'>
                <div className='flex flex-col justify-evenly w-[80%] lg:w-[30%] h-[100%] text-center lg:text-left gap-5 lg:gap-0'>
                    <h1 className='text-[62px] font-semibold uppercase leading-[70px]'>Discover our work</h1>
                    <p>Our team of experienced barbers is dedicated to their craft. We stay updated with the latest techniques and styles to ensure you get the best service possible.</p>
                    <div className='flex flex-row justify-center lg:justify-start'>
                        <WorkSliderButtons swiperRef={swiper1Ref} isFirstSlide={isFirstSlide} isLastSlide={isLastSlide} />
                    </div>
                </div>

                <div className='w-full lg:w-[70%] lg:translate-x-[50px]'>
                    <Swiper
                        // slidesPerView={4}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            895: { slidesPerView: 3 },
                            1060: { slidesPerView: 2 },
                            1350: { slidesPerView: 3 },
                            1800: { slidesPerView: 4 }
                        }}
                        spaceBetween={50}
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
                            <SwiperSlide key={`${image}-${index}`}>
                                <Image src={image.path} width={300} height={400} alt={image.name}
                                    className='rounded-lg w-[200px] h-[200px] sm:min-w-[250px] sm:h-[300px] lg:min-w-[300px] lg:min-h-[400px] lg:max-h-[400px]'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* row 2 - PRICES*/}
            <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-20'>
                {/* testimonials */}
                <div className='flex flex-col justify-between bg-[#fba95b] w-[450px] h-[300px] rounded-[20px] p-8 lg:p-10 mb-20 lg:mb-0' >
                    <Swiper
                        slidesPerView={1}
                        // spaceBetween={40}
                        className='flex flex-col max-w-full h-full'
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={`${testimonial.name}-testimonial`}>
                                <p className='text-[16px]'>"{testimonial.text}"</p>
                                <p className='text-[16px] mt-5 text-right font-semibold italic'>{testimonial.name}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

                <div className='w-[450px] md:w-[700px] flex flex-col px-10 xl:px-20'>
                    <h1 className='uppercase text-[42px] font-semibold text-center lg:text-left'>Our Prices</h1>
                    {pricing.map((item, index) => (
                        <div key={`${item.name}-${index}`} className='flex flex-col my-2 gap-3'>
                            <div className='flex flex-row justify-between w-full'>
                                <p className='uppercase'>{item.name}</p>
                                <p>{item.price}</p>
                            </div>
                            <hr className='border-[#b4b4b4]' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Work