import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyBookingsPage = async () => {


    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    console.log(session)

    const res = await fetch(`http://localhost:5000/booking/6a0991adfeb2802e9ab7d270`)


    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold'> My Bookings </h1>
        </div>
    );
};

export default MyBookingsPage;