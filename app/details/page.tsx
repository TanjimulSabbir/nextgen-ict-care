"use client"
import Link from 'next/link';
import React from 'react';
import { FaRocket, FaHandHoldingHeart, FaLightbulb, FaUserShield, FaCheckCircle, FaUserEdit, FaBullseye, FaHeart } from 'react-icons/fa';
import AboutCourseDetailsSection from './details';

export default function DetailsOfNextGenICTCare() {
    return (
        <section className="bg-[#020617] py-24 px-6 overflow-hidden font-siliguri">
            <div className="max-w-7xl mx-auto">
                {/* --- 1. THE FOUNDERS' STORY (The Heart of NextGen) --- */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mt-12 mb-32">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
                        <h4 className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4">Behind the Vision</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                            দুইজন স্বপ্নবাজ মেন্টর এবং <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">একটি আইসিটি যাত্রা</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
                            <p>
                                আমাদের যাত্রাটা খুব সহজ ছিল না। আমি, <span className="text-white font-bold">তানজিমুল সাব্বির</span> এবং আমার সহ-প্রতিষ্ঠাতা <span className="text-white font-bold">নির্জনা আহমেদ</span>—আমরা দুজনেই দীর্ঘ সময় ধরে বিভিন্ন জায়গায় আইসিটি পড়িয়েছি। সেই অভিজ্ঞতা থেকে আমরা একটি বিষয় গভীরভাবে উপলব্ধি করি: শিক্ষার্থীরা শুধু তথ্যের অভাবে পিছিয়ে নেই, বরং সঠিক গাইডেন্স এবং সহজ ব্যাখ্যার অভাবে আইসিটিকে ভয় পায়।
                            </p>
                            <p className="bg-white/5 border-l-4 border-cyan-500 p-6 rounded-r-2xl italic text-gray-400">
                                "আমরা সিদ্ধান্ত নিলাম, আমরা শুধু পড়াবো না; আমরা এইচএসসি আইসিটির একটি কমপ্লিট সলিউশন তৈরি করবো। ২০২৫ সালে সেই জেদ থেকেই জন্ম নিল NextGen ICT Care।"
                            </p>
                            <p>
                                আজও আমরা প্রতিদিন স্ট্রাগল করছি, শিখছি এবং নিজেদের উন্নত করছি—শুধুমাত্র আপনাদের (শিক্ষার্থীদের) সেরাটা দেওয়ার জন্য। আমাদের লক্ষ্য খুব স্পষ্ট—আইসিটি হবে আপনার সবচাইতে সহজ এবং প্রিয় বিষয়।
                            </p>
                        </div>
                    </div>

                    {/* Visual Representation of Founders/Mission */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[3rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                        <div className="relative bg-white/[0.03] border border-white/10 rounded-[3rem] p-5 md:p-12 text-center overflow-hidden">
                            <div className="grid grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-white">3+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">বছরের অভিজ্ঞতা</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-white">3০০+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">সাফল্যের গল্প</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-white">২৪/৭</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">মেন্টর সাপোর্ট</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-white">১০০%</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">ডেডিকেশন</div>
                                </div>
                            </div>
                            <div className="mt-12 flex justify-center gap-4">
                                <div className="px-3 md:px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold">Tanjimul Sabbir</div>
                                <div className="px-3 md:px-6 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-bold">Nirjona Ahmed</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 2. OUR CORE PHILOSOPHY (What we Love/Aim) --- */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    <div className="p-10 bg-gradient-to-b from-blue-600/10 to-transparent border border-white/5 rounded-[2.5rem] hover:-translate-y-2 transition-all">
                        <FaLightbulb className="text-blue-400 text-4xl mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">আমাদের লক্ষ্য</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">আইসিটি-কে মুখস্থের গণ্ডি থেকে বের করে লজিক্যাল ও প্র্যাকটিক্যাল করে তোলা।</p>
                    </div>
                    <div className="p-10 bg-gradient-to-b from-cyan-600/10 to-transparent border border-white/5 rounded-[2.5rem] hover:-translate-y-2 transition-all">
                        <FaHandHoldingHeart className="text-cyan-400 text-4xl mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">শিক্ষার্থীদের প্রতি ভালোবাসা</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">আমরা চাই আমাদের প্রতিটি স্টুডেন্ট শুধু রেজাল্ট নয়, প্রযুক্তির জ্ঞানেও সেরা হোক।</p>
                    </div>
                    <div className="p-10 bg-gradient-to-b from-indigo-600/10 to-transparent border border-white/5 rounded-[2.5rem] hover:-translate-y-2 transition-all">
                        <FaUserShield className="text-indigo-400 text-4xl mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">আপোষহীন মান</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">স্ট্রাগল চললেও আমরা আমাদের শিক্ষার মান নিয়ে কখনোই আপোষ করি না।</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
                    {/* Our Aim */}
                    <div className="md:col-span-8 group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-transparent">
                        <div className="bg-slate-900/90 backdrop-blur-xl p-5 md:p-10 rounded-[calc(2.5rem-4px)] h-full">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <FaBullseye />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">আমরা</h3>
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
                {/* --- 3. REGISTRATION & COURSE SUMMARY --- */}
                <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />

                    <div className="relative z-10 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">ভর্তি হতে আগ্রহী?</h2>
                        <p className="text-gray-400">সহজ ৩টি ধাপে আপনার সিট নিশ্চিত করুন</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">১</div>
                            <h4 className="text-xl font-bold text-white mb-2 text-siliguri">কোর্স নির্বাচন করুন</h4>
                            <p className="text-gray-500 text-sm">১ম বর্ষ, ২য় বর্ষ বা পরীক্ষার্থী—আপনার প্রয়োজনীয় ব্যাচটি বেছে নিন।</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">২</div>
                            <h4 className="text-xl font-bold text-white mb-2 text-siliguri">আবেদন ফরম পূরণ</h4>
                            <p className="text-gray-500 text-sm">সেন্টারে এসে বা অনলাইনে আপনার প্রাথমিক তথ্য দিয়ে ফর্মটি পূরণ করুন।</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">৩</div>
                            <h4 className="text-xl font-bold text-white mb-2 text-siliguri">সিট নিশ্চিতকরণ</h4>
                            <p className="text-gray-500 text-sm">অ্যাডমিশন ফি জমা দিয়ে আপনার স্বপ্নের ব্যাচে যাত্রা শুরু করুন।</p>
                        </div>
                    </div>

                    {/* Features Recap */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/5">
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <FaCheckCircle className="text-cyan-500" /> নিয়মিত ক্লাস টেস্ট
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <FaCheckCircle className="text-cyan-500" /> ডেডিকেটেড মেন্টরশিপ
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <FaCheckCircle className="text-cyan-500" /> স্পেশাল থিউরি  ও প্র্যাকটিক্যাল ক্লাস
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <FaCheckCircle className="text-cyan-500" /> ফাইনাল সাজেশন
                        </div>
                    </div>
                </div>

                <AboutCourseDetailsSection/>

                {/* --- 4. FINAL CTA --- */}
                <div className="mt-20 text-center">
                    <Link href="https://forms.gle/RZjBZrQi1gV7iahY7" target='_blank' className="group relative px-12 py-5 bg-white text-black font-black text-xl rounded-2xl overflow-hidden transition-all hover:pr-16 active:scale-95">
                        <span className="relative z-10 flex items-center gap-3">
                            এখনই রেজিস্ট্রেশন করুন <FaUserEdit className="group-hover:translate-x-2 transition-transform" />
                        </span>
                        <div className="absolute top-0 -right-full w-full h-full bg-cyan-500 transition-all group-hover:right-0" />
                    </Link>
                    <p className="mt-6 text-gray-500 text-sm italic">"আপনার সাফল্যই আমাদের একমাত্র অনুপ্রেরণা—তানজিমুল ও নির্জনা"</p>
                </div>
            </div>
        </section>
    );
}