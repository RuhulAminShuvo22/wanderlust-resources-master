
"use client"
import { Card } from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "../../lib/auth-client";
import { User } from "lucide-react";

import { useRouter } from "next/navigation"; 
import { toast } from "react-toastify";

const LoginPage = () => {
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
                <h1 className="text-2xl font-bold">Login</h1>
                <p>Start your adventure with Wanderlust</p>
            </div>

            <Card className="border rounded-none">
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >

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
                            Login
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;
