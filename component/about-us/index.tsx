import Image from "next/image";
import React from "react";
import { instructors } from "@/data";
import { FaGraduationCap, FaLightbulb, FaHeart, FaLinkedin } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <section className="relative mt-10 py-24 px-6 bg-[#020617] overflow-hidden font-siliguri">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* About Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h4 className="text-cyan-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Mission</h4>
          <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight text-white">
            Building Strong <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ICT Foundations</span> for HSC Students
          </h1>

          <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-[#0f172a]/80 backdrop-blur-xl rounded-[calc(1.5rem-1px)] p-8 md:p-12 shadow-2xl">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify mb-8">
                <span className="text-cyan-400 font-bold">NextGen ICT Care</span> একটি শিক্ষার্থী-কেন্দ্রিক লার্নিং প্ল্যাটফর্ম, যেখানে HSC ICT বিষয়টিকে সহজ, বাস্তবসম্মত ও আনন্দদায়কভাবে শেখানো হয়। আমরা বিশ্বাস করি—ভালো ফলাফলের জন্য শুধু পড়ানো যথেষ্ট নয়, বরং যত্নসহকারে ও সঠিক পদ্ধতিতে পড়ানোই আসল।
              </p>

              {/* Quick Vision Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-white/10 pt-10">
                <div className="flex gap-4">
                  <div className="text-cyan-500 text-2xl"><FaLightbulb /></div>
                  <div>
                    <h5 className="text-white font-bold mb-1">কার্যকর সিলেবাস</h5>
                    <p className="text-gray-500 text-sm">টপিকভিত্তিক সুসংগঠিত আউটলাইন</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-blue-500 text-2xl"><FaGraduationCap /></div>
                  <div>
                    <h5 className="text-white font-bold mb-1">ব্যক্তিগত গাইডেন্স</h5>
                    <p className="text-gray-500 text-sm">দুর্বলতা অনুযায়ী স্পেশাল সাপোর্ট</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-pink-500 text-2xl"><FaHeart /></div>
                  <div>
                    <h5 className="text-white font-bold mb-1">প্যাশন থেকে পড়ানো</h5>
                    <p className="text-gray-500 text-sm">পড়ানোই আমাদের ভালোবাসা</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructor Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Meet Your Mentors</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Instructor Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:px-10">
          {instructors.map((teacher) => (
            <div
              key={teacher.id}
              className="group relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-cyan-500/40 hover:-translate-y-2 shadow-2xl"
            >
              {/* Profile Background Blur Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      width={120}
                      height={120}
                      className="relative rounded-full object-cover border-4 border-[#1e293b] shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-black text-white mb-1 tracking-tight">
                      {teacher.name}
                    </h2>
                    <p className="text-cyan-400 font-semibold text-sm mb-2 uppercase tracking-widest">{teacher.designation}</p>
                    {teacher.workplace && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {teacher.workplace}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bio Section */}
                <div className="mb-8">
                  <p className="text-gray-400 leading-relaxed italic">"{teacher.bio}"</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  {/* Education */}
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-white mb-4 text-sm uppercase tracking-wider">
                      <FaGraduationCap className="text-cyan-500" /> Education
                    </h3>
                    <div className="space-y-4">
                      {teacher.education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-cyan-500/30 pl-4">
                          <p className="text-sm font-bold text-gray-200">{edu.institute}</p>
                          <p className="text-[11px] text-gray-500 uppercase">{edu.department}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strengths */}
                  {teacher.strengths && (
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-white mb-4 text-sm uppercase tracking-wider">
                        <span className="text-yellow-500">⭐</span> Strengths
                      </h3>
                      <ul className="space-y-2">
                        {teacher.strengths.map((point, index) => (
                          <li key={index} className="flex items-center gap-2 text-[13px] text-gray-400">
                            <div className="w-1 h-1 rounded-full bg-cyan-500" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Expertise Chips */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {teacher.expertise.map((skill) => (
                      <span key={skill} className="bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-cyan-500/10 transition-colors uppercase">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social & Style */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="text-[11px] text-gray-500">
                    <span className="text-gray-300 font-bold uppercase mr-2">Style:</span> {teacher.teachingStyle}
                  </div>
                  <a
                    href={teacher.linkedIn}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Tagline */}
        <div className="mt-24 text-center">
          <div className="inline-block relative">
            {/* Decorative Quote Icons or Lines */}
            <div className="absolute -top-6 -left-8 text-cyan-500/20 text-6xl font-serif">“</div>

            <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
             আইসিটি-র জটিলতায় ইতি টেনে— <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                নতুন এক স্মার্ট লার্নিং জার্নি শুরু হোক আমাদের সাথে।
              </span>
            </h3>

            <div className="absolute -bottom-10 -right-8 text-cyan-500/20 text-6xl font-serif">”</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;