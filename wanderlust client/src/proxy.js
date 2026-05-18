import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// Next.js 16-এর নতুন নিয়ম অনুযায়ী ফাংশনের নাম অবশ্যই 'proxy' হতে হবে
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // ১. ইউজার লগইন না থাকলে তাকে সরাসরি '/login' পেজে পাঠিয়ে দিন
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ২. ইউজার লগইন থাকলে তাকে তার কাঙ্ক্ষিত পেজেই যেতে দিন 
  // জোর করে অন্য কোথাও রিডাইরেক্ট করার প্রয়োজন নেই, এতে ৪MD বা লুপ হবে না
  return NextResponse.next();
}

export const config = {
  // যেসব পেজ আপনি লগইন ছাড়া লক রাখতে চান
  matcher: [
    "/my-bookings",
    "/add-destination",
    "/destinations/:path*", // :path* দিলে ডাইনামিক রাউট সাব-পেজসহ লক হবে
    "/profile",
  ],
};



// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }
 
// export const config = {
//   matcher: '/about/:path*',
// }