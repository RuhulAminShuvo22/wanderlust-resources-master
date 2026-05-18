'use client'

import { UpdateUserModalPage } from '@/components/UpdateUserModalPage';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card, Chip, Spinner } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// আইকন ব্যবহারের জন্য Lucide-react (যা আপনার নববারে অলরেডি ইনস্টল করা আছে)
import { User, Mail, Calendar, ShieldCheck, ShieldAlert } from 'lucide-react';

const ProfilePage = () => {
    const router = useRouter();

    // সেশন থেকে ইউজার ডাটা কল করা
    const userData = authClient.useSession();
    const user = userData.data?.user;

    // ইউজার লগইন না থাকলে '/signin' পেজে রিডাইরেক্ট করা
    useEffect(() => {
        if (!user && !userData.isPending) {
            router.push('/login');
        }
    }, [user, userData.isPending, router]);

    // লোডিং স্টেট (সুন্দর স্পিনার সহ)
    if (userData.isPending) {
        return (
            <div className='flex justify-center items-center h-[calc(100vh-64px)] bg-gray-50'>
                <Spinner color="sky" size="lg" label="Loading profile..." />
            </div>
        );
    }

    return (
        <div className='min-h-[calc(100vh-64px)] bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
            <Card className='w-full max-w-xl mx-auto shadow-xl rounded-3xl border border-gray-100 bg-white overflow-hidden transition-all hover:shadow-2xl'>
                <div className='p-8 sm:p-10'>

                    {/* প্রোফাইল টপ সেকশন (অবতার ও নাম) */}
                    <div className='flex flex-col items-center text-center'>
                        <div className="relative">
                            <Avatar className="w-28 h-28 text-large border-4 border-sky-400 shadow-md">
                                <Avatar.Image
                                    referrerPolicy="no-referrer"
                                    src={user?.image || "/avatar.png"}
                                    alt={user?.name || "User"}
                                />
                                <Avatar.Fallback className="bg-sky-100 text-sky-600 font-bold text-2xl">
                                    {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                                </Avatar.Fallback>
                            </Avatar>
                        </div>

                        <h2 className='text-3xl font-extrabold mt-5 text-gray-800 tracking-tight'>
                            {user?.name || "No Name"}
                        </h2>

                        <p className='text-gray-400 font-medium text-sm mt-1.5 flex items-center gap-1.5'>
                            Welcome to your travel profile ✈️
                        </p>

                        {/* অ্যাকাউন্ট ভেরিফিকেশন স্ট্যাটাস চিপ (MongoDB emailVerified ডাটার ওপর ভিত্তি করে) */}
                        <div className='mt-4'>
                            {user?.emailVerified ? (
                                <Chip
                                    color="success"
                                    variant="flat"
                                    startContent={<ShieldCheck className="w-4 h-4 mr-1" />}
                                    className="px-3 py-1 font-medium rounded-full"
                                >
                                    Verified Account
                                </Chip>
                            ) : (
                                <Chip
                                    color="warning"
                                    variant="flat"
                                    startContent={<ShieldAlert className="w-4 h-4 mr-1" />}
                                    className="px-3 py-1 font-medium rounded-full"
                                >
                                    Unverified Account
                                </Chip>
                            )}
                        </div>
                    </div>

                    {/* ডিভাইডার বা বর্ডার লাইন */}
                    <div className='border-t border-gray-100 my-8'></div>

                    {/* ইউজার ডিটেইলস সেকশন */}
                    <div className='space-y-4'>

                        {/* নাম বক্স */}
                        <div className='flex items-center gap-4 bg-gray-50/60 p-4 rounded-2xl border border-gray-100/80 hover:bg-gray-50 transition-colors'>
                            <div className='bg-sky-50 p-3 rounded-xl border border-sky-100'>
                                <User className='text-sky-500 w-5 h-5' />
                            </div>
                            <div>
                                <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider'>
                                    Full Name
                                </p>
                                <h3 className='font-bold text-base text-gray-700 mt-0.5'>
                                    {user?.name || "N/A"}
                                </h3>
                            </div>
                        </div>

                        {/* ইমেইল বক্স */}
                        <div className='flex items-center gap-4 bg-gray-50/60 p-4 rounded-2xl border border-gray-100/80 hover:bg-gray-50 transition-colors'>
                            <div className='bg-sky-50 p-3 rounded-xl border border-sky-100'>
                                <Mail className='text-sky-500 w-5 h-5' />
                            </div>
                            <div>
                                <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider'>
                                    Email Address
                                </p>
                                <h3 className='font-bold text-base text-gray-700 mt-0.5 break-all'>
                                    {user?.email || "N/A"}
                                </h3>
                            </div>
                        </div>

                        {/* মেম্বারশিপ বা ডেট বক্স (MongoDB ISO Date কে সেফলি ফরম্যাট করার লজিক) */}
                        <div className='flex items-center gap-4 bg-gray-50/60 p-4 rounded-2xl border border-gray-100/80 hover:bg-gray-50 transition-colors'>
                            <div className='bg-sky-50 p-3 rounded-xl border border-sky-100'>
                                <Calendar className='text-sky-500 w-5 h-5' />
                            </div>
                            <div>
                                <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider'>
                                    Account Created
                                </p>
                                <h3 className='font-bold text-base text-gray-700 mt-0.5'>
                                    {user?.createdAt
                                        ? (() => {
                                            const dateObj = new Date(user.createdAt);
                                            return isNaN(dateObj.getTime())
                                                ? "N/A"
                                                : dateObj.toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                });
                                        })()
                                        : "N/A"
                                    }
                                </h3>
                            </div>
                        </div>

                    </div>

                    {/* আপডেট প্রোফাইল মোডাল বাটন এরিয়া */}
                    <div className='mt-8 flex justify-center'>
                        <UpdateUserModalPage />
                    </div>

                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;
