
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link'; // <--- Eta add korun

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden relative">
      
      <div className="text-center z-10 px-4">
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[150px] font-black text-white leading-none"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            OOops! Page Not Found
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
            It looks like you’ve taken a wrong turn. Don’t worry, even the best explorers get lost sometimes.
          </p>

          {/* Ekhane <a> tag bad diye Link bebohar kora hoyeche */}
          <Link href="/">
            <span className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:scale-105 transition-all cursor-pointer">
              Return-Home
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
    
  );
};

export default NotFoundPage;