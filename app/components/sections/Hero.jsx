// Components
import Nav from "../Nav"
import BookingForm from "../BookingForm"

const Hero = () => {
    return (
        <section className="relative">
            {/* background img reversed*/}
            <div className="absolute h-screen w-full flex bg-[url('/assets/barber.jpg')] bg-cover bg-top scale-x-[-1]" />

            <div className="relative h-screen flex flex-col justify-between pt-5 pb-20 px-20 ">
                <Nav />
                <BookingForm />

                {/* bottom row */}
                <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-end 
                lg:translate-y-[-40px] xl:translate-y-[0px] order-2">
                    <p className="text-white text-center lg:text-left sm:text-[18px] mt-5 lg:mt-0 md:px-24 lg:px-0 lg:w-[500px] order-2 lg:order-1"><span className="hidden lg:flex">Our mission is to provide exceptional grooming services in a relaxed and friendly environment.</span> Whether you're here for a classic haircut, a modern fade, or a clean shave, our skilled barbers are dedicated to ensuring you leave looking and feeling your best.</p>
                    <h1 className="text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[58px] xl:text-[78px] text-center lg:text-right font-semibold lg:leading-[80px] lg:w-[900px] uppercase order-1 lg:order-2 ">Where tradition <br />meets modern style.</h1>
                </div>
            </div>
        </section>
    )
}
export default Hero