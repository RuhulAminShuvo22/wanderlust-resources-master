
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@heroui/react";
import Image from "next/image";
import { RiMapPin2Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";

const DestinationCard = ({ destination }) => {

    const {_id, imageUrl, price, destinationName, duration, country } = destination;

    return (
        <div className="border rounded-xl overflow-hidden">
            <Image
                className="w-full h-[250px] object-cover"
                alt={destinationName}
                src={imageUrl}
                height={400}
                width={400}
            />

            <div className="p-2">
                <div className="flex items-center gap-1">
                    <RiMapPin2Fill />
                    <span>{country}</span>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <div>
                        <h2 className="text-xl font-bold">
                            {destinationName}
                        </h2>
                    </div>

                    <div className="flex gap-2 items-center">
                        <SlCalender />
                        {duration}
                    </div>

                    <div className="text-2xl font-bold">
                        <h3>${price}</h3>
                    </div>
                </div>
                <Link href={`/destinations/${_id}`}>
                    <Button  variant="ghost" className={'mt-1 text-cyan-500'}><FaExternalLinkAlt />Book Now</Button>
                </Link>
            </div>
            
        </div>
    );
};

export default DestinationCard;