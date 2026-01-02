import React from 'react'
import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
    return (
        <div className="bg-[#0f172a] p-10 rounded-[3rem] border border-cyan-500/10 shadow-inner" >
            <h3 className="text-2xl font-bold text-white mb-8">যোগাযোগের ঠিকানা</h3>

            <div className="space-y-8">
                <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-500 border border-white/10 shrink-0">
                        <FaMapMarkerAlt />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm uppercase font-bold tracking-widest mb-1">অফিস লোকেশন</p>
                        <h3 className="text-xl font-bold text-white mb-2">সরাসরি ঠিকানা (NextGen ICT Care)</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            জ্ঞানের আলো কোচিং সেন্টারের পাশেই <br />
                            <span className="text-gray-300 font-medium">(তেজগাঁও সরকারি উচ্চ বিদ্যালয়ের ডান পাশের গলিতে ৩য় তলা)</span> <br />
                            তেজগাঁও, ঢাকা, বাংলাদেশ।
                        </p>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-500 border border-white/10 shrink-0">
                        <FaPhoneAlt />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm uppercase font-bold tracking-widest mb-1">হটলাইন নম্বর</p>
                        <div className="p-6 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:border-cyan-500/40 transition-all">
                            <FaPhoneAlt className="text-cyan-400 text-xl mb-4" />
                            <p className="text-gray-400 text-sm">+880 1560-062656</p>
                            <a href="https://wa.me/8801560062656" className="mt-3 flex items-center gap-2 text-base font-bold text-green-400 uppercase tracking-wider hover:text-green-300" target="_blank">
                                <FaWhatsapp /> WhatsApp Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 p-6 bg-cyan-500/5 rounded-2xl border border-cyan-500/10">
                <p className="text-sm text-cyan-200 leading-relaxed italic">
                    * আমরা প্রতিটি পেমেন্টের জন্য অফিশিয়াল রসিদ প্রদান করি যা আপনার ভর্তির চূড়ান্ত প্রমাণ হিসেবে গণ্য হবে।
                </p>
            </div>

            <button className="w-full mt-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all">
                গুগল ম্যাপে আমাদের দেখুন <FaChevronRight />
            </button>
        </div>
    )
}
