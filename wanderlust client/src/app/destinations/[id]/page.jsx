import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";


import { RiMapPin2Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";


const DestinationDetailsPage = async({params}) => {

    const {id} = await params
    
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
    //console.log(destination)

    const {imageUrl, price, destinationName, duration, country, description } = destination;




    return (
        <div className="max-w-7xl mx-auto">
            <h2>This is Destination Details Page</h2>


            <Image
                alt={destinationName}
                src={imageUrl}
                height={500}
                width={800}
            >


            </Image>

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

                            <div>
                                <h2 className="mt-10 text-2xl font-bold">OverView</h2>
                                <p>{description}</p>

                                <br />

                                <h2 className="mt-10 text-2xl font-bold">Highlight</h2>
                                
                            </div>
                            
                            
                        </div>



        </div>
    );
};

export default DestinationDetailsPage;