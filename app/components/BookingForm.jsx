'use client'

import { useState, useEffect } from 'react'

const BookingForm = () => {

    const [currentDateTime, setCurrentDateTime] = useState('')

    const handleSubmitForm = (e) => {
        e.preventDefault()

    }

    const getFormattedDateTime = () => {
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Ensure two digits
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        // return `${year}-${month}-${day}T${hours}:${minutes}`;

        setCurrentDateTime(`${year}-${month}-${day}T${hours}:${minutes}`)
    }

    useEffect(() => {

        getFormattedDateTime()

    }, [])



    return (
        <section className="flex flex-row justify-center lg:justify-start text-white order-3 lg:order-2">
            <form onSubmit={handleSubmitForm} className="flex flex-col gap-y-4 border-[1.5px] border-white py-10 px-5 rounded-xl w-[380px]">
                <h3 className='text-[28px] mb-5'>Make an appointment</h3>
                <input className='text-[12px] placeholder-grey border-[1px] rounded py-2 px-4' type="text" label="name" placeholder="Name" />
                <input className='text-[12px] placeholder-white bg-transparent border-[1px] rounded py-2 px-4' type="email" label="email" placeholder="Email" />
                <input className='text-[12px] placeholder-white bg-transparent border-[1px] rounded py-2 px-4' type="number" label="phone" placeholder="Phone" />
                <div className="flex flex-row justify-between pb-10">
                    <input className='text-[12px] text-center text-white bg-transparent border-[1px] rounded py-2 px-2 ' type="datetime-local" label="name" onChange={(e) => setCurrentDateTime(e.target.value)} value={currentDateTime} />
                    <button className='text-[12px] text-black border-[1px] border-accent bg-accent rounded px-3 '>Submit request</button>
                </div>
            </form>
        </section>
    )
}
export default BookingForm