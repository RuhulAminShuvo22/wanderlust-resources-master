import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const JourneyCTA = () => {

    return (

        <div
            className="relative h-[420px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
                backgroundImage: "url('/assets/CTA.png')",
            }}
        >

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">

                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Ready To Start Your Journey?
                </h2>

                <p className="text-lg text-gray-200 mb-10">
                    Join thousands of travelers who have discovered
                    the world with us
                </p>

                <Link href="/destinations">

                    <button
                        className="
                            bg-white
                            text-black
                            px-8
                            py-4
                            font-semibold
                            flex
                            items-center
                            gap-4
                            mx-auto
                            hover:bg-cyan-500
                            hover:text-white
                            transition-all
                            duration-300
                        "
                    >

                        BOOK YOUR TRIP TODAY

                        <FaArrowRight />

                    </button>

                </Link>

            </div>

        </div>
    );
};

export default JourneyCTA;