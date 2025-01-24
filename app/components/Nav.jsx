'use client'
import { useState } from 'react'
import Link from "next/link"

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

        </div>
    )
}
export default Nav