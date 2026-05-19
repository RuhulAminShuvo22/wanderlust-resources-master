


import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { EditModal } from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlert";
import { RiMapPin2Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";
import { Button } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import BookingCard from "@/components/BookingCard";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";


const DestinationDetailsPage = async ({ params }) => {

    const { id } = await params;

    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        cache: 'no-store',
        headers: {
            "authorization": `Bearer ${token}`
        }
    });
    const destination = await res.json();
    //console.log(destination)

    // Safety guard to handle missing or empty data
    if (!destination || destination.error || Object.keys(destination).length === 0) {
        return (
            <div className="text-center mt-20 text-red-500">
                <h2 className="text-2xl font-bold">Data Not Found!</h2>
                <p>Please check your database and backend server connection.</p>
            </div>
        );
    }

    const { imageUrl, price, destinationName, duration, country, description } = destination;




    return (
        <div className="max-w-7xl mx-auto">

            <div className="flex items-center gap-3 justify-end mt-5 mb-3">
                <EditModal destination={destination}></EditModal>
                <DeleteAlert destination={destination}></DeleteAlert>
            </div>

            <Image
                className="w-full h-100 object-cover"
                alt={destinationName}
                src={imageUrl}
                height={500}
                width={800}
            >


            </Image>

            <div className="flex justify-between">

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

                        {/* <div className="text-2xl font-bold">
                                    <h3>${price}</h3>
                                </div> */}

                    </div>

                    <div>
                        <h2 className="mt-10 text-2xl font-bold">OverView</h2>
                        <p>{description}</p>

                        <br />

                        <h2 className="mt-10 text-2xl font-bold">Highlight</h2>

                    </div>


                </div>

                <BookingCard destination={destination}></BookingCard>

            </div>



        </div>
    );
};

export default DestinationDetailsPage;
