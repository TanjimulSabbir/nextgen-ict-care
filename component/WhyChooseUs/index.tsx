import React from 'react'
import { FaCalendar, FaClipboardCheck, FaLightbulb, FaSearch, FaUser } from 'react-icons/fa';
import { GiHelp } from 'react-icons/gi';


export default function WhyChooseUs() {
    const features = [
        {
            title: "অফলাইন ব্যাচ",
            description: "আমরা সরাসরি ফেস-টু-ফেস ক্লাসের মাধ্যমে আপনার ছোট ছোট সমস্যার সমাধান দেব।",
            icon: FaUser
        },
        {
            title: "কার্যকর শিখন পদ্ধতি",
            description: "জটিল টপিকগুলো প্র্যাকটিক্যাল উদাহরণের মাধ্যমে পানির মতো সহজ করে দেওয়া হবে।",
            icon: FaLightbulb
        },
        {
            title: "ভিন্ন ভিন্ন প্ল্যান",
            description: "আপনার শেখার গতির ওপর ভিত্তি করে আমরা ৩, ৪ এবং ৫ মাসের আলাদা আলাদা কমপ্লিট সিলেবাস কোর্স ডিজাইন করেছি।",
            icon: FaCalendar
        },
        {
            title: "বোর্ড প্রশ্নের ব্যবচ্ছেদ",
            description: "আমরা নিয়মিত বোর্ড পরীক্ষার প্রশ্ন অ্যানালাইসিস করি।",
            icon: FaSearch
        },
        {
            title: "সাপ্তাহিক মূল্যায়ন",
            description: "প্রতি ২ সপ্তাহ অন্তর আপনার মেধা যাচাইয়ের জন্য পরীক্ষা নেওয়া হবে।",
            icon: FaClipboardCheck
        },
        {
            title: "স্পেশাল সলভ ক্লাস",
            description: "পরীক্ষার পর আমরা আপনার দুর্বলতাগুলো খুঁজে বের করব এবং সেই দুর্বল টপিকগুলোর ওপর আলাদা সময়ে সলভ ক্লাস নেব।",
            icon: GiHelp
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-cyan-400 mb-4">
                    কেন আমাদের বেছে নেবেন?
                </h1>
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    আমরা আইসিটির প্রতিটি কঠিন ও দুর্বোধ্য টপিককে ভেঙে সহজ করে সাজিয়েছি। আমাদের মূল লক্ষ্য হলো আপনাকে কেবল মুখস্থ নয়, বরং বিষয়টি অনুভব করতে সাহায্য করা।
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
                            >
                                <div className="p-4 bg-blue-500 text-white rounded-full mb-4 text-3xl">
                                    <Icon />
                                </div>
                                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    {feature.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
