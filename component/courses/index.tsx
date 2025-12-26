import Image from "next/image"
import FirstYearBatch from "@/public/media/first-year-batch.png"
import SecondYearBatch from "@/public/media/second-year-batch.png"
import HscExamBatch from "@/public/media/hsc-exam-batch.png"
import Link from "next/link"

export default function OurCourses() {
    const courses = [
        {
            title: "ইন্টারমিডিয়েট ১ম বর্ষ ব্যাচ",
            courseFee: "৳১০,০০০",
            duration: "৬ মাস",
            learningCurve: "ধীরগতির (Beginner Friendly)",
            details:
                "এই কোর্সটি নতুন ইন্টারমিডিয়েট শিক্ষার্থীদের জন্য বিশেষভাবে ডিজাইন করা। এখানে খুব ধীরে ধীরে বেসিক থেকে শুরু করে প্রতিটি টপিক সহজ ভাষায় ও উদাহরণের মাধ্যমে শেখানো হয়, যাতে শিক্ষার্থীরা আইসিটির ভিত্তি শক্ত করতে পারে।",
            topics: [
                "তথ্য ও যোগাযোগ প্রযুক্তির পরিচিতি",
                "ডেটা ও ইনফরমেশন",
                "সংখ্যা পদ্ধতি (Binary, Decimal ইত্যাদি)",
                "হার্ডওয়্যার ও সফটওয়্যার",
                "অপারেটিং সিস্টেমের ধারণা",
                "প্রোগ্রামিংয়ের বেসিক ধারণা",
                "আইসিটির নৈতিকতা ও নিরাপত্তা"
            ],
            poster: FirstYearBatch,
            courseDetailsLink: "/course/1st-year"
        },
        {
            title: "ইন্টারমিডিয়েট ২য় বর্ষ ব্যাচ",
            courseFee: "৳১২,০০০",
            duration: "৫ মাস",
            learningCurve: "মাঝারি গতির (Moderate)",
            details:
                "এই কোর্সটি তাদের জন্য যারা ইতোমধ্যে আইসিটির বেসিক ধারণা রাখে। এখানে মাঝারি গতিতে পড়ানো হয় এবং বোর্ড পরীক্ষাভিত্তিক প্রস্তুতির ওপর বিশেষ গুরুত্ব দেওয়া হয়।",
            topics: [
                "প্রোগ্রামিং (Algorithm, Flowchart, Coding)",
                "HTML ও ওয়েব বেসিক",
                "ডেটাবেজের প্রাথমিক ধারণা",
                "নেটওয়ার্কিং",
                "কম্পিউটার ও তথ্য নিরাপত্তা",
                "বোর্ড প্রশ্ন বিশ্লেষণ",
                "মডেল টেস্ট ও রিভিশন"
            ],
            poster: SecondYearBatch,
            courseDetailsLink: "/course/2nd-year"
        },
        {
            title: "ইন্টারমিডিয়েট পরীক্ষার্থী ২০২৬ ব্যাচ",
            courseFee: "৳৭,০০০",
            duration: "৩ মাস",
            learningCurve: "দ্রুতগতির (Fast Track)",
            details:
                "এই কোর্সটি পরীক্ষার্থীদের জন্য একটি ফাস্ট ট্র্যাক প্রোগ্রাম। এখানে খুব দ্রুত গতিতে সম্পূর্ণ সিলেবাস শেষ করে সরাসরি পরীক্ষাভিত্তিক প্রস্তুতি নেওয়া হয়।",
            topics: [
                "সম্পূর্ণ আইসিটি সিলেবাস রিভিশন",
                "গুরুত্বপূর্ণ বোর্ড প্রশ্ন ও সাজেশন",
                "MCQ ও Creative প্রশ্ন টেকনিক",
                "প্রোগ্রামিং শর্ট ট্রিক",
                "সময় ব্যবস্থাপনা কৌশল",
                "ফুল মডেল টেস্ট",
                "Final Revision & Exam Tips"
            ],
            poster: HscExamBatch,
            courseDetailsLink: "/course/examine-2026"
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-cyan-400 mb-4">
                        আমাদের কোর্সসমূহ
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        আপনার লেভেল অনুযায়ী ধীর, মাঝারি ও দ্রুতগতির আইসিটি কোর্স —
                        সম্পূর্ণ বোর্ড ফোকাসড প্রস্তুতি
                    </p>
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="group bg-[#020617] border border-white/10 rounded-2xl overflow-hidden 
                     shadow-lg hover:shadow-cyan-500/20 transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={course.poster}
                                    alt={course.title}
                                    className=" w-full object-cover 
                         group-hover:scale-110 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 bg-cyan-500/90 
                             text-black text-xs font-semibold px-3 py-1 rounded-full">
                                    {course.learningCurve}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-white">
                                    {course.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {course.details}
                                </p>

                                {/* Meta Info */}
                                <div className="flex justify-between text-sm font-medium">
                                    <span className="text-cyan-400">
                                        💰 {course.courseFee}
                                    </span>
                                    <span className="text-gray-500">
                                        ⏳ {course.duration}
                                    </span>
                                </div>

                                {/* Topics */}
                                <ul className="text-sm text-gray-400 space-y-1">
                                    {course.topics.map((topic, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-cyan-400">✔</span>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href={course.courseDetailsLink}
                                    className="inline-block w-full text-center mt-6 
                         bg-cyan-500 text-black py-3 rounded-xl 
                         font-semibold hover:bg-cyan-400 
                         transition duration-300"
                                >
                                    বিস্তারিত দেখুন
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}