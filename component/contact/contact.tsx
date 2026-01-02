import React from 'react'
import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
    return (
        <div className="bg-[#0f172a] p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-cyan-500/10 shadow-2xl h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-cyan-500 rounded-full inline-block"></span>
                    যোগাযোগের ঠিকানা
                </h3>

                <div className="space-y-8">
                    {/* Location Section */}
                    <div className="flex gap-4 md:gap-5">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-cyan-500 border border-white/10 shrink-0">
                            <FaMapMarkerAlt className="text-lg md:text-xl" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-[10px] md:text-xs uppercase font-bold tracking-widest mb-1">অফিস লোকেশন</p>
                            <h4 className="text-lg font-bold text-white mb-1 leading-tight">NextGen ICT Care</h4>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                জ্ঞানের আলো কোচিং সেন্টারের পাশেই <br />
                                <span className="text-cyan-500/80 text-xs font-medium">(তেজগাঁও সরকারি উচ্চ বিদ্যালয়ের ডান পাশের গলিতে ৩য় তলা)</span> <br />
                                তেজগাঁও, ঢাকা।
                            </p>
                        </div>
                    </div>

                    {/* Hotline Section */}
                    <div className="flex gap-4 md:gap-5">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-cyan-500 border border-white/10 shrink-0">
                            <FaPhoneAlt className="text-lg md:text-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-500 text-[10px] md:text-xs uppercase font-bold tracking-widest mb-1">হটলাইন নম্বর</p>
                            <div className="mt-3 p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-cyan-500/40 transition-all group">
                                <p className="text-white font-mono text-lg md:tracking-wider">+880 1560-062656</p>
                                <a
                                    href="https://wa.me/8801560062656"
                                    className="mt-2 flex items-center gap-2 text-sm font-bold text-green-400 hover:text-green-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp className="text-lg" /> WhatsApp করুন
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 space-y-6">
                <div className="p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
                    <p className="text-[11px] md:text-xs text-cyan-200/70 leading-relaxed italic">
                        * প্রতিটি পেমেন্টের জন্য আমরা অফিশিয়াল রসিদ প্রদান করি যা আপনার ভর্তির চূড়ান্ত প্রমাণ।
                    </p>
                </div>

                <a
                    href="https://maps.app.goo.gl/Vu4awEfCmZcWfgzm8"
                    target="_blank"
                    className="w-full py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-95 transition-all text-sm md:text-base"
                >
                    গুগল ম্যাপে আমাদের দেখুন <FaChevronRight className="text-xs" />
                </a>
            </div>
        </div>
    )
}