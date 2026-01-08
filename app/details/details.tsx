"use client"
import Link from 'next/link';
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa';

const courses = [
    {
        title: "ইন্টারমিডিয়েট ১ম বর্ষ ব্যাচ",
        subTitle: "Foundation Mastery to Advanced",
        courseFee: "৳১১,০০০",
        discountPrice: "৳১০,০০০",
        duration: "৬ মাস",
        learningCurve: "Beginner Friendly",
        details: "নতুনদের জন্য জিরো থেকে হিরো হওয়ার কমপ্লিট আইসিটি জার্নি। প্রতিটি টপিক হাতে-কলমে শেখানো হবে।",
        topics: ["সংখ্যা পদ্ধতির জাদুকরী ট্রিকস", "লজিক গেট ও সার্কিট ডিজাইন", "প্রোগ্রামিংয়ের হাতেখড়ি", "ওয়েব ডিজাইনের বেসিক", "সকল অধ্যায় একদম বেসিক থেকে"],
        tag: "Academic Foundation",
        tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
        title: "ইন্টারমিডিয়েট ২য় বর্ষ ব্যাচ",
        subTitle: "Pro & Practical",
        courseFee: "৳১৪,০০০",
        discountPrice: "৳১২,০০০",
        duration: "৫ মাস",
        learningCurve: "Moderate Pace",
        details: "বোর্ড পরীক্ষার জন্য নিজেকে শতভাগ প্রস্তুত করার সেরা সুযোগ। প্র্যাকটিক্যাল ল্যাব ও রিয়েল লাইফ প্রজেক্ট ভিত্তিক ক্লাস।",
        topics: ["অ্যাডভান্সড C-Programming", "SQL ও ডেটাবেজ ম্যানেজমেন্ট", "বোর্ড প্রশ্ন ব্যবচ্ছেদ", "যোগাযোগ ও নেটওয়ার্কিং", "বিগত বছরের প্রশ্ন সমাধান"],
        tag: "Mentor's Choice",
        tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
        title: "এইচএসসি পরীক্ষার্থী ২০২৬ ব্যাচ",
        subTitle: "Last Moment Prep",
        courseFee: "৳৮,০০০",
        discountPrice: "৳৭,০০০",
        duration: "৩ মাস",
        learningCurve: "Fast Track",
        details: "অল্প সময়ে সম্পূর্ণ সিলেবাস শেষ করে সরাসরি এ-প্লাস টার্গেটে পড়াশোনা। স্পেশাল টিপস ও শর্টকাট মেথড।",
        topics: ["সম্পূর্ণ সিলেবাস রিভিশন", "এক্সামে কমন উপযোগী সাজেশন", "MCQ সলভিং সুপার ট্রিকস", "ফুল মডেল টেস্ট সিরিজ", "সময় ব্যবস্থাপনা কৌশল"],
        tag: "A+ Mission 2026",
        tagColor: "bg-red-500/10 text-red-400 border-red-500/20",
    }
];

export default function AboutCourseDetailsSection() {
    return (
        <section className="bg-[#020617] pt-24 pb-10 md:px-6 overflow-hidden font-siliguri">
            <div className="max-w-7xl mx-auto">

                {/* --- Section Header --- */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        আপনার লক্ষ্য অনুযায়ী <span className="text-cyan-500">ব্যাচ</span> বেছে নিন
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        প্রতিটি কোর্স ডিজাইন করা হয়েছে এমনভাবে যাতে আপনি থিওরির পাশাপাশি ল্যাপটপে সরাসরি প্র্যাকটিক্যাল সেশন উপভোগ করতে পারেন।
                    </p>
                </div>

                {/* --- Course Cards --- */}
                <div className="grid lg:grid-cols-3 gap-8 mb-32">
                    {courses.map((course, index) => (
                        <div key={index} className="relative group p-px rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/40 transition-all duration-500 shadow-2xl">
                            <div className="bg-[#0f172a] rounded-[2.5rem] p-8 h-full flex flex-col relative overflow-hidden">
                                <span className={`inline-block text-center px-4 py-1 rounded-full text-xs font-bold border mb-6 ${course.tagColor}`}>
                                    {course.tag}
                                </span>

                                <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                                <p className="text-cyan-500 text-sm font-medium mb-6">{course.subTitle}</p>

                                <div className="flex items-end gap-3 mb-8">
                                    <span className="text-4xl font-black text-white">{course.discountPrice}</span>
                                    <span className="text-gray-500 line-through text-lg mb-1">{course.courseFee}</span>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {course.topics.map((topic, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                            <FaCheckCircle className="text-cyan-500 mt-1 shrink-0" />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-y-4 pt-6 border-t border-white/5">
                                    <div className="flex justify-between text-xs text-gray-500 uppercase tracking-widest">
                                        <span>সময়কাল: {course.duration}</span>
                                        <span>{course.learningCurve}</span>
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6">
                                        <Link
                                            href="https://forms.gle/wmFgGWysZss8HYAR8"
                                            target="_blank"
                                            className="group relative px-5 md:px-10 py-5 bg-cyan-500 text-black font-black text-xl rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                ভর্তি ফরম পূরণ করুন <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            <div className="absolute inset-0 bg-white transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

             
            </div>
        </section>
    );
}