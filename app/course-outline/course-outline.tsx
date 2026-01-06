"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsFileEarmarkBinary } from 'react-icons/bs';
import {
    FaGlobeAmericas, FaNetworkWired,
    FaCode, FaLaptopCode, FaDatabase, FaChevronDown,
    FaChevronRight
} from 'react-icons/fa';

const courseData = [
    {
        id: 1,
        title: "অধ্যায় ১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত",
        icon: <FaGlobeAmericas className="text-blue-400" />,
        color: "border-blue-500/30",
        topics: ["বিশ্বগ্রাম (Global Village) ও ভার্চুয়াল রিয়েলিটি", "কৃত্রিম বুদ্ধিমত্তা (AI) ও রোবটিক্স", "বায়োমেট্রিক্স ও জেনেটিক ইঞ্জিনিয়ারিং", "ন্যানোটেকনোলজি ও ইন্টারডেন্ট অফ থিংস (IoT)"]
    },
    {
        id: 2,
        title: "অধ্যায় ২: যোগাযোগ ব্যবস্থা ও নেটওয়ার্কিং",
        icon: <FaNetworkWired className="text-emerald-400" />,
        color: "border-emerald-500/30",
        topics: ["ডেটা ট্রান্সমিশন মেথড ও মোড", "তারযুক্ত ও তারবিহীন মাধ্যম (Bluetooth, Wi-Fi)", "কম্পিউটার নেটওয়ার্কিং ও টপোলজি", "ক্লাউড কম্পিউটিং"]
    },
    {
        id: 3,
        title: "অধ্যায় ৩: সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস",
        icon: <BsFileEarmarkBinary className="text-purple-400" />,
        color: "border-purple-500/30",
        topics: ["সংখ্যা পদ্ধতির রূপান্তর (Conversion)", "২-এর পরিপূরক (2's Complement)", "লজিক গেট ও বুলিয়ান অ্যালজেব্রা", "এনকোডার, ডিকোডার ও রেজিস্টার"]
    },
    {
        id: 4,
        title: "অধ্যায় ৪: ওয়েব ডিজাইন পরিচিতি ও HTML",
        icon: <FaCode className="text-orange-400" />,
        color: "border-orange-500/30",
        topics: ["ওয়েবসাইট কাঠামো (Structure)", "HTML ট্যাগ, হাইপারলিংক ও ইমেজ", "টেবিল ও ফর্ম ডিজাইন", "ওয়েবসাইট পাবলিশিং"]
    },
    {
        id: 5,
        title: "অধ্যায় ৫: প্রোগ্রামিং ভাষা (C Programming)",
        icon: <FaLaptopCode className="text-cyan-400" />,
        color: "border-cyan-500/30",
        topics: ["অ্যালগরিদম ও ফ্লোচার্ট", "C প্রোগ্রামের গঠন ও ডেটা টাইপ", "কন্ডিশনাল স্টেটমেন্ট (if-else, switch)", "লুপ, অ্যারে ও ফাংশন"]
    },
    {
        id: 6,
        title: "অধ্যায় ৬: ডেটাবেজ ম্যানেজমেন্ট সিস্টেম (DBMS)",
        icon: <FaDatabase className="text-red-400" />,
        color: "border-red-500/30",
        topics: ["ডেটাবেজ রিলেশন (1:1, 1:M, M:M)", "SQL কুয়েরি ও ব্যবহার", "প্রাইমারি ও ফরেন কী (Key)", "DBMS ও আরডিবিএমএস"]
    }
];

export default function CourseOutline() {
    const [activeTab, setActiveTab] = useState<number | null>(null);

    const toggleTab = (id: number   | null) => {
        setActiveTab(activeTab === id ? null : id);
    };

    return (
        <section className="bg-[#020617] pt-20 pb-20 px-6 font-siliguri">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        আমাদের <span className="text-cyan-500">ফুল কোর্স</span> আউটলাইন
                    </h2>
                    <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full mb-6" />
                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            HSC ICT সিলেবাসের বিশাল সমুদ্র থেকে আমরা <span className="text-white font-bold underline decoration-cyan-500/50">সবচাইতে গুরুত্বপূর্ণ এবং বোর্ড স্ট্যান্ডার্ড টপিকগুলো</span> নিখুঁতভাবে ফিল্টার করেছি। আমাদের অফলাইন ক্লাসে প্রতিটি বিষয় কেবল পড়ানো নয়, বরং **Topic-by-Topic** হাতে-কলমে সমাধান করা হবে।
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed bg-white/5 p-6 rounded-2xl border border-dashed border-white/10 italic">
                            "এখানে যা দেখছেন তা কেবল একটি ঝলক মাত্র! বোর্ড পরীক্ষায় ১০০% কনফিডেন্স নিশ্চিত করতে আমাদের বিশেষ <span className="text-cyan-400 font-semibold italic underline">'Secret Shortcut Methods'</span> এবং আরও অসংখ্য ইন-ডেপথ টপিক আমরা সরাসরি ক্লাসরুমেই রিভিল করবো।"
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                                🎯 বোর্ড স্ট্যান্ডার্ড সিলেকশন
                            </span>
                            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                                🔥 সিক্রেট টিপস এন্ড ট্রিকস
                            </span>
                            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                                💻 সরাসরি হ্যান্ডস-অন সেশন
                            </span>
                        </div>
                    </div>
                </div>
                {/* Outline Grid */}
                <div className="space-y-4">
                    {courseData.map((item) => (
                        <div
                            key={item.id}
                            className={`border ${item.color} rounded-3xl overflow-hidden transition-all duration-300 ${activeTab === item.id ? 'bg-white/5 shadow-2xl shadow-cyan-500/10' : 'bg-transparent hover:bg-white/[0.02]'}`}
                        >
                            <button
                                onClick={() => toggleTab(item.id)}
                                className="w-full p-6 flex items-center justify-between text-left"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="text-3xl p-3 bg-white/5 rounded-2xl">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <FaChevronDown className={`text-gray-500 transition-transform duration-300 ${activeTab === item.id ? 'rotate-180 text-cyan-500' : ''}`} />
                            </button>

                            <div className={`transition-all duration-500 ease-in-out ${activeTab === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <div className="px-6 pb-8 pt-2 ml-[76px]">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {item.topics.map((topic, i) => (
                                            <div key={i} className="flex items-center gap-3 text-gray-400 group">
                                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform" />
                                                <span className="group-hover:text-white transition-colors">{topic}</span>
                                            </div>
                                        ))}
                                        <div className="mt-4 text-cyan-500/60 italic text-sm">...এবং আরও অনেক কিছু</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- CTA Footer (Registration & Conversion Focused) --- */}
                <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] border border-white/10 text-center relative overflow-hidden group">

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-[60px]" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]" />

                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">
                        আপনি কি <span className="text-cyan-500">প্রস্তুত</span> সেরা ফলাফলের জন্য?
                    </h3>

                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
                        আমাদের ইন-ডেপথ গাইডলাইন, <span className="text-white font-bold">Shortcut Cheat Sheets</span> এবং সম্পূর্ণ সিলেবাসের সিক্রেট রোডম্যাপটি পেতে দেরি করবেন না। অফলাইন ব্যাচে আমাদের <span className="text-red-400 font-bold underline decoration-red-500/30">সিট সংখ্যা অত্যন্ত সীমিত!</span>
                    </p>

                    <div className="flex flex-col items-center gap-6 relative z-10">
                        {/* Urgent Registration Button */}
                        <Link
                            href="https://forms.gle/RZjBZrQi1gV7iahY7"
                            target="_blank"
                            className="group relative w-full sm:w-auto bg-cyan-500 text-black md:px-12 py-5 rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(6,182,212,0.25)]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                               ভর্তি ফরম পূরণ করুন <FaChevronRight className="text-sm group-hover:translate-x-2 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
                        </Link>

                        {/* Supporting Text */}
                        <p className="text-gray-500 text-sm font-medium animate-pulse">
                            ⚡ আজই আপনার সিট নিশ্চিত করুন এবং অফলাইন ক্লাসে যোগ দিন!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}