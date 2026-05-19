"use client";

import { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedDestinations = () => {

    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
            .then(res => res.json())
            .then(data => {
                setDestinations(data);
                setLoading(false);
            })

    }, []);

    // শুধু প্রথম 6টা destination দেখাবে
    const featuredDestinations = destinations.slice(0, 6);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">

            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

                <div>
                    <h2 className="text-4xl font-bold text-gray-800">
                        Featured Destinations
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Handpicked travel experiences for adventure seekers ✈️
                    </p>
                </div>

                <Link href="/destinations">
                    <Button
                        variant="bordered"
                        className="border-cyan-500 text-cyan-500 font-semibold"
                    >
                        All Destinations
                        <FaArrowRight />
                    </Button>
                </Link>

            </div>

            {/* Loading */}
            {
                loading && (
                    <div className="text-center py-20">
                        <span className="loading loading-spinner loading-lg text-cyan-500"></span>
                    </div>
                )
            }

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {
                    featuredDestinations.map(destination => (
                        <DestinationCard
                            key={destination._id}
                            destination={destination}
                        />
                    ))
                }

            </div>

        </div>
    );
};

export default FeaturedDestinations;