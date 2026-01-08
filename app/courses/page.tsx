import OurCourses from '@/component/courses'
import HowToApply from '@/component/how-to-apply/how-to-apply'
import { Metadata } from 'next';
import Link from 'next/link'
import { FaUserEdit } from 'react-icons/fa'

export const metadata: Metadata = {
    title: "কোর্সসমূহ | NextGen ICT Care - আপনার প্রয়োজন অনুযায়ী সেরা প্ল্যান",
    description: "HSC ১ম বর্ষ, ২য় বর্ষ এবং ২০২৬ পরীক্ষার্থীদের জন্য আলাদা আলাদা ব্যাচ। ৩ থেকে ৫ মাসের কমপ্লিট সিলেবাস এবং স্পেশাল সলভ ক্লাস নিয়ে আমাদের বিশেষ আয়োজন।",
};
export default function Courses() {
    return (
        <div className='mt-20'>
            <OurCourses />
            <HowToApply />
            {/* --- 4. FINAL CTA (Premium Design) --- */}
            <div className="text-center relative px-5 pb-5">

                {/* Background Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10">
                    <Link
                        href="https://forms.gle/RZjBZrQi1gV7iahY7"
                        target='_blank'
                        className="group relative inline-flex items-center justify-center px-5 md:px-12 py-6 bg-cyan-500 text-black font-black text-xl md:text-2xl rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] active:scale-95"
                    >
                        {/* The Slide-in Background */}
                        <div className="absolute inset-0 bg-cyan-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

                        {/* Button Content */}
                        <div className="relative z-10 flex items-center gap-4 transition-colors duration-500">
                            ভর্তি ফরম পূরণ করুন
                            <div className="p-2 bg-black/5 rounded-xl group-hover:bg-white/20 transition-colors">
                                <FaUserEdit className="group-hover:rotate-12 transition-transform duration-300" />
                            </div>
                        </div>
                    </Link>

                    {/* Brand Promise Message */}
                    <div className="mt-10 space-y-3">
                        <p className="text-gray-400 text-lg font-medium tracking-wide">
                            আপনার সাফল্যই আমাদের একমাত্র অনুপ্রেরণা
                        </p>
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/50"></span>
                            <p className="text-cyan-400 font-siliguri font-bold italic text-xl">
                                — তানজিমুল ও নির্জনা
                            </p>
                            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500/50"></span>
                        </div>
                    </div>
                </div>

                {/* Subtle Animated Elements */}
                <div className="mt-8 flex justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce shadow-[0_0_10px_#06b6d4]" />
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.4s]" />
                </div>
            </div>
        </div>
    )
}
