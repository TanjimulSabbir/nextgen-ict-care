import HowToApply from "@/component/how-to-apply/how-to-apply";
import { Metadata } from "next";
import Link from "next/link";
import { FaClock, FaDirections, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUserEdit, FaWhatsapp } from "react-icons/fa";
export const metadata: Metadata = {
    title: "যোগাযোগ ও ঠিকানা | NextGen ICT Care",
    description: "সরাসরি যোগাযোগ করতে বা আমাদের অফলাইন সেন্টারে ভিজিট করতে লোকেশন ম্যাপ ও ফোন নম্বর দেখুন। আজই আপনার সিট বুক করুন!",
};
export default function Location() {
    return (
        <section className="relative mt-10 pt-24 pb-10 bg-[#020617] overflow-hidden font-siliguri">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
                        আমাদের <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">অবস্থান</span> ও যোগাযোগ
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        তেজগাঁওয়ের প্রাণকেন্দ্রে আমাদের NextGen ICT Care লার্নিং সেন্টার। সরাসরি দেখা করতে বা যেকোনো তথ্যের জন্য চলে আসুন আমাদের ঠিকানায়।
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-stretch">

                    {/* Left: Contact Info Cards */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Address Card */}
                        <div className="group p-6 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:border-blue-500/40 transition-all duration-300">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">সরাসরি ঠিকানা (NextGen ICT Care)</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        জ্ঞানের আলো কোচিং সেন্টারের পাশেই ৩য় তলায়<br />
                                        <span className="text-gray-300 font-medium">(আরিবাস কিচেন-এর পাশের গলিতে)</span>
                                        , ফার্মগেট, ঢাকা, বাংলাদেশ<br />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Methods Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:border-cyan-500/40 transition-all">
                                <FaPhoneAlt className="text-cyan-400 text-xl mb-4" />
                                <h3 className="text-white font-bold mb-1">কল করুন</h3>
                                <p className="text-gray-400 text-sm">+880 1560-062656</p>
                                <a href="https://wa.me/8801560062656" className="mt-3 flex items-center gap-2 text-base font-bold text-green-400 uppercase tracking-wider hover:text-green-300" target="_blank">
                                    <FaWhatsapp /> WhatsApp Now
                                </a>
                            </div>

                            <div className="p-4 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:border-indigo-500/40 transition-all">
                                <FaEnvelope className="text-indigo-400 text-xl mb-4" />
                                <h3 className="text-white font-bold mb-1">ইমেইল</h3>
                                <p className="text-gray-400 text-base break-words">nextgen.ict.care@gmail.com</p>
                            </div>
                        </div>

                        {/* Working Hours Card */}
                        <div className="p-6 bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5 rounded-[2rem]">
                            <div className="flex items-center gap-4 mb-4 text-white">
                                <FaClock className="text-blue-400" />
                                <h3 className="font-bold tracking-wide uppercase text-sm">সেন্টার ভিজিটিং আওয়ার</h3>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-gray-400 text-sm">শনিবার – শুক্রবার</span>
                                <span className="text-white font-bold text-sm text-right">01:00 PM – 06:00 PM</span>
                            </div>
                            <p className="mt-3 text-[10px] text-red-400/80 italic text-center uppercase tracking-widest">সরকারি ছুটির দিনে সেন্টার বন্ধ থাকে</p>
                        </div>
                    </div>

                    {/* Right: Map & Action Container */}
                    <div className="lg:col-span-7 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                        <div className="relative h-full min-h-[450px] bg-[#0f172a] border border-white/10 rounded-[2.5rem] overflow-hidden">
                            {/* Map Iframe */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228.23198620343052!2d90.3915691!3d23.7576553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9c9cfe78ae5%3A0x92a69f79f68796ff!2zR2VhbmVyIEFsbyBDb2FjaGluZyBDZW50ZXItIOCmnOCnjeCmnuCmvuCmqOCnh-CmsCDgpobgprLgp4s!5e0!3m2!1sen!2sbd!4v1767372396450!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                className="filter invert contrast-125 opacity-70 group-hover:opacity-100 transition-all duration-700"
                            ></iframe>

                            {/* Floating Map Label */}
                            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row gap-4 items-center justify-between bg-black/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-center sm:text-left">
                                    <h4 className="text-white font-bold">সরাসরি সেন্টারে আসতে চান?</h4>
                                    <p className="text-gray-400 text-xs mt-1 underline decoration-cyan-500/50">Google Map আপনাকে সঠিক পথ দেখাবে</p>
                                </div>
                                <a
                                    href="https://maps.app.goo.gl/Vu4awEfCmZcWfgzm8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-cyan-500 transition-all shadow-xl hover:shadow-cyan-500/20 active:scale-95"
                                >
                                    Get Directions <FaDirections className="text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-28">
                    <HowToApply />
                </div>
                {/* Footer Insight */}
                <div className="mt-20 py-10 border-t border-white/5 text-center">
                    <p className="max-w-2xl mx-auto leading-relaxed italic text-cyan-400">
                        "NextGen ICT Care – আপনার <span className="text-cyan-400 font-semibold">বিশ্বস্ত ICT শেখার ঠিকানা হোক</span>।"
                    </p>
                </div>

                {/* --- 4. FINAL CTA (Premium Design) --- */}
                <div className="text-center relative">

                    {/* Background Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10">
                        <Link
                            href="https://forms.gle/RZjBZrQi1gV7iahY7"
                            target='_blank'
                            className="group relative inline-flex items-center justify-center px-12 py-6 bg-cyan-500 text-black font-black text-2xl rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] active:scale-95"
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
        </section>
    );
}