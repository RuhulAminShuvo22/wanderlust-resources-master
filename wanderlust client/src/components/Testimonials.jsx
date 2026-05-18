import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Michael Chen",
            country: "Singapore",
            image: "/assets/person1.png",
            review:
                "The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable."
        },
        {
            id: 2,
            name: "Sarah Johnson",
            country: "New York, USA",
            image: "/assets/person2.png",
            review:
                "Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend!"
        }
    ];

    return (

        <div className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Top */}
                <div className="flex items-center justify-between mb-14">

                    <div>

                        <h2 className="text-5xl font-bold text-gray-900">
                            What Travelers Say
                        </h2>

                        <p className="text-gray-500 mt-4">
                            Real experiences from our happy travelers
                        </p>

                    </div>

                    {/* Arrows */}
                    <div className="hidden md:flex items-center gap-4">

                        <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-cyan-500 hover:text-white transition">
                            <FaArrowLeft />
                        </button>

                        <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-cyan-500 hover:text-white transition">
                            <FaArrowRight />
                        </button>

                    </div>

                </div>

                {/* Reviews */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {
                        testimonials.map(testimonial => (

                            <div
                                key={testimonial.id}
                                className="border p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition duration-300"
                            >

                                {/* Text */}
                                <div className="flex-1">

                                    <p className="text-gray-700 leading-8 text-lg">
                                        &quot;{testimonial.review}&quot;
                                    </p>

                                    <div className="mt-8">

                                        <h4 className="text-cyan-500 font-semibold">
                                            — {testimonial.name}
                                        </h4>

                                        <p className="text-gray-400 text-sm">
                                            {testimonial.country}
                                        </p>

                                    </div>

                                </div>

                                {/* Image */}
                                <div>

                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={180}
                                        height={180}
                                        className="w-[180px] h-[180px] object-cover rounded-md"
                                    />

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default Testimonials;