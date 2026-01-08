export default function Loading() {
    return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center gap-6">
            {/* Animated Spinner Outer Ring */}
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"></div>
                {/* Inner Pulsing Circle */}
                <div className="absolute inset-4 bg-blue-600/20 rounded-full animate-pulse flex items-center justify-center text-[10px] text-cyan-400 font-bold uppercase tracking-widest">
                    ICT
                </div>
            </div>

            <div className="text-center space-y-2">
                <h2 className="text-white text-xl font-bold tracking-wide animate-pulse">
                    লোডিং হচ্ছে...
                </h2>
                <p className="text-gray-500 text-sm">NextGen ICT Care-এর দুনিয়ায় আপনাকে স্বাগতম</p>
            </div>
        </div>
    );
}