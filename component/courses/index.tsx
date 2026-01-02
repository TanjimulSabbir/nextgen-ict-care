import FirstYearBatch from "@/public/media/first-year-batch.png"
import HscExamBatch from "@/public/media/hsc-exam-batch.png"
import SecondYearBatch from "@/public/media/second-year-batch.png"
import Image from "next/image"
import Link from "next/link"
import { FaClock, FaRocket } from "react-icons/fa"

export default function OurCourses() {
    const courses = [
        {
            title: "ইন্টারমিডিয়েট ১ম বর্ষ ব্যাচ",
            subTitle: "Foundation Mastery to advanced",
            courseFee: "৳১১,০০০",
            discountPrice: "৳১০,০০০",
            duration: "৬ মাস",
            learningCurve: "Beginner Friendly",
            details: "নতুনদের জন্য জিরো থেকে হিরো হওয়ার কমপ্লিট আইসিটি জার্নি। প্রতিটি টপিক হাতে-কলমে শেখানো হবে।",
            topics: ["সংখ্যা পদ্ধতির জাদুকরী ট্রিকস", "লজিক গেট ও সার্কিট ডিজাইন", "প্রোগ্রামিংয়ের হাতেখড়ি", "ওয়েব ডিজাইনের বেসিক", "অন্যান্য সকল আইসিটি কনসেপ্ট"],
            poster: FirstYearBatch,
            courseDetailsLink: "/course/1st-year",
            tag: "Academic Foundation",
            tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",

        },
        {
            title: "ইন্টারমিডিয়েট ২য় বর্ষ ব্যাচ",
            subTitle: "Pro & Practical",
            courseFee: "৳১৪,০০০",
            discountPrice: "৳১২,০০০",
            duration: "৫ মাস",
            learningCurve: "Moderate Pace",
            details: "বোর্ড পরীক্ষার জন্য নিজেকে শতভাগ প্রস্তুত করার সেরা সুযোগ। প্র্যাকটিক্যাল ল্যাব ও রিয়েল লাইফ প্রজেক্ট ভিত্তিক ক্লাস।",
            topics: ["অ্যাডভান্সড C-Programming", "SQL ও ডেটাবেজ ম্যানেজমেন্ট", "বোর্ড প্রশ্ন ব্যবচ্ছেদ", "নেটওয়ার্কিং", "সহ আগের সব টপিকস"],
            poster: SecondYearBatch,
            courseDetailsLink: "/course/2nd-year",
            tag: "Mentor's Choice",
            tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",

        },
        {
            title: "এইচএসসি পরীক্ষার্থী ২০২৬ ব্যাচ",
            subTitle: "Last Moment Prep",
            courseFee: "৳৮,০০০",
            discountPrice: "৳৭,৫০০",
            duration: "৩ মাস",
            learningCurve: "Fast Track",
            details: "অল্প সময়ে সম্পূর্ণ সিলেবাস শেষ করে সরাসরি এ-প্লাস টার্গেটে পড়াশোনা। স্পেশাল টিপস ও শর্টকাট মেথড।",
            topics: ["১০০% কমন সাজেশন", "MCQ সলভিং সুপার ট্রিকস", "ফুল মডেল টেস্ট সিরিজ", "সময় ব্যবস্থাপনা কৌশল"],
            poster: HscExamBatch,
            courseDetailsLink: "/course/examine-2026",
            tag: "A+ Mission 2026",
            tagColor: "bg-red-500/20 text-red-400 border-red-500/30",
        }
    ];

    return (
        <section className="py-24 bg-[#020617] border-y border-gray-900 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header with Title Decor */}
                <div className="text-center mb-20 relative">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 relative">
                        আমাদের <span className="text-cyan-400">অফলাইন</span> ব্যাচসমূহ
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        আপনার প্রয়োজন অনুযায়ী বেছে নিন সঠিক কোর্স। প্রতিটি কোর্সে রয়েছে আধুনিক ল্যাব সাপোর্ট ও এক্সপার্ট মেন্টরশিপ।
                    </p>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-cyan-500/40 hover:-translate-y-3"
                        >
                            {/* Card Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={course.poster}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="relative h-64 overflow-hidden">
                                    {/* Image code... */}

                                    {/* Improved Tags */}
                                    <div className="absolute top-5 inset-x-5 flex justify-between items-start">
                                        <span className="bg-black/60 backdrop-blur-md border border-white/10 text-cyan-400 text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest">
                                            {course.learningCurve}
                                        </span>

                                        {course.tag && (
                                            <span className={`backdrop-blur-xl border ${course.tagColor} text-[10px] font-black px-3 py-1.5 rounded-lg shadow-2xl flex items-center gap-1.5`}>
                                                <span className={`w-1 h-1 rounded-full ${course.tagColor.split(' ')[1].replace('text-', 'bg-')}`} />
                                                {course.tag}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

                                {/* Status Tags */}
                                <span className="absolute top-5 left-5 bg-black/60 backdrop-blur-md border border-white/10 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    {course.learningCurve}
                                </span>
                                {course.tag && (
                                    <span className="absolute top-5 right-5 bg-cyan-500 text-black text-[10px] font-black px-3 py-1 rounded-full shadow-lg animate-bounce">
                                        {course.tag}
                                    </span>
                                )}
                            </div>

                            {/* Card Body */}
                            <div className="p-8">
                                <div className="mb-4">
                                    <h4 className="text-cyan-500 text-sm font-bold uppercase tracking-widest mb-1">{course.subTitle}</h4>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {course.title}
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {course.details}
                                </p>

                                {/* Feature List */}
                                <div className="space-y-3 mb-8">
                                    {course.topics.slice(0, 5).map((topic, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                            {topic}
                                        </div>
                                    ))}
                                </div>

                                {/* Pricing & Info */}
                                <div className="flex items-center justify-between py-5 border-y border-white/5 mb-8">
                                    <div>
                                        <div className="text-xs text-gray-500 line-through">{course.courseFee}</div>
                                        <div className="text-2xl font-black text-white">{course.discountPrice}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-1">
                                            <FaClock /> {course.duration}
                                        </div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-tighter">কোর্স ডিউরেশন</div>
                                    </div>
                                </div>

                                {/* Button */}
                                <Link
                                    href={course.courseDetailsLink}
                                    className="flex items-center justify-center gap-3 w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-cyan-500 hover:text-black transition-all duration-300 group/btn"
                                >
                                    বিস্তারিত দেখুন
                                    <FaRocket className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats or Social Proof */}
                <div className="mt-20 flex flex-wrap justify-center gap-10 md:gap-20">
                    <div className="text-center">
                        <div className="text-3xl font-black text-white">৫০০+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">সফল শিক্ষার্থী</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-black text-white">১০০%</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">বোর্ড কমন নিশ্চয়তা</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-black text-white">২৪/৭</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">মেন্টর সাপোর্ট</div>
                    </div>
                </div>
            </div>
        </section>
    );
}