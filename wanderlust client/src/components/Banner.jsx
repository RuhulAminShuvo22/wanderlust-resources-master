import { Separator } from "@heroui/react";
import { ArrowRight } from "lucide-react";

const Banner = () => {
    return (
        <section
            className="
                bg-[url('/assets/banner.png')]
                bg-cover
                bg-center
                relative
                min-h-screen
                text-white
            "
        >

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45"></div>

            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    min-h-screen
                    flex
                    flex-col
                    justify-between
                "
            >

                {/* Hero Content */}
                <div
                    className="
                        flex-1
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                        px-4
                        sm:px-6
                        lg:px-10
                    "
                >

                    <h1
                        className="
                            font-light
                            leading-[0.95]
                            tracking-tight
                            text-5xl
                            sm:text-6xl
                            md:text-7xl
                            lg:text-[110px]
                            max-w-5xl
                        "
                    >
                        Discover Your <br />
                        Next Adventure
                    </h1>

                    <p
                        className="
                            mt-6
                            text-sm
                            sm:text-base
                            md:text-lg
                            lg:text-2xl
                            text-gray-200
                            max-w-3xl
                            leading-relaxed
                        "
                    >
                        Explore breathtaking destinations and create unforgettable
                        memories with our curated travel experiences.
                    </p>

                    {/* Buttons */}
                    <div
                        className="
                            mt-10
                            flex
                            flex-col
                            sm:flex-row
                            items-center
                            gap-4
                        "
                    >

                        <button
                            className="
                                bg-cyan-500
                                hover:bg-cyan-600
                                transition-all
                                duration-300
                                uppercase
                                px-8
                                py-4
                                text-sm
                                font-semibold
                                tracking-wide
                                flex
                                items-center
                                gap-3
                                cursor-pointer
                            "
                        >
                            Explore Now
                            <ArrowRight size={18} />
                        </button>

                        <button
                            className="
                                bg-white/25
                                hover:bg-white/35
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                uppercase
                                px-8
                                py-4
                                text-sm
                                font-semibold
                                tracking-wide
                                cursor-pointer
                            "
                        >
                            View Destination
                        </button>
                    </div>
                </div>

                {/* Bottom Search Bar */}
                <div className="relative z-10 w-full">

                    <div
                        className="
                            bg-white/20
                            backdrop-blur-md
                            border-t
                            border-white/20
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-5
                        "
                    >

                        {/* Location */}
                        <div
                            className="
                                px-6
                                py-5
                                flex
                                flex-col
                                justify-center
                            "
                        >
                            <h3 className="text-lg font-medium">
                                Location
                            </h3>

                            <p className="text-sm text-gray-200">
                                Address, City Or Zip
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:flex absolute left-[20%] top-1/2 -translate-y-1/2 h-16">
                            <Separator
                                orientation="vertical"
                                className="bg-white/30"
                            />
                        </div>

                        {/* Date */}
                        <div
                            className="
                                px-6
                                py-5
                                flex
                                flex-col
                                justify-center
                            "
                        >
                            <h3 className="text-lg font-medium">
                                Date/Duration
                            </h3>

                            <p className="text-sm text-gray-200">
                                Anytime/3 Days
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:flex absolute left-[40%] top-1/2 -translate-y-1/2 h-16">
                            <Separator
                                orientation="vertical"
                                className="bg-white/30"
                            />
                        </div>

                        {/* Budget */}
                        <div
                            className="
                                px-6
                                py-5
                                flex
                                flex-col
                                justify-center
                            "
                        >
                            <h3 className="text-lg font-medium">
                                Budget
                            </h3>

                            <p className="text-sm text-gray-200">
                                $0-$3000
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:flex absolute left-[60%] top-1/2 -translate-y-1/2 h-16">
                            <Separator
                                orientation="vertical"
                                className="bg-white/30"
                            />
                        </div>

                        {/* People */}
                        <div
                            className="
                                px-6
                                py-5
                                flex
                                flex-col
                                justify-center
                            "
                        >
                            <h3 className="text-lg font-medium">
                                People
                            </h3>

                            <p className="text-sm text-gray-200">
                                5-10
                            </p>
                        </div>

                        {/* Search Button */}
                        <button
                            className="
                                bg-cyan-500
                                hover:bg-cyan-600
                                transition-all
                                duration-300
                                text-xl
                                font-semibold
                                cursor-pointer
                                w-full
                                h-full
                                min-h-[100px]
                            "
                        >
                            Search
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;