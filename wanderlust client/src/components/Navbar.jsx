// import Image from "next/image";


// const Navbar = () => {
//     return (
//         <nav className="flex justify-between bg-white p-5">
//             <ul className="flex gap-5">
//                 <li><link  href={'/'} />Home</li>
//                 <li><link  href={'/destinations'} />Destinations</li>
//                 <li><link  href={'/my-bookings'} />My-bookings</li>

//             </ul>

//             <div>
//                 <Image src={'/assets/Wanderlast.png'}
//                 height={150}
//                 width={150}
//                 alt="logo"
//                 ></Image>
//             </div>

//             <ul className="flex gap-5 bg-white p-5">
//                 <li><link  href={'/profile'} />Profile</li>
//                 <li><link  href={'/login'} />Login</li>
//                 <li><link  href={'/signup'} />Sign-Up</li>

//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

"use client";
import {Avatar, Button} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Menu, User, X } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
//import { Button } from "@heroui/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user
    console.log(user)

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-16">

                    {/* Left Menu - Desktop */}
                    <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-700">
                        <li>
                            <Link
                                href="/"
                                className="text-sky-500 hover:text-sky-600 transition-colors"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/destinations"
                                className="hover:text-sky-500 transition-colors"
                            >
                                Destinations
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-bookings"
                                className="hover:text-sky-500 transition-colors"
                            >
                                My Bookings
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/add-destination"
                                className="hover:text-sky-500 transition-colors"
                            >
                                Add Destination
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/admin"
                                className="hover:text-sky-500 transition-colors"
                            >
                                Admin
                            </Link>
                        </li>
                    </ul>

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/assets/Wanderlast.png"
                            height={150}
                            width={150}
                            alt="Wanderlast Logo"
                            className="w-[120px] sm:w-[140px] lg:w-[160px] h-auto object-contain"
                        />
                    </Link>

                    {/* Right Menu - Desktop */}
                    <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-700">

                        <li>
                            <Link
                                href="/profile"
                                className="flex items-center gap-1 hover:text-sky-500 transition-colors"
                            >
                                <User size={16} />
                                Profile
                            </Link>
                        </li>

                        {user ? <>
                            <li>
                                <Avatar>
                                    <Avatar.Image alt="John Doe" src={user?.image} />
                                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </li>

                            <li>
                                 <Button variant="danger" className={"rounded-none"}> Logout </Button>
                            </li>

                        </> : <>
                            <li>
                                <Link
                                    href="/login"
                                    className="hover:text-sky-500 transition-colors"
                                >
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/signup"
                                    className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </li>
                        </>}

                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-5">

                        <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">

                            <li>
                                <Link
                                    href="/"
                                    className="block hover:text-sky-500"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/destinations"
                                    className="block hover:text-sky-500"
                                >
                                    Destinations
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-bookings"
                                    className="block hover:text-sky-500"
                                >
                                    My Bookings
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/admin"
                                    className="block hover:text-sky-500"
                                >
                                    Admin
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/profile"
                                    className="flex items-center gap-2 hover:text-sky-500"
                                >
                                    <User size={16} />
                                    Profile
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/login"
                                    className="block hover:text-sky-500"
                                >
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/signup"
                                    className="inline-block bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </li>

                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;