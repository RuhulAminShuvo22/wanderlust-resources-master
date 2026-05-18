import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";


const MyBookingsPage = async () => {


    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const user = session?.user
    console.log(user)

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`);

    const bookings = await res.json()
    console.log(bookings)


    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold'> My Bookings </h1>

            <div>
                {
                    bookings.map(booking => 
                        <div key={booking._id}>
                            <Image 
                                src={booking.imageUrl}
                                alt={booking.destinationName}
                                height={300}
                                width={300}
                                >

                            </Image>
                        </div>)
                }
            </div>

        </div>
    );
};

export default MyBookingsPage;