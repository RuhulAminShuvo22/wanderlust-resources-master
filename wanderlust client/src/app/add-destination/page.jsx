// 'use client'

// import {
//     Button,
//     Card,
//     FieldError,
//     Input,
//     Label,
//     ListBox,
//     Select,
//     TextArea,
//     TextField,
// } from "@heroui/react";

// const AddDestinationPage = () => {

//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.currentTarget);

//         const destination = Object.fromEntries(formData.entries());

//         console.log(destination);

//         const res = await fetch('${process.env.NEXT_PUBLIC_SERVER_URL}/destination', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(destination)
//         });

//         const data = await res.json();

//         console.log(data);
//     }

//     // example loading state
//     const isPending = false;

//     return (
//         <div className="p-5 max-w-7xl mx-auto">
//             <h1 className="text-2xl font-bold"> Add Destination </h1>

//             <Card>
//                 <form 
//                 onSubmit={onSubmit} className="p-10 space-y-8 w-3xl ">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//                         {/* Destination Name */}
//                         <div className="md:col-span-2">
//                             <TextField name="destinationName" isRequired>
//                                 <Label>Destination Name</Label>

//                                 <Input
//                                     placeholder="Bali Paradise"
//                                     className="rounded-2xl"
//                                 />

//                                 <FieldError />
//                             </TextField>
//                         </div>

//                         {/* Country */}
//                         <TextField name="country" isRequired>
//                             <Label>Country</Label>

//                             <Input
//                                 placeholder="Indonesia"
//                                 className="rounded-2xl"
//                             />

//                             <FieldError />
//                         </TextField>

//                         {/* Category */}
//                         <div>
//                             <Select
//                                 name="category"
//                                 isRequired
//                                 className="w-full"
//                                 placeholder="Select category"
//                             >
//                                 <Label>Category</Label>

//                                 <Select.Trigger className="rounded-2xl">
//                                     <Select.Value />
//                                     <Select.Indicator />
//                                 </Select.Trigger>

//                                 <Select.Popover>
//                                     <ListBox>

//                                         <ListBox.Item id="Beach" textValue="Beach">
//                                             Beach
//                                             <ListBox.ItemIndicator />
//                                         </ListBox.Item>

//                                         <ListBox.Item id="Mountain" textValue="Mountain">
//                                             Mountain
//                                             <ListBox.ItemIndicator />
//                                         </ListBox.Item>

//                                         <ListBox.Item id="City" textValue="City">
//                                             City
//                                             <ListBox.ItemIndicator />
//                                         </ListBox.Item>

//                                         <ListBox.Item id="Adventure" textValue="Adventure">
//                                             Adventure
//                                             <ListBox.ItemIndicator />
//                                         </ListBox.Item>

//                                         <ListBox.Item id="Cultural" textValue="Cultural">
//                                             Cultural
//                                             <ListBox.ItemIndicator />
//                                         </ListBox.Item>

//                                         <ListBox.Item id="Luxury" textValue="Luxury">
//                                             Luxury
//                                             <ListBox.ItemIndicator />
//                                         </ListBox.Item>

//                                     </ListBox>
//                                 </Select.Popover>
//                             </Select>
//                         </div>

//                         {/* Price */}
//                         <TextField name="price" type="number" isRequired>
//                             <Label>Price (USD)</Label>

//                             <Input
//                                 type="number"
//                                 placeholder="1299"
//                                 className="rounded-2xl"
//                             />

//                             <FieldError />
//                         </TextField>

//                         {/* Duration */}
//                         <TextField name="duration" isRequired>
//                             <Label>Duration</Label>

//                             <Input
//                                 placeholder="7 Days / 6 Nights"
//                                 className="rounded-2xl"
//                             />

//                             <FieldError />
//                         </TextField>

//                         {/* Departure Date */}
//                         <div className="md:col-span-2">
//                             <TextField
//                                 name="departureDate"
//                                 type="date"
//                                 isRequired
//                             >
//                                 <Label>Departure Date</Label>

//                                 <Input
//                                     type="date"
//                                     className="rounded-2xl"
//                                 />

//                                 <FieldError />
//                             </TextField>
//                         </div>

//                         {/* Image URL */}
//                         <div className="md:col-span-2">
//                             <TextField name="imageUrl" isRequired>
//                                 <Label>Image URL</Label>

//                                 <Input
//                                     type="url"
//                                     placeholder="https://example.com/bali-paradise.jpg"
//                                     className="rounded-2xl"
//                                 />

//                                 <FieldError />
//                             </TextField>
//                         </div>

//                         {/* Description */}
//                         <div className="md:col-span-2">
//                             <TextField name="description" isRequired>
//                                 <Label>Description</Label>

//                                 <TextArea
//                                     placeholder="Describe the travel experience..."
//                                     className="rounded-3xl"
//                                 />

//                                 <FieldError />
//                             </TextField>
//                         </div>
//                     </div>

//                     {/* Button */}
//                     <Button
//                         type="submit"
//                         variant="outline"
//                         isLoading={isPending}
//                         className="rounded-none w-full bg-cyan-500 text-white"
//                     >
//                         Add Destination
//                     </Button>
//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default AddDestinationPage;

'use client'

import { useRouter } from 'next/navigation'; // ১. রিডাইরেক্টের জন্য useRouter ইমপোর্ট করা হলো
import { authClient } from "@/lib/auth-client"; // ২. Better Auth ক্লায়েন্ট ইম্পোর্ট করা হলো
import { useState } from "react";

import {
    Button,
    Card,
    FieldError,
    Input,
    Label,
    ListBox,
    Select,
    TextArea,
    TextField,
} from "@heroui/react";

const AddDestinationPage = () => {
    const router = useRouter(); // ৩. রাউটার হুক ডিফাইন করা হলো
    const { data: session } = authClient.useSession();
    const user = session?.user;

    // লোডিং স্টেট ডাইনামিক করার জন্য একটি লোকাল স্টেট নেওয়া হলো
    const [isPending, setIsPending] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        // ৪. লগইন না থাকলে প্রটেক্ট করবে
        if (!user) {
            alert("Please log in first to add a destination.");
            return;
        }

        setIsPending(true); // লোডিং শুরু হলো

        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());

        console.log(destination);

        try {
            // ৫. Better Auth থেকে তাজা টোকেন জেনারেট করা হলো
            const { data: tokenData } = await authClient.token();

            // ৬. হেডারে Bearer Token পাস করে রিকোয়েস্ট পাঠানো হলো
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${tokenData?.token}` // টোকেন পাঠানো হলো
                },
                body: JSON.stringify(destination)
            });

            const data = await res.json();
            console.log(data);

            if (data.insertedId) {
                alert("Destination successfully added!");
                // ❌ ভুল 'redirect' এর বদলে ক্লায়েন্ট সাইডে নিরাপদে রিডাইরেকশন
                router.push('/destinations'); 
                router.refresh(); // ডেস্টিনেশন লিস্ট পেজ রিফ্রেশ করার জন্য
            } else {
                alert("Failed to add destination.");
            }
        } catch (error) {
            console.error("Request Error:", error);
            alert("Connection error to server.");
        } finally {
            setIsPending(false); // লোডিং শেষ হলো
        }
    }

    return (
        <div className="p-5 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold"> Add Destination </h1>

            <Card>
                <form 
                onSubmit={onSubmit} className="p-10 space-y-8 w-3xl ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField name="destinationName" isRequired>
                                <Label>Destination Name</Label>
                                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired>
                            <Label>Country</Label>
                            <Input placeholder="Indonesia" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Category */}
                        <div>
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label>Category</Label>
                                <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Beach" textValue="Beach">Beach<ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Mountain" textValue="Mountain">Mountain<ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="City" textValue="City">City<ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Adventure" textValue="Adventure">Adventure<ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Cultural" textValue="Cultural">Cultural<ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Luxury" textValue="Luxury">Luxury<ListBox.ItemIndicator /></ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label>Price (USD)</Label>
                            <Input type="number" placeholder="1299" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField name="duration" isRequired>
                            <Label>Duration</Label>
                            <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="departureDate" type="date" isRequired>
                                <Label>Departure Date</Label>
                                <Input type="date" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input type="url" placeholder="https://example.com/bali-paradise.jpg" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description (এখানে HTML কনফ্লিক্ট এড়াতে TextField এর ভেতর TextArea ফিক্স করা হয়েছে) */}
                        <div className="md:col-span-2 flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">Description</label>
                            <textarea 
                                name="description" 
                                required 
                                placeholder="Describe the travel experience..." 
                                className="w-full min-h-[120px] rounded-3xl border border-gray-300 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <Button
                        type="submit"
                        variant="outline"
                        isLoading={isPending}
                        className="rounded-none w-full bg-cyan-500 text-white font-bold"
                    >
                        Add Destination
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddDestinationPage;
