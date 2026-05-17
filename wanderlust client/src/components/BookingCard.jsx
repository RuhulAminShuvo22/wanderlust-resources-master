
"use client"
import { Button, Card } from "@heroui/react";
import { DateField, Label } from "@heroui/react";

const BookingCard = ({ destination }) => {

    const { price } = destination;

    return (
        <Card className="rounded-none border mt-5">
            <p className="text-sm text-muted">Starting from</p>
            <h2 className="text-3xl font-bold text-cyan-400">${price}</h2>
            <p className="text-sm text-muted">per person</p>

            <DateField className="w-[256px]" name="date">
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>

            <Button className={"w-full rounded-none bg-cyan-500"}>Book Now</Button>

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

// "use client"
// import { Button, Card } from "@heroui/react";
// import { DateField } from "@heroui/react";

// const BookingCard = ({ destination }) => {

//     const { price } = destination;

//     return (
//         <Card className="rounded-none border border-gray-200 p-6 max-w-sm shadow-sm bg-white">
//             {/* Top Pink Stripe Aesthetic */}
//             <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(45deg,#f472b6,#f472b6_4px,#fff_4px,#fff_8px)]"></div>

//             <div className="space-y-1 mb-6">
//                 <p className="text-gray-500 text-sm">Starting from</p>
//                 <h2 className="text-4xl font-semibold text-[#119fc2]">${price}</h2>
//                 <p className="text-gray-500 text-sm">per person</p>
//             </div>

//             {/* Date Input Field */}
//             <div className="mb-6">
//                 <DateField
//                     className="w-full border border-gray-200 rounded px-3 py-2 text-gray-700 bg-gray-50/50"
//                     name="date"
//                     aria-label="Date"
//                 />
//             </div>

//             {/* Book Now Button */}
//             <Button className="w-full rounded-none bg-[#119fc2] text-white font-medium py-6 text-base hover:bg-[#0e819e] flex items-center justify-center gap-2 mb-6">
//                 Book Now <span>→</span>
//             </Button>

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
