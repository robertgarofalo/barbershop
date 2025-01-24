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
        <div className="flex flex-row justify-between items-center text-white">
            {/* logo */}
            <div>
                <h1 className="font-bold text-[24px]">MODERN MAN</h1>
            </div>

            {/* nav */}
            <nav className="flex gap-5 border-[1px] border-white rounded-lg p-1">
                {links.map((link, index) => (
                    <button key={`link-${index + 1}`}
                        className={`${selectedPage === link.name ? 'bg-white' : 'bg-transparent'} px-4 py-1 rounded`}
                        onClick={() => setSelectedPage(link.name)}
                    >
                        <p className={selectedPage === link.name ? 'text-black' : 'text-white'}>{link.name}</p>
                    </button>
                ))}
            </nav>

            {/* contact button */}
            <button className='border-[1px] border-white px-4 py-2 rounded-lg bg-white text-black'>
                <p>Contact us</p>
            </button>
        </div>
    )
}
export default Nav