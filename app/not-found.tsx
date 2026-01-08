import Link from 'next/link';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

            <div className="text-center max-w-lg">
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <span className="text-[120px] font-black text-white/5 leading-none">404</span>
                        <FaExclamationTriangle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-cyan-500 animate-bounce" />
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
                    দুঃখিত! পেজটি পাওয়া যায়নি।
                </h1>
                <p className="text-gray-400 mb-10 leading-relaxed">
                    আপনি যে লিঙ্কটি খুঁজছেন তা হয়তো পরিবর্তন করা হয়েছে অথবা ডিলিট করে দেওয়া হয়েছে। চিন্তার কিছু নেই, আপনি আমাদের হোমপেজে ফিরে যেতে পারেন।
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-cyan-500/20"
                >
                    <FaHome /> হোমপেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
}