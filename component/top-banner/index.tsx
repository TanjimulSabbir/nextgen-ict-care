import { Nirjona, TanjimulSabbir } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaDatabase, FaGlobe, FaChevronRight } from "react-icons/fa";

export default function TopBanner() {
    return (
        <section className="relative flex items-center justify-center min-h-screen px-6 py-28 overflow-hidden bg-[#020617] font-siliguri">

            {/* --- Advanced Background Aesthetics --- */}
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Dynamic Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

            <div className="relative z-10 text-center max-w-5xl w-full">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    Admission Open - 2026 Batch
                </div>

                {/* Main Title */}
                <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                    HSC ICT <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-400 drop-shadow-sm">
                        OFFLINE BATCH
                    </span>
                </h1>

                {/* Main Glass Card */}
                <div className="group relative backdrop-blur-xl bg-white/2 border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-500/30">

                    <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-10 leading-snug">
                        আপনি কি <span className="text-cyan-400 underline decoration-cyan-500/30 underline-offset-8">এইচএসসি (HSC) আইসিটি</span> নিয়ে দুশ্চিন্তায় আছেন?
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Pain Points List */}
                        <div className="space-y-4 text-left">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-3 bg-red-500/10 rounded-xl text-red-400"><FaCode /></div>
                                <p className="text-gray-300 text-sm md:text-base">HTML বা C-Programming কি <span className="text-red-400 font-bold italic">ভয়ংকর গোলকধাঁধা?</span></p>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><FaDatabase /></div>
                                <p className="text-gray-300 text-sm md:text-base">DBMS ও SQL কুয়েরি নিয়ে খুব <span className="text-blue-300 font-bold underline decoration-blue-500/30">struggle</span> করছেন?</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400"><FaGlobe /></div>
                                <p className="text-gray-300 text-sm md:text-base">নম্বর সিস্টেমের প্যাঁচ কোনোভাবেই কাটছে না?</p>
                            </div>
                        </div>

                        {/* Solution & Mentors */}
                        <div className="bg-cyan-950/20 border border-cyan-500/10 p-8 rounded-[2rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl" />
                            <p className="text-lg text-cyan-100 leading-relaxed mb-6 italic">
                                "সব কঠিন টপিকগুলো আপনাকে <br />
                                <span className="text-cyan-400 font-black text-2xl not-italic">প্যারাসিটামলের মতো</span> <br />
                                গুলিয়ে খাওয়ানো হবে ইনশাআল্লাহ!"
                            </p>

                            <div className="flex -space-x-3 justify-center mb-4">
                                <div className="w-12 h-12 rounded-full border-[#020617] bg-cyan-600 flex items-center justify-center text-white font-bold text-xs">
                                    <Image src={TanjimulSabbir} width={32} height={32} alt="Tanjimul Sabbir" className="w-full rounded-full object-cover" />
                                </div>
                                <div className="w-12 h-12 rounded-full  border-[#020617] bg-sky-600 flex items-center justify-center text-white font-bold text-xs">
                                    <Image src={Nirjona} width={32} height={32} alt="Nirjona" className="w-full rounded-full object-cover" />
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">Guided by BUPian & RUian Software Engineer</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link
                            href="https://forms.gle/wmFgGWysZss8HYAR8"
                            target="_blank"
                            className="group relative px-10 py-5 bg-cyan-500 text-black font-black text-xl rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                রেজিস্ট্রেশন করুন <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
                        </Link>

                        <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-xl rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm">
                            আরো জানুন
                        </button>
                    </div>
                </div>

                {/* Perspective Tagline */}
                <p className="mt-12 text-gray-500 text-lg font-light italic">
                    একবার আমাদের অফলাইন ব্যাচে ক্লাস করেই দেখুন, আইসিটি নিয়ে আপনার <br className="hidden md:block" />
                    <span className="text-gray-300 font-medium tracking-wide">সম্পূর্ণ নতুন একটি Perspective তৈরি হবে।</span>
                </p>

            </div>
        </section>
    );
}