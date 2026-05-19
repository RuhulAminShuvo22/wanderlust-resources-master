// "use client";
// import { BiEdit } from "react-icons/bi"

// import { Envelope } from "@gravity-ui/icons";
// import {
//     Button,
//     Input,
//     Label,
//     Modal,
//     Surface,
//     TextField,
//     Card,
//     FieldError,
//     ListBox,
//     Select,
//     TextArea,

// } from "@heroui/react";

// export function EditModal({ destination }) {

//     const { _id, imageUrl, price, destinationName, duration, departureDate, category, country, description } = destination;

//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.currentTarget);

//         const destination = Object.fromEntries(formData.entries());

//         console.log(destination);

//         const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json',
//                 //authorization: `Bearer ${tokenData?.token}`
//             },
//             body: JSON.stringify(destination)
//         });

//          const data = await res.json();

//          console.log(data);
//     }

//     return (
//         <Modal>
            
//                 <Button variant="outline" className={"rounded-none  "}>
//                     <BiEdit></BiEdit> Edit
//                 </Button>
            

//             <Modal.Backdrop>
//                 <Modal.Container placement="auto">
//                     <Modal.Dialog className="sm:max-w-xl">
//                         <Modal.CloseTrigger />
//                         <Modal.Header>

//                             <Modal.Heading>Edit Destination</Modal.Heading>

//                         </Modal.Header>
//                         <Modal.Body className="p-6">
//                             <Surface variant="default">

//                                 <form
//                                     onSubmit={onSubmit} className="p-10 space-y-8  ">
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//                                         {/* Destination Name */}
//                                         <div className="md:col-span-2">
//                                             <TextField defaultValue={destinationName} name="destinationName" isRequired>
//                                                 <Label>Destination Name</Label>

//                                                 <Input

//                                                     placeholder="Bali Paradise"
//                                                     className="rounded-2xl"
//                                                 />

//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Country */}
//                                         <TextField
//                                             defaultValue={country}
//                                             name="country" isRequired>
//                                             <Label>Country</Label>

//                                             <Input
//                                                 placeholder="Indonesia"
//                                                 className="rounded-2xl"
//                                             />

//                                             <FieldError />
//                                         </TextField>

//                                         {/* Category */}
//                                         <div>
//                                             <Select
//                                                 defaultValue={category}
//                                                 name="category"
//                                                 isRequired
//                                                 className="w-full"
//                                                 placeholder="Select category"
//                                             >
//                                                 <Label>Category</Label>

//                                                 <Select.Trigger className="rounded-2xl">
//                                                     <Select.Value />
//                                                     <Select.Indicator />
//                                                 </Select.Trigger>

//                                                 <Select.Popover>
//                                                     <ListBox>

//                                                         <ListBox.Item id="Beach" textValue="Beach">
//                                                             Beach
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>

//                                                         <ListBox.Item id="Mountain" textValue="Mountain">
//                                                             Mountain
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>

//                                                         <ListBox.Item id="City" textValue="City">
//                                                             City
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>

//                                                         <ListBox.Item id="Adventure" textValue="Adventure">
//                                                             Adventure
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>

//                                                         <ListBox.Item id="Cultural" textValue="Cultural">
//                                                             Cultural
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>

//                                                         <ListBox.Item id="Luxury" textValue="Luxury">
//                                                             Luxury
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>

//                                                     </ListBox>
//                                                 </Select.Popover>
//                                             </Select>
//                                         </div>

//                                         {/* Price */}
//                                         <TextField
//                                             defaultValue={price}
//                                             name="price" type="number" isRequired>
//                                             <Label>Price (USD)</Label>

//                                             <Input
//                                                 type="number"
//                                                 placeholder="1299"
//                                                 className="rounded-2xl"
//                                             />

//                                             <FieldError />
//                                         </TextField>

//                                         {/* Duration */}
//                                         <TextField
//                                             defaultValue={duration}
//                                             name="duration" isRequired>
//                                             <Label>Duration</Label>

//                                             <Input
//                                                 placeholder="7 Days / 6 Nights"
//                                                 className="rounded-2xl"
//                                             />

//                                             <FieldError />
//                                         </TextField>

//                                         {/* Departure Date */}
//                                         <div className="md:col-span-2">
//                                             <TextField
//                                                 defaultValue={departureDate}
//                                                 name="departureDate"
//                                                 type="date"
//                                                 isRequired
//                                             >
//                                                 <Label>Departure Date</Label>

//                                                 <Input
//                                                     type="date"
//                                                     className="rounded-2xl"
//                                                 />

//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Image URL */}
//                                         <div className="md:col-span-2">
//                                             <TextField
//                                                 defaultValue={imageUrl}
//                                                 name="imageUrl" isRequired>
//                                                 <Label>Image URL</Label>

//                                                 <Input
//                                                     type="url"
//                                                     placeholder="https://example.com/bali-paradise.jpg"
//                                                     className="rounded-2xl"
//                                                 />

//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Description */}
//                                         <div className="md:col-span-2">
//                                             <TextField
//                                                 defaultValue={description}
//                                                 name="description" isRequired>
//                                                 <Label>Description</Label>

//                                                 <TextArea
//                                                     placeholder="Describe the travel experience..."
//                                                     className="rounded-3xl"
//                                                 />

//                                                 <FieldError />
//                                             </TextField>
//                                         </div>
//                                     </div>

//                                     {/* Button */}
//                                     <Modal.Footer>
                                        
//                                         <Button type="submit" slot="close">Save</Button>
//                                     </Modal.Footer>
//                                 </form>

//                             </Surface>
//                         </Modal.Body>

//                     </Modal.Dialog>
//                 </Modal.Container>
//             </Modal.Backdrop>
//         </Modal>
//     );
// }





"use client";
import { BiEdit } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";

import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
    FieldError,
    ListBox,
    Select,
} from "@heroui/react";

export function EditModal({ destination }) {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const { _id, imageUrl, price, destinationName, duration, category, country, description, departureDate } = destination;

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            alert("Please log in first to edit this destination.");
            return;
        }

        const formData = new FormData(e.currentTarget);
        const updatedDestination = Object.fromEntries(formData.entries());

        try {
            const { data: tokenData } = await authClient.token();

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(updatedDestination)
            });

            const data = await res.json();

            if (data.modifiedCount > 0) {
                alert("Destination updated successfully!");
                window.location.reload();
            } else {
                alert("No changes were made or update failed.");
            }
        } catch (error) {
            console.error("Request Error:", error);
            alert("Connection error to server.");
        }
    }

    return (
        <Modal>
            <Button variant="outline" className={"rounded-none"}>
                <BiEdit /> Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Edit Destination</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="p-10 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                        {/* Destination Name */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={destinationName} name="destinationName" isRequired>
                                                <Label>Destination Name</Label>
                                                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Country */}
                                        <TextField defaultValue={country} name="country" isRequired>
                                            <Label>Country</Label>
                                            <Input placeholder="Indonesia" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Category */}
                                        <div>
                                            <Select
                                                defaultValue={category}
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
                                        <TextField defaultValue={price} name="price" type="number" isRequired>
                                            <Label>Price (USD)</Label>
                                            <Input type="number" placeholder="1299" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Duration */}
                                        <TextField defaultValue={duration} name="duration" isRequired>
                                            <Label>Duration</Label>
                                            <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Departure Date (পুনরায় যোগ করা হলো) */}
                                        <div className="md:col-span-2">
                                            <TextField
                                                defaultValue={departureDate ? departureDate.split("T")[0] : ""}
                                                name="departureDate"
                                                type="date"
                                                isRequired
                                            >
                                                <Label>Departure Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2 flex flex-col gap-2">
                                            <label className="text-sm font-medium text-gray-700">Description</label>
                                            <textarea 
                                                defaultValue={description} 
                                                name="description" 
                                                required 
                                                placeholder="Describe the destination..." 
                                                className="w-full min-h-[100px] rounded-2xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                            />
                                        </div>

                                    </div>
                                    
                                    <Button type="submit" className="w-full bg-cyan-500 text-white rounded-none">
                                        Save Changes
                                    </Button>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
