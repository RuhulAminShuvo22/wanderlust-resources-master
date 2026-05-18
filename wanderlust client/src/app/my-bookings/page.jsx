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
                        <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">
                            <Image
                                src={booking.imageUrl}
                                alt={booking.destinationName}
                                height={300}
                                width={300}
                            >
                            </Image>

                            <div>
                                <h1>{booking.destinationName}</h1>
                                <p>{new Date(booking.departureDate).toLocaleDateString("en-US", {
                                    year: "numeric", // Fixed: changed from "Numeric" to "numeric"
                                    month: "long",
                                    day: "numeric"
                                })}</p>

                                <p className="text-3xl font-bold text-cyan-500">
                                    ${booking.price}
                                </p>
                            </div>

                        </div>)
                }
            </div>

        </div>
    );
};

export default MyBookingsPage;