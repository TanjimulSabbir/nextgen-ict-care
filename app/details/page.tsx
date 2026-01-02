"use client"
import React from 'react';
import { FaRocket, FaBullseye, FaHeart, FaHistory, FaAward, FaUsers } from 'react-icons/fa';

export default function DetailsOfNextGenICTCare() {
    return (
        <section className="bg-[#020617] py-24 px-6 overflow-hidden font-siliguri">
            <div className="max-w-7xl mx-auto">

                {/* --- 1. HERO SECTION: The Big Vision --- */}
                <div className="text-center mb-32 relative">
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
                    <h4 className="text-cyan-500 font-bold tracking-[0.4em] uppercase text-sm mb-6 animate-bounce">Everything About Us</h4>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight">
                        Empowering the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">
                            NextGen Innovators
                        </span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        NextGen ICT Care শুধু একটি কোচিং সেন্টার নয়; এটি ডিজিটাল যুগের চ্যালেঞ্জ মোকাবিলার জন্য একটি আধুনিক লার্নিং হাব।
                    </p>
                </div>

                {/* --- 2. BENTO GRID: Aim, Love, Achieve --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
                    {/* Our Aim */}
                    <div className="md:col-span-8 group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-transparent">
                        <div className="bg-slate-900/90 backdrop-blur-xl p-10 rounded-[calc(2.5rem-4px)] h-full">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <FaBullseye />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">আমাদের লক্ষ্য (Our Aim)</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                আমাদের লক্ষ্য হলো HSC আইসিটি বিষয়টিকে মুখস্থবিদ্যার গণ্ডি থেকে বের করে বাস্তবমুখী করে তোলা। আমরা চাই প্রতিটি শিক্ষার্থী যেন প্রযুক্তির ভাষা বুঝতে পারে এবং বোর্ড পরীক্ষায় সর্বোচ্চ ফলাফল নিশ্চিত করার পাশাপাশি আইটিতে দক্ষ হয়ে ওঠে।
                            </p>
                        </div>
                    </div>

                    {/* What We Love */}
                    <div className="md:col-span-4 group p-10 rounded-[2.5rem] bg-pink-500/5 border border-pink-500/10 flex flex-col justify-center items-center text-center">
                        <div className="w-20 h-20 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-500 text-4xl mb-6 group-hover:animate-pulse">
                            <FaHeart />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">What We Love</h3>
                        <p className="text-gray-500">আমরা ভালোবাসি শিক্ষার্থীদের কৌতূহল মেটাতে এবং তাদের সাফল্যের হাসিতে অংশীদার হতে।</p>
                    </div>
                </div>

                {/* --- 3. OUR STORY: Timeline Journey --- */}
                <div className="relative mb-32">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent hidden md:block" />

                    <div className="space-y-24">
                        {/* Journey Step 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2 text-right hidden md:block">
                                <h3 className="text-5xl font-black text-white/10 italic select-none">2023</h3>
                            </div>
                            <div className="relative z-10 w-12 h-12 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center border-4 border-[#020617] text-white">
                                <FaRocket />
                            </div>
                            <div className="md:w-1/2 bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-cyan-400 mb-3">যাত্রার শুরু (Our Journey)</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    একটি ছোট রুম আর কয়েকজন স্বপ্নবাজ শিক্ষার্থী নিয়ে আমাদের যাত্রা শুরু। লক্ষ্য ছিল একটাই—আইসিটিকে ভয়ের কারণ নয়, বরং জয়ের হাতিয়ার বানানো।
                                </p>
                            </div>
                        </div>

                        {/* Journey Step 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                            <div className="md:w-1/2 text-left hidden md:block">
                                <h3 className="text-5xl font-black text-white/10 italic select-none">2024</h3>
                            </div>
                            <div className="relative z-10 w-12 h-12 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center border-4 border-[#020617] text-white">
                                <FaUsers />
                            </div>
                            <div className="md:w-1/2 bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-blue-400 mb-3">সম্প্রসারণ ও আস্থা</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    শিক্ষার্থীদের অবিশ্বাস্য ভালোবাসা আর ভালো রেজাল্ট আমাদের নিয়ে এসেছে তেজগাঁওয়ের এই আধুনিক সেন্টারে। এখন আমরা আরও বেশি সুসংগঠিত।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 4. CORE VALUES: What We Believe --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { title: "ব্যক্তিগত যত্ন", desc: "আমরা বিশ্বাস করি প্রতিটি স্টুডেন্ট ইউনিক, তাই আমাদের গাইডেন্সও হয় সবার জন্য আলাদা।", icon: <FaUsers />, color: "text-orange-400" },
                        { title: "আধুনিক ল্যাব", desc: "থিওরির পাশাপাশি প্র্যাকটিক্যাল সি-প্রোগ্রামিং ও এইচটিএমএল শেখার জন্য রয়েছে ল্যাব সুবিধা।", icon: <FaRocket />, color: "text-purple-400" },
                        { title: "বোর্ড কমন গ্যারান্টি", desc: "বিগত বছরের প্রশ্ন বিশ্লেষণ করে আমরা এমন সাজেশন দেই যা ১০০% কমন পাওয়ার নিশ্চয়তা দেয়।", icon: <FaAward />, color: "text-emerald-400" },
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-[#0f172a] border border-white/5 rounded-[2rem] hover:border-white/20 transition-all group">
                            <div className={`text-3xl mb-6 ${item.color} group-hover:scale-125 transition-transform`}>
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* --- 5. FINAL CALL: What We Achieve --- */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">আমাদের মূল প্রাপ্তি? আপনার সাফল্য!</h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                            আমরা চাই আপনি যখন বোর্ড পরীক্ষা শেষে বের হবেন, তখন যেন আপনার মুখে একটি আত্মবিশ্বাসের হাসি থাকে। সেই হাসিটুকুই আমাদের অর্জন।
                        </p>
                        <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transition-all active:scale-95">
                            আমাদের সাথে শুরু করুন
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}