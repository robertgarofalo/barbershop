'use client'
import { useState } from 'react'
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetClose,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet'

import { CiMenuFries } from 'react-icons/ci'
import { RiMenu3Fill, RiCloseCircleLine, RiCloseFill } from "react-icons/ri";

const links = [
    {
        name: 'Home',
        path: '/home',
    },
    {
        name: 'Services',
        path: '/services',
    },
    {
        name: 'About us',
        path: '/about-us',
    },
    {
        name: 'News',
        path: '/news',
    },
    {
        name: 'Shop',
        path: '/shop',
    },
]

const Nav = () => {

    const [selectedPage, setSelectedPage] = useState('Home')
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-row justify-between items-center text-white order-1">
            {/* logo */}
            <div onClick={() => setSelectedPage('Home')}>
                <h1 className="font-bold text-[24px] cursor-pointer">MODERN MAN</h1>
            </div>

            {/* desktop nav */}
            <nav className="hidden lg:flex gap-5 border-[1px] border-white rounded-lg p-1">
                {links.map((link, index) => (
                    <button key={`link-${index + 1}`}
                        className={`${selectedPage === link.name ? 'bg-white' : 'bg-transparent'} px-4 py-1 rounded transition-all duration-500`}
                        onClick={() => setSelectedPage(link.name)}
                    >
                        <p className={selectedPage === link.name ? 'text-black' : 'text-white'}>{link.name}</p>
                    </button>
                ))}
            </nav>

            <button className='hidden lg:flex border-[1px] border-white px-4 py-2 rounded-lg bg-white hover:bg-transparent text-black hover:text-white transition-all duration-300'>
                <p>Contact us</p>
            </button>

            {/* Mobile nav */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="flex justify-center items-center lg:hidden">
                    <RiMenu3Fill className="text-[28px] text-white" />
                </SheetTrigger>
                <SheetContent className='bg-secondary border-l-secondary w-full flex flex-col items-center justify-between [&>button:last-child]:hidden'>

                    {/* sheet title removes error */}
                    <SheetTitle className="hidden" />

                    <div className='flex items-center justify-between w-full '>
                        <div onClick={() => setIsOpen(false)}>
                            <h1 className="text-4xl font-semibold hover:text-luxury transition-all duration-400">MODERN MAN.</h1>
                        </div>
                        <SheetClose asChild>
                            {/* ui/sheet.jsx - hidden added to original close button - line 52 */}
                            <RiCloseFill className='w-7 h-7 cursor-pointer hover:text-luxury transition-all duration-400' />
                        </SheetClose>
                    </div>

                    <nav className="flex flex-col gap-14 text-3xl">
                        {links.map((link, index) => (
                            <div key={index} onClick={() => setIsOpen(false)}
                                className='mx-auto hover:text-luxury border-b-2 border-transparent hover:border-b-2 hover:border-accent cursor-pointer'
                            >
                                {link.name}
                            </div>
                        ))}
                    </nav>

                    {/* <SocialHeader /> */}

                    <div>
                        <button 
                        onClick={() => setIsOpen(false)}
                        className='flex border-[1px] border-black px-4 py-2 rounded-lg bg-black hover:bg-transparent text-white hover:text-black transition-all duration-300'>
                            <p>Contact us</p>
                        </button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
export default Nav