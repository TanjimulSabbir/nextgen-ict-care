import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Location() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16 text-gray-100">
            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                আমাদের অবস্থান & যোগাযোগ
            </h1>

            {/* Description */}
            <p className="text-center text-gray-300 text-lg mb-12 leading-relaxed">
                NextGen ICT Care সেন্টার তেজগাঁও, ঢাকায় অবস্থিত, যা সহজেই খুঁজে পাবেন এবং শিক্ষার্থীদের জন্য সুবিধাজনক জায়গায় অবস্থিত।
            </p>


            {/* Location & Map + Contact */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Left: Address & Contact Info */}
                <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-blue-400 mt-1 h-6 w-6" />
                        <div>
                            <h3 className="font-semibold text-gray-200 mb-1">ঠিকানা</h3>
                            <p className="text-gray-300 leading-relaxed">
                                জ্ঞানের আলো কোচিং সেন্টারের পাশেই <br />
                                (তেজগাঁও সরকারি উচ্চ বিদ্যালয়ের ডান পাশের গলিতে ৩য় তলা) <br />
                                Tejgaon, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-blue-400 mt-1 h-6 w-6" />
                        <div>
                            <h3 className="font-semibold text-gray-200 mb-1">ফোন</h3>
                            <p className="text-gray-300">+880 1560-062656 (WhatsApp)</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                        <FaEnvelope className="text-blue-400 mt-1 h-6 w-6" />
                        <div>
                            <h3 className="font-semibold text-gray-200 mb-1">ইমেইল</h3>
                            <p className="text-gray-300">nextgen.ict.care@gmail.com</p>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-4">
                        <FaClock className="text-blue-400 mt-1 h-6 w-6" />
                        <div>
                            <h3 className="font-semibold text-gray-200 mb-1">ক্লাস সময়</h3>
                            <p className="text-gray-300">
                                শনিবার – শুক্রবার (Everyday): 1:00 PM – 6:00 PM <br /> (Closed on Public Holidays)
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href="https://maps.app.goo.gl/cefuo5KXTfCwej9Q7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-400 transition text-white font-medium rounded-lg shadow-lg"
                    >
                        Google Map-এ দেখুন
                    </a>
                </div>

                {/* Right: Map Embed */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-800">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.162439805825!2d90.37790051201787!3d23.763755991179917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a163530df1%3A0x6ef9dbbb0c381500!2sTejgaon%20Government%20High%20School!5e0!3m2!1sen!2sbd!4v1767353367802!5m2!1sen!2sbd" width="600" height="450" loading="lazy" ></iframe>
                </div>
            </div>

            {/* Footer Note */}
            <p className="mt-12 text-center text-gray-400">
                আমাদের সাথে যোগাযোগ করতে বা ক্লাস সম্পর্কে জানতে বিনা দ্বিধায় কল বা মেইল করুন।
                জ্ঞানের আলো কোচিং সেন্টার – আপনার <span className="text-blue-400 font-semibold">বিশ্বস্ত শিক্ষার ঠিকানা</span>।
            </p>
        </div>
    );
}
