import Link from "next/link";

export default function TopBanner() {
    return (
        <section className="relative flex items-center justify-center min-h-screen px-6 py-16 overflow-hidden bg-[#020617]">
            {/* Background Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 text-center max-w-4xl w-full">
                {/* Main Heading */}
                <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">
                    HSC ICT <span className="text-cyan-500">OFFLINE</span> BATCH
                </h1>

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">

                    {/* Main Question */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-8 leading-snug">
                        আপনি কি এখনো আইসিটি নিয়ে <span className="text-red-400">চিন্তিত?</span>
                    </h2>

                    <div className="space-y-8">
                        {/* The "Paracetamol" Quote Box */}
                        <div className="relative p-6 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-2xl shadow-inner">
                            <p className="text-xl md:text-2xl font-medium text-cyan-50 text-center leading-relaxed">
                                "আপনাকে ফেস-টু-ফেস প্রোগ্রামিং থেকে সব কঠিন টপিকগুলো <br className="hidden md:block" />
                                <span className="text-cyan-400 font-bold underline decoration-wavy underline-offset-4">প্যারাসিটামলের মতো গুলিয়ে খাওয়ানো হবে!</span>"
                            </p>
                        </div>

                        {/* ICT Content List (Subtle) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-gray-300">
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                <span className="text-cyan-500 text-xl">✔</span> নম্বর সিস্টেমের সহজ সমাধান
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                <span className="text-cyan-500 text-xl">✔</span> পানির মতো সহজ C-Programming
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                <span className="text-cyan-500 text-xl">✔</span> HTML ও ওয়েব ডিজাইন প্র্যাকটিক্যাল
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                <span className="text-cyan-500 text-xl">✔</span> DBMS ও SQL কুয়েরি চ্যালেঞ্জ
                            </div>
                        </div>

                        {/* Perspective Shift Text */}
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light italic">
                            একবার আমাদের অফলাইন ব্যাচে ক্লাস করেই দেখুন, <br />
                            আইসিটি নিয়ে আপনার <span className="text-white font-semibold">সম্পূর্ণ নতুন একটি Perspective (দৃষ্টিভঙ্গি)</span> তৈরি হবে।
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link
                            href="https://forms.gle/wmFgGWysZss8HYAR8"
                            target="_blank"
                            className="w-full sm:w-auto px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-extrabold rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all hover:-translate-y-1 active:scale-95 text-lg"
                        >
                            রেজিস্ট্রেশন করুন
                        </Link>

                        <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-gray-600 text-gray-300 font-bold rounded-2xl hover:bg-white/5 hover:border-white hover:text-white transition-all text-lg">
                            বিস্তারিত জানুন
                        </button>
                    </div>
                </div>

                {/* Floating Tagline */}
                <p className="mt-8 text-gray-500 text-sm font-medium tracking-[0.2em] uppercase">
                    Empowering the next generation of coders
                </p>
            </div>
        </section>
    );
}