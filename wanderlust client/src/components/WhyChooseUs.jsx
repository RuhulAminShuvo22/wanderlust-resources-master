import { FaHeadset, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <div className="bg-cyan-50 py-24">

            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-5xl font-bold text-gray-900">
                        Why Choose Wanderlust
                    </h2>

                    <p className="text-gray-500 mt-4">
                        Your trusted partner for exceptional travel experiences
                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-lg transition duration-300">

                        <FaShieldAlt className="text-4xl text-cyan-500 mb-6" />

                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                            Safe & Secure
                        </h3>

                        <p className="text-gray-500 leading-7">
                            Your safety is our priority with comprehensive
                            travel insurance and 24/7 support.
                        </p>

                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-lg transition duration-300">

                        <FaMapMarkedAlt className="text-4xl text-cyan-500 mb-6" />

                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                            Expert Guides
                        </h3>

                        <p className="text-gray-500 leading-7">
                            Local experts who bring destinations to life
                            with authentic cultural insights.
                        </p>

                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-lg transition duration-300">

                        <FaHeadset className="text-4xl text-cyan-500 mb-6" />

                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                            24/7 Support
                        </h3>

                        <p className="text-gray-500 leading-7">
                            Round-the-clock customer service to assist
                            you wherever your journey takes you.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default WhyChooseUs;