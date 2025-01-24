// Components
import Nav from "../Nav"
import BookingForm from "../BookingForm"

const Hero = () => {
    return (
        <section className="relative">
            {/* background img reversed*/}
            <div className="absolute h-screen w-full flex bg-[url('/assets/barber.jpg')] bg-cover bg-top scale-x-[-1]" />

            <div className="relative h-screen flex flex-col justify-between pt-5 px-20">
                <Nav />

                <BookingForm />

                {/* bottom row */}
                <div>
                    <p className="text-white">bottom row</p>
                </div>
            </div>
        </section>
    )
}
export default Hero