import React from 'react';
import { FaCalendarAlt, FaRocket, FaMicrochip, FaSearchPlus, FaCheckDouble, FaHeadset } from 'react-icons/fa';

export default function WhyChooseUs() {
    const features = [
        {
            title: "১০০% অফলাইন ইন্টারঅ্যাকশন",
            description: "অনলাইনের ভিড়ে হারিয়ে যাওয়া নয়, সরাসরি ফেস-টু-ফেস ক্লাসে আপনার প্রতিটি ডাউট ক্লিয়ার করা হবে আমাদের টপ প্রায়োরিটি।",
            icon: FaMicrochip,
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "স্মার্ট লার্নিং মেথড",
            description: "জটিল প্রোগ্রামিং বা লজিক গেট মুখস্থ নয়; বাস্তব জীবনের উদাহরণের মাধ্যমে আপনার ব্রেইনে 'Install' করে দেওয়া হবে।",
            icon: FaRocket,
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "কাস্টমাইজড স্টাডি প্ল্যান",
            description: "সবার শেখার গতি এক নয়। তাই আমরা ৩, ৪ এবং ৫ মাসের ভিন্ন ভিন্ন কমপ্লিট সিলেবাস প্ল্যান অফার করি আপনার প্রয়োজন অনুযায়ী।",
            icon: FaCalendarAlt,
            color: "from-orange-500 to-red-500"
        },
        {
            title: "বোর্ড প্রশ্নের ব্যবচ্ছেদ",
            description: "বিগত ১০ বছরের বোর্ড প্রশ্ন অ্যানালাইসিস করে আমরা এমনভাবে পড়াই যেন প্রশ্ন যেভাবেই আসুক, উত্তর আপনার নখদর্পণে থাকে।",
            icon: FaSearchPlus,
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "ব্যাটেল গ্রাউন্ড (সাপ্তাহিক মূল্যায়ন)",
            description: "প্রতি ২ সপ্তাহ পর পর রিয়েল টাইম পরীক্ষার মাধ্যমে আপনার অগ্রগতি যাচাই করা হবে, যা আপনাকে পরীক্ষার হলের জন্য প্রস্তুত করবে।",
            icon: FaCheckDouble,
            color: "from-blue-500 to-indigo-500"
        },
        {
            title: "ডেডিকেটেড সলভ সেশন",
            description: "দুর্বলতা লুকিয়ে রাখার দিন শেষ! পরীক্ষার পর স্পেশাল ওয়ান-টু-ওয়ান সলভ ক্লাসের মাধ্যমে আপনার ঘাটতিগুলো পূরণ করা হয়।",
            icon: FaHeadset,
            color: "from-yellow-500 to-orange-500"
        }
    ];

    return (
        <section className="py-24 bg-[#020617] border-t border-gray-900 relative overflow-hidden ">
            {/* Soft Background Glows */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.3em] mb-4">Features</h2>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                        কেন আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">আইসিটি ব্যাচ</span> সেরা?
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        আমরা গতানুগতিক মুখস্থ বিদ্যায় বিশ্বাসী নই। আমাদের লক্ষ্য হলো আইসিটিকে আপনার প্রিয় বিষয়ে রূপান্তর করা এবং প্রতিটি টপিককে পানির মতো সহজ করে তোলা।
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] transition-all duration-500 hover:bg-white/[0.07] hover:-translate-y-2 hover:border-cyan-500/30"
                            >
                                {/* Floating Icon with Gradient Background */}
                                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-3xl shadow-lg transition-transform duration-500 group-hover:rotate-[10deg]`}>
                                    <Icon />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                    {feature.description}
                                </p>

                                {/* Decorative Corner Accent */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom Trust Note */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-400 italic">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        আইসিটি নিয়ে দুশ্চিন্তা ছাড়ুন, আমরা আছি আপনার সাথে।
                    </div>
                </div>
            </div>
        </section>
    );
}