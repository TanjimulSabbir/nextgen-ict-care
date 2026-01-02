import Link from "next/link";

export default function TopBanner() {
    return (
        <section className="relative flex items-center justify-center min-h-screen px-6 py-20 overflow-hidden ">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

            <div className="relative z-10 text-center max-w-4xl w-full">
                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight">
                    HSC ICT <span className="text-cyan-500 transition-all hover:text-cyan-400">OFFLINE</span> BATCH
                </h1>

                {/* Main Card */}
                <div className="backdrop-blur-md bg-[#020617] border border-cyan-200 rounded-[2rem] p-8 md:p-14 shadow-2xl">

                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-8 leading-snug">
                        আপনি কি <span className="text-cyan-400 font-bold">এইচএসসি (HSC) আইসিটি</span> নিয়ে দুশ্চিন্তায় আছেন?
                    </h2>

                    <div className="space-y-6">
                        {/* Logic & Programming Section */}
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            <span className="text-cyan-300 font-medium italic">বাইনারি, ডেসিমাল বা নম্বর সিস্টেমের</span> প্যাঁচ কাটছে না? <br />
                            <span className="text-cyan-400 font-medium">HTML</span> বা <span className="text-cyan-300 font-medium">C-Programming</span> কি আপনার কাছে <span className="text-red-400 font-bold italic underline decoration-red-500/30 underline-offset-4 tracking-wide">"ভয়ংকর গোলকধাঁধা"</span> মনে হচ্ছে?
                        </p>

                        {/* DBMS Focus Box (Your New Request) */}
                        <div className="py-6 px-4 bg-cyan-950/30 border border-cyan-500/20 rounded-2xl transform transition-transform hover:scale-[1.02]">
                            <p className="text-xl md:text-2xl font-bold text-white mb-2">
                                <span className="text-red-400">Database Management System</span> বুঝে উঠতে পারছেন না?
                            </p>
                            <p className="text-gray-300 italic">
                                SQL কুয়েরি আর রিলেশনশিপ নিয়ে খুব <span className="text-red-300 font-semibold underline decoration-red-500/40">struggle</span> করছেন?
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
                        <p className="text-lg text-gray-300 font-light">
                            চিন্তার কিছু নেই! আমাদের অফলাইন ব্যাচে আপনি পাবেন <span className="text-white font-semibold">সহজবোধ্য ক্লাস ও প্র্যাকটিক্যাল সেশন</span>।
                        </p>
                        <div className="">
                            <p className="text-base font-medium text-cyan-50 text-center leading-relaxed">
                                "আপনাকে ফেস-টু-ফেস প্রোগ্রামিং থেকে সব কঠিন টপিকগুলো <br className="hidden md:block" />
                                <span className="text-cyan-400 font-bold underline decoration-1 underline-offset-4">প্যারাসিটামলের মতো গুলিয়ে খাওয়ানো হবে!</span>"
                            </p>
                        </div>
                        {/* Mentors Section */}
                        <div className="mt-10 pt-8 border-t border-white/10">
                            <p className="text-gray-400 text-sm uppercase tracking-widest mb-6 font-medium">কোর্স ইন্সট্রাক্টর হিসেবে থাকছেন</p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                                {/* Mentor 1 */}
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 w-full md:w-auto">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xl border border-cyan-500/30">
                                        N
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-white font-bold text-lg leading-tight">নির্জনা আহমেদ</h3>
                                        <p className="text-cyan-400 text-sm">MSC, BUP</p>
                                    </div>
                                </div>

                                {/* Mentor 2 */}
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 w-full md:w-auto">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl border border-blue-500/30">
                                        T
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-white font-bold text-lg leading-tight">তানজিমুল সাব্বির</h3>
                                        <p className="text-blue-400 text-sm">Software Engineer</p>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-8 text-lg md:text-xl text-gray-300">
                                আপনাদের সাথে পুরো কোর্স জুড়ে থাকবেন <span className="text-cyan-400 font-semibold">বিইউপি (BUP)</span> থেকে এমএসসি করা <span className="text-white font-bold">নির্জনা আহমেদ ম্যাম</span> এবং <span className="text-cyan-400 font-semibold tex-sm">সফটওয়্যার ইঞ্জিনিয়ার</span> <span className="text-white font-bold">তানজিমুল সাব্বির স্যার</span>।
                            </p>
                        </div>
                        {/* Perspective Shift Text */}
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light italic">
                            একবার আমাদের অফলাইন ব্যাচে ক্লাস করেই দেখুন, <br />
                            আইসিটি নিয়ে আপনার <span className="text-white font-semibold">সম্পূর্ণ নতুন একটি Perspective</span> তৈরি হবে।
                        </p>
                    </div>

                    <p className="mt-10 text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        আজই আপনার আইসিটি যাত্রা শুরু করুন!
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link
                            href="https://forms.gle/wmFgGWysZss8HYAR8"
                            target="_blank"
                            className="group relative px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10">রেজিস্ট্রেশন করুন</span>
                            <div className="absolute inset-0 bg-white transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
                        </Link>

                        <button className="px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-white/5 hover:text-white transition-all">
                            আরো জানুন
                        </button>
                    </div>
                </div>
                {/* Floating Icons/Stats (Optional) */}
                <div className="mt-12 flex justify-center gap-8 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        অফলাইন সাপোর্ট
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        প্র্যাকটিক্যাল ল্যাব
                    </div>
                </div>
            </div>
        </section>
    );
}