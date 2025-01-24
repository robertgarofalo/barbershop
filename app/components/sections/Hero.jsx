// Components
import Nav from "../Nav"
import BookingForm from "../BookingForm"

const Hero = () => {
    return (
        <section className="relative">
            {/* background img reversed*/}
            <div className="absolute h-screen w-full flex bg-[url('/assets/barber.jpg')] bg-cover bg-top scale-x-[-1]" />

            <div className="relative h-screen flex flex-col justify-between pt-5 pb-20 px-20">
                <Nav />
                <BookingForm />

                {/* bottom row */}
                <div className="flex flex-row justify-between items-end">
                    <p className="text-white text-[18px] w-[500px]">Our mission is to provide exceptional grooming services in a relaxed and friendly environment. Whether you're here for a classic haircut, a modern fade, or a clean shave, our skilled barbers are dedicated to ensuring you leave looking and feeling your best.</p>
                    <h1 className="text-white text-[80px] text-right font-semibold leading-[80px] w-[900px] uppercase">Where tradition <br />meets modern style.</h1>
                </div>
            </div>
        </section>
    )
}
export default Hero