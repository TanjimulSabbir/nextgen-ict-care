"use client"
import { faqData } from '@/data';
import React, { useState, useRef, useEffect } from 'react';
import frentlyAskQuestIllustration from '@/public/media/frequently-ask-question/faq.8116aa7d.svg';
import Image from 'next/image';
import { FaChevronDown, FaRegLightbulb, FaHeadset } from 'react-icons/fa';

export default function FrequentlyAskQuest() {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        faqData.forEach((_, i) => {
            if (contentRefs.current[i]) {
                contentRefs.current[i].style.maxHeight =
                    openIndex === i ? `${contentRefs.current[i].scrollHeight}px` : "0px";
            }
        });
    }, [openIndex]);

    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden font-siliguri">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">

                    {/* Left Side: Information & Branding */}
                    <div className="lg:w-[40%] text-center lg:text-left">
                        <div className="relative inline-block mb-10">
                            {/* Animated Illustration Container */}
                            <div className="relative w-64 h-64 mx-auto lg:mx-0 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
                                <div className="relative bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-xl flex items-center justify-center h-full shadow-2xl">
                                    <Image
                                        src={frentlyAskQuestIllustration}
                                        alt="FAQ Illustration"
                                        width={200}
                                        height={200}
                                        className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <h4 className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 flex items-center justify-center lg:justify-start gap-2">
                            <FaRegLightbulb /> Help Center
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            সচরাচর জানতে চাওয়া <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">প্রশ্নের উত্তরসমূহ</span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            আপনার মনে আসা ছোট-বড় সব প্রশ্নের সমাধান এখানে পেয়ে যাবেন। আমরা চাই আপনার প্রতিটি জিজ্ঞাসা যেন নিমিষেই সমাধান হয়।
                        </p>

                        {/* Extra Support Data */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                <h5 className="text-white font-bold mb-1 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                                    Live Support
                                </h5>
                                <p className="text-xs text-gray-500 uppercase tracking-tighter">১০ মিনিট রেসপন্স টাইম</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                <h5 className="text-white font-bold mb-1 flex items-center gap-2">
                                    <FaHeadset className="text-blue-400" />
                                    ২৪/৭ গাইডেন্স
                                </h5>
                                <p className="text-xs text-gray-500 uppercase tracking-tighter">ডেডিকেটেড মেন্টর প্যানেল</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Modern Accordion */}
                    <div className="lg:w-[60%] w-full space-y-4">
                        {faqData.map((faq, index) => {
                            const isActive = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`group border transition-all duration-300 rounded-3xl ${isActive
                                            ? "border-cyan-500/50 bg-white/[0.05] shadow-[0_10px_30px_-10px_rgba(6,182,212,0.1)]"
                                            : "border-white/10 bg-white/[0.02] hover:border-white/20"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full text-left p-6 flex justify-between items-center gap-4 outline-none"
                                    >
                                        <span className={`text-lg font-bold transition-colors duration-300 ${isActive ? "text-cyan-400" : "text-gray-200"}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${isActive ? "bg-cyan-500 border-none rotate-180" : "bg-white/5"}`}>
                                            <FaChevronDown className={`text-sm ${isActive ? "text-black" : "text-gray-500"}`} />
                                        </div>
                                    </button>

                                    <div
                                        ref={(el) => (contentRefs.current[index] = el)}
                                        className="overflow-hidden transition-all duration-500 ease-in-out"
                                        style={{ maxHeight: "0px" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                                            <div className="bg-white/5 p-4 rounded-2xl border-l-4 border-cyan-500">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}