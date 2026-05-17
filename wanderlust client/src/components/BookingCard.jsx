
// "use client"
// import { authClient } from "@/lib/auth-client";
// import { Button, Card } from "@heroui/react";
// import { DateField, Label } from "@heroui/react";
// import { useState } from "react";

// const BookingCard = ({ destination }) => {

//     const { data: session } = authClient.useSession()
//     const user = session?.user
    
//     const { price, _id, destinationName, imageUrl, country } = destination;

//     const [departureDate, setDepartureDate] = useState(null);
//     //console.log(new Date(departureDate))

//     const handleBooking = async ()=> {
//         const bookingData = {
//             userID: user.id ,
//             userImage: user.image,
//             userName: user.name,
//             destinationId: _id,
//             destinationName,
//             price,
//             imageUrl,
//             country,
//             departureDate: new Date(departureDate)

//         }

//         console.log(bookingData)
//     }




   

//     return (
//         <Card className="rounded-none border mt-5">
//             <p className="text-sm text-muted">Starting from</p>
//             <h2 className="text-3xl font-bold text-cyan-400">${price}</h2>
//             <p className="text-sm text-muted">per person</p>

//             <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
//                 <Label>Departure Date</Label>
//                 <DateField.Group>
//                     <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
//                 </DateField.Group>
//             </DateField>



//             <Button  onClick={handleBooking} className={"w-full rounded-none bg-cyan-500"}>Book Now</Button>



//             {/* Features List */}
//             <div className="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-4">
//                 <div className="flex items-center gap-2">
//                     <span className="text-emerald-600 font-bold">✓</span>
//                     <span>Free cancellation up to 7 days</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <span className="text-emerald-600 font-bold">✓</span>
//                     <span>Travel insurance included</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <span className="text-emerald-600 font-bold">✓</span>
//                     <span>24/7 customer support</span>
//                 </div>
//             </div>

//         </Card>
//     );
// };

// export default BookingCard;
"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import { DateField, Label } from "@heroui/react";
import { useState } from "react";

const BookingCard = ({ destination }) => {

    const { data: session } = authClient.useSession()
    const user = session?.user
    
    const { price, _id, destinationName, imageUrl, country } = destination;

    const [departureDate, setDepartureDate] = useState(null);

    const handleBooking = async ()=> {
        // 1. Prevent crash if user is not logged in
        if (!user) {
            alert("Please log in first to book a destination.");
            return;
        }

        // 2. Alert if no date is selected
        if (!departureDate) {
            alert("Please select a departure date.");
            return;
        }

        // Safe conversion for HeroUI DateField state
        let ISO_DateString = "";
        if (departureDate && departureDate.year) {
            ISO_DateString = new Date(departureDate.year, departureDate.month - 1, departureDate.day).toISOString();
        } else {
            ISO_DateString = new Date(departureDate).toISOString();
        }

        const bookingData = {
            userID: user.id ,
            userImage: user.image,
            userName: user.name,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: ISO_DateString
        }

        try {
            const res = await fetch("http://localhost:5000/booking", {
                method: "POST",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(bookingData)
            })

            const data = await res.json();
            console.log(data);

            if(data.insertedId) {
                alert("Booking successfully added to MongoDB!");
            } else {
                alert("Failed to save booking.");
            }
        } catch (error) {
            console.error("Request Error:", error);
            alert("Connection error to server.");
        }
    }

    return (
        <Card className="rounded-none border mt-5">
            <p className="text-sm text-muted">Starting from</p>
            <h2 className="text-3xl font-bold text-cyan-400">${price}</h2>
            <p className="text-sm text-muted">per person</p>

            {/* Added value attribute to keep sync with HeroUI core state */}
            <DateField value={departureDate} onChange={setDepartureDate} className="w-[256px]" name="date">
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>

            <Button  onClick={handleBooking} className={"w-full rounded-none bg-cyan-500"}>Book Now</Button>

            {/* Features List */}
            <div className="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Free cancellation up to 7 days</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Travel insurance included</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>24/7 customer support</span>
                </div>
            </div>

        </Card>
    );
};

export default BookingCard;
