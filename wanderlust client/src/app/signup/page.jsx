// "use client"
// import { Card } from "@heroui/react";
// import { Check } from "@gravity-ui/icons";
// import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
// import { authClient } from "../../lib/auth-client";
// import { User } from "lucide-react";
// //import { redirect } from "next/dist/server/api-utils";

// const SignUpPage = () => {

//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.currentTarget)
//         const user = Object.fromEntries(formData.entries());

//         // console.log("user:" , user)

//         const { data, error } = await authClient.signUp.email({

//            email: user.email,
//            password: user.password,
//            name: user.name,
//            image: user.image
//         })
//         console.log({data, error})
//         if(data){
//             router.push('/')
//         }
//         if(error){
//             //tostify
//             alert("error")
//         }
//     }



//     return (
//         <div className="max-w-7xl mx-auto">

//             <div className="text-center">
//                 <h1 className="text-2xl font-bold">Create Account</h1>
//                 <p>Start your adventure with Wanderlust</p>
//             </div>

//             <Card className="border rounded-none">
//                 <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >

//                     <TextField isRequired name="name" type="text">
//                         <Label>Name</Label>
//                         <Input placeholder="Enter your name" />
//                         <FieldError />
//                     </TextField>

//                     <TextField name="image" type="url">
//                         <Label>Image URL</Label>
//                         <Input placeholder="Image url" />
//                         <FieldError />
//                     </TextField>


//                     <TextField
//                         isRequired
//                         name="email"
//                         type="email"
//                         validate={(value) => {
//                             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                                 return "Please enter a valid email address";
//                             }
//                             return null;
//                         }}
//                     >
//                         <Label>Email</Label>
//                         <Input placeholder="john@example.com" />
//                         <FieldError />
//                     </TextField>


//                     <TextField
//                         isRequired
//                         minLength={6}
//                         name="password"
//                         type="password"
//                         validate={(value) => {
//                             if (value.length < 6) {
//                                 return "Password must be at least 6 characters";
//                             }
//                             // if (!/[A-Z]/.test(value)) {
//                             //     return "Password must contain at least one uppercase letter";
//                             // }
//                             // if (!/[0-9]/.test(value)) {
//                             //     return "Password must contain at least one number";
//                             // }
//                             return null;
//                         }}
//                     >
//                         <Label>Password</Label>
//                         <Input placeholder="Enter your password" />
//                         <Description>Must be at least 6 characters </Description>
//                         <FieldError />
//                     </TextField>
//                     <div className="flex justify-center gap-2">
//                         <Button type="submit" className={"rounded-none w-full bg-cyan-500"}>

//                             Create Account
//                         </Button>

//                     </div>
//                 </Form>
//             </Card>

//         </div>
//     );
// };

// export default SignUpPage;

// "use client"
// import { Card } from "@heroui/react";
// import { Check } from "@gravity-ui/icons";
// import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
// import { authClient } from "../../lib/auth-client";
// import { User } from "lucide-react";
// // 1. useRouter ইম্পোর্ট করা হলো
// import { useRouter } from "next/navigation"; 

// const SignUpPage = () => {
//     // 2. কম্পোনেন্টের ভেতরে router ডিফাইন করা হলো
//     const router = useRouter(); 

//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.currentTarget)
//         const user = Object.fromEntries(formData.entries());

//         const { data, error } = await authClient.signUp.email({
//            email: user.email,
//            password: user.password,
//            name: user.name,
//            image: user.image
//         })
        
//         console.log({data, error})
        
//         if(data){
//             // এবার এটি সঠিকভাবে হোমপেজে রিডাইরেক্ট করবে
//             router.push('/')
//             // ei khane tostify notification use hobe
//         }
//         if(error){
//             alert(error.message || "error")
//             // ei khane tostify notification use hobe
//         }
//     }

//     return (
//         <div className="max-w-7xl mx-auto">
//             <div className="text-center">
//                 <h1 className="text-2xl font-bold">Create Account</h1>
//                 <p>Start your adventure with Wanderlust</p>
//             </div>

//             <Card className="border rounded-none">
//                 <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >
//                     <TextField isRequired name="name" type="text">
//                         <Label>Name</Label>
//                         <Input placeholder="Enter your name" />
//                         <FieldError />
//                     </TextField>

//                     <TextField name="image" type="url">
//                         <Label>Image URL</Label>
//                         <Input placeholder="Image url" />
//                         <FieldError />
//                     </TextField>

//                     <TextField
//                         isRequired
//                         name="email"
//                         type="email"
//                         validate={(value) => {
//                             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                                 return "Please enter a valid email address";
//                             }
//                             return null;
//                         }}
//                     >
//                         <Label>Email</Label>
//                         <Input placeholder="john@example.com" />
//                         <FieldError />
//                     </TextField>

//                     <TextField
//                         isRequired
//                         minLength={6}
//                         name="password"
//                         type="password"
//                         validate={(value) => {
//                             if (value.length < 6) {
//                                 return "Password must be at least 6 characters";
//                             }
//                             return null;
//                         }}
//                     >
//                         <Label>Password</Label>
//                         <Input placeholder="Enter your password" />
//                         <Description>Must be at least 6 characters </Description>
//                         <FieldError />
//                     </TextField>
                    
//                     <div className="flex justify-center gap-2">
//                         <Button type="submit" className={"rounded-none w-full bg-cyan-500"}>
//                             Create Account
//                         </Button>
//                     </div>
//                 </Form>
//             </Card>
//         </div>
//     );
// };

// export default SignUpPage;

"use client"
import { Card } from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "../../lib/auth-client";
import { User } from "lucide-react";
// 1. useRouter ইম্পোর্ট করা হলো
import { useRouter } from "next/navigation"; 
// React-Toastify ইম্পোর্ট করা হলো
import { toast } from "react-toastify";

const SignUpPage = () => {
    // 2. কম্পোনেন্টের ভেতরে router ডিফাইন করা হলো
    const router = useRouter(); 

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries());

        // লোডিং নোটিফিকেশন শুরু
        const toastId = toast.loading("Creating your account...");

        try {
            const { data, error } = await authClient.signUp.email({
               email: user.email,
               password: user.password,
               name: user.name,
               image: user.image
            })
            
            console.log({data, error})
            
            if(data){
                // সফল হলে লোডিং টোস্ট আপডেট হবে
                toast.update(toastId, { 
                    render: "Account created successfully! 🎉", 
                    type: "success", 
                    isLoading: false, 
                    autoClose: 3000 
                });
                
                // এবার এটি সঠিকভাবে হোমপেজে রিডাইরেক্ট করবে
                router.push('/')
            }
            if(error){
                // এরর আসলে লোডিং টোস্ট আপডেট হবে
                toast.update(toastId, { 
                    render: error.message || "Something went wrong!", 
                    type: "error", 
                    isLoading: false, 
                    autoClose: 4000 
                });
            }
        } catch (err) {
            // নেটওয়ার্ক বা অন্য কোনো সমস্যা হলে
            toast.update(toastId, { 
                render: "Network error. Please try again.", 
                type: "error", 
                isLoading: false, 
                autoClose: 4000 
            });
        }
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Create Account</h1>
                <p>Start your adventure with Wanderlust</p>
            </div>

            <Card className="border rounded-none">
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >
                    <TextField isRequired name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField name="image" type="url">
                        <Label>Image URL</Label>
                        <Input placeholder="Image url" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={6}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters </Description>
                        <FieldError />
                    </TextField>
                    
                    <div className="flex justify-center gap-2">
                        <Button type="submit" className={"rounded-none w-full bg-cyan-500"}>
                            Create Account
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default SignUpPage;
