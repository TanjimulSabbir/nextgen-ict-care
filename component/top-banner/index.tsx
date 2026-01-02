import Link from "next/link";

export default function TopBanner() {
    return (
        <section className="relative flex items-center justify-center min-h-[90vh] px-6 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />

            <div className="relative z-10 text-center max-w-4xl">
                {/* Badge */}
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full">
                    New Admission Open - 2026
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-400 mb-8 leading-tight">
                    HSC ICT <span className="text-cyan-500">OFFLINE</span> BATCH
                </h1>

                {/* Content Card with Glassmorphism */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl transition-all hover:border-cyan-500/30">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
                        আপনি কি <span className="text-cyan-400 decoration-cyan-400/30 underline-offset-8">এইচএসসি (HSC) আইসিটি</span> নিয়ে দুশ্চিন্তায় আছেন?
                    </h2>

                    <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                        <p>
                            <span className="text-cyan-300 font-medium">বাইনারি, ডেসিমাল বা নম্বর সিস্টেমের প্যাঁচ</span> কাটছে না?
                            <br className="hidden md:block" />
                            <span className="text-cyan-400 font-medium">HTML</span> দিয়ে ওয়েব ডিজাইন বা
                            <span className="text-cyan-300 font-medium"> C-Programming</span> কি পাহাড়সম কঠিন মনে হচ্ছে?
                        </p>
                        <p>Database Management system Bujhe uthte parchen na? onk struggle kortechen?</p>

                        <p className="text-white font-medium italic">
                            "চিন্তার কিছু নেই! আমাদের অফলাইন ব্যাচে আইসিটি হবে পানির মতো সহজ।"
                        </p>

                        <p>
                            এখানে পাবেন <span className="text-cyan-400 font-semibold text-xl">সহজবোধ্য ক্লাস ও প্র্যাকটিক্যাল সেশন</span>, যা আপনাকে পরীক্ষায় এগিয়ে রাখবে।
                        </p>
                    </div>

                    <p className="mt-8 text-xl md:text-2xl font-bold text-white">
                        আজই রেজিস্ট্রেশন করুন এবং আপনার <span className="text-cyan-500">আইসিটি যাত্রা</span> শুরু করুন!
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