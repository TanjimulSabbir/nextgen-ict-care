import CourseItems from "../course-Items/CourseItems";

export default function OurCourses() {
    return (
        <section className="py-20 bg-[#020617] border-y border-gray-900 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header with Title Decor */}
                <div className="text-center mb-20 relative">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 relative">
                        আমাদের <span className="text-cyan-400">অফলাইন</span> ব্যাচসমূহ
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        আপনার আইসিটি ভয় দূর করতে বেছে নিন সঠিক কোর্সটি। আমরা গতানুগতিক ল্যাবের চেয়ে সরাসরি
                        <span className="text-white font-semibold"> ল্যাপটপে হাতে-কলমে প্র্যাকটিক্যাল </span>
                        শিখতেই বেশি স্বাচ্ছন্দ্যবোধ করি—যাতে প্রতিটি টপিক ও লজিক
                        <span className="text-cyan-400 font-medium"> আপনার কোর্স টিচারের সরাসরি তত্ত্বাবধানে </span>
                        আপনি নিমিষেই সমাধান করতে পারেন।
                    </p>
                </div>

                {/* Course Grid */}
                <CourseItems />

                {/* Bottom Stats or Social Proof */}
                <div className="mt-20 flex flex-wrap justify-center gap-10 md:gap-20">
                    <div className="text-center">
                        <div className="text-3xl font-black text-white">৩০০+</div>
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