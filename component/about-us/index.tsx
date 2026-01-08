import Image from "next/image";
import React from "react";
import { instructors } from "@/data";
import { FaGraduationCap, FaLightbulb, FaHeart, FaLinkedin, FaLaptopCode, FaStar, FaAward } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <section className="relative mt-10 py-24 px-6 bg-[#020617] overflow-hidden font-siliguri">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- 1. HERO SECTION --- */}
        <div className="max-w-5xl mx-auto text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-[0.3em] mb-8 animate-bounce">
            <FaStar className="text-[10px]" /> Our Mission
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[1.1] text-white tracking-tighter">
            Building Strong <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              ICT Foundations
            </span>
          </h1>

          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#0f172a]/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl">
              <p className="text-gray-300 text-lg md:text-2xl leading-relaxed text-center font-light">
                <span className="text-white font-bold underline decoration-cyan-500/50">NextGen ICT Care</span> কেবল একটি কোচিং নয়; এটি আইসিটি শেখার এক নতুন যাত্রা। আমরা মুখস্থ বিদ্যায় বিশ্বাসী নই, বরং প্রতিটি লজিককে বাস্তব জীবনের সাথে মিলিয়ে শিক্ষার্থীদের ব্রেইনে গেঁথে দেয়াই আমাদের সার্থকতা।
              </p>

              {/* Quick Vision Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/5">
                {[
                  { icon: <FaLightbulb className="text-yellow-400" />, title: "স্মার্ট সিলেবাস", desc: "বোর্ড স্ট্যান্ডার্ড ম্যাপিং" },
                  { icon: <FaGraduationCap className="text-cyan-400" />, title: "পার্সোনাল কেয়ার", desc: "ওয়ান-টু-ওয়ান গাইডেন্স" },
                  { icon: <FaHeart className="text-rose-500" />, title: "প্যাশন-ড্রিভেন", desc: "আনন্দদায়ক লার্নিং" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-3 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover/item:scale-110 transition-transform shadow-inner border border-white/5">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-base">{item.title}</h5>
                      <p className="text-gray-500 text-xs tracking-wide">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. INSTRUCTORS SECTION --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Meet Your <span className="text-cyan-500 text-outline">Mentors</span></h2>
          <p className="text-gray-500 uppercase tracking-[0.4em] text-xs">Architects of your ICT Success</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {instructors.map((teacher) => (
            <div
              key={teacher.id}
              className="group relative bg-[#0b1224] border border-white/[0.08] rounded-[3.5rem] p-10 transition-all duration-700 hover:border-cyan-500/30 overflow-hidden"
            >
              {/* Abstract Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/[0.02] rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-cyan-500/10 transition-all duration-700" />

              <div className="relative z-10">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-lg opacity-20 group-hover:opacity-50 transition-all duration-700 scale-90 group-hover:scale-100" />
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      width={160}
                      height={160}
                      className="relative rounded-[3rem] object-cover border-4 border-white/10 transition-all duration-700 group-hover:rotate-3"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center text-black shadow-xl border-4 border-[#0b1224]">
                      <FaAward />
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                      {teacher.name}
                    </h2>
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 opacity-70 italic">{teacher.designation}</p>

                    {teacher.workplace && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-cyan-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {teacher.workplace.title}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bio & Description */}
                <div className="mb-10 p-6 bg-white/[0.02] rounded-[2rem] border border-white/5 italic">
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    "{teacher.bio}"
                  </p>
                </div>

                {/* Info Grid */}
                <div className="gap-8 mb-10">
                  {/* --- Info Grid (Conditional Rendering based on Teacher ID) --- */}
                  <div className="grid grid-cols-1 gap-8 mb-10">

                    {/* If Teacher ID is 1 (Highlighting Software Experience) */}
                    {teacher.id === 1 && teacher?.workplace ? (
                      <div className="relative z-10 flex flex-col gap-6">
                        {/* 1. Header: Title & Icon */}
                        <div className="flex flex-col gap-4">
                          {/* Icon & Title Row */}
                          <div className="flex items-start gap-4">
                            {/* Dynamic Icon Box */}
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/5 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:scale-110 transition-transform duration-500">
                              <FaLaptopCode />
                            </div>

                            <div className="flex-1">
                              {/* Full Line Title */}
                              <h4 className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight group-hover:text-cyan-400 transition-colors">
                                {teacher?.workplace?.title}
                              </h4>

                              {/* Meta Info Row: Pulse & Experience Badge */}
                              <div className="flex flex-wrap items-center gap-3 mt-3">
                                {/* Active Status */}
                                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/5 border border-green-500/20 rounded-full">
                                  <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                  </span>
                                  <p className="text-[10px] font-black text-green-400 uppercase tracking-widest">Active Engineer</p>
                                </div>

                                {/* Industry Experience Badge */}
                                <div className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                                  <span className="text-cyan-400 font-black text-[11px] tracking-tight">3.5+ YEARS</span>
                                  <span className="text-gray-500 text-[9px] font-bold uppercase tracking-widest border-l border-white/20 pl-2">Experience</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 2. Description Section */}
                        <div className="relative p-5 md:p-6 bg-white/[0.03] border border-white/5 rounded-3xl group-hover:bg-white/[0.05] transition-colors">
                          <div className="absolute top-4 left-4 text-cyan-500/10 text-5xl font-serif">“</div>
                          <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed font-light pl-6 relative z-10">
                            রিয়েল-লাইফ <span className="text-white font-bold border-b border-cyan-500/30">সফটওয়্যার ডেভেলপমেন্ট</span> এবং আর্কিটেকচার ডিজাইনের দীর্ঘ অভিজ্ঞতা থেকে আমি শিক্ষার্থীদের শেখাই থিওরির পেছনের আসল লজিক। আইসিটিকে কেবল মুখস্থ কোনো বিষয় নয়, বরং একটি <span className="text-cyan-400 font-medium italic">প্রফেশনাল স্কিল</span> হিসেবে গড়ে তোলাই আমার লক্ষ্য।
                          </p>
                          {/* Tech Stack Mini-Chips (Optional - adding more weight to your profile) */}
                          <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-white/5">
                            {['System Architecture', 'Modern Web Tech', "OOP", 'Industry Best Practices'].map((item, i) => (
                              <span key={i} className="text-[9px] font-black text-gray-500 uppercase tracking-widest px-2 py-1 bg-white/[0.02] rounded-md border border-white/5">
                                {item}
                              </span>
                            ))}
                          </div>
                          {/* Floating Tech Stack Icons (Optional enhancement) */}
                          <div className="mt-4 flex gap-3 opacity-30 group-hover:opacity-60 transition-opacity">
                            <span className="text-[10px] font-mono text-gray-400">#ProductionReady</span>
                            <span className="text-[10px] font-mono text-gray-400">#ProblemSolving</span>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-white/5">
                          <div className="flex items-start gap-3 text-[10px] md:text-[11px] text-gray-500 uppercase tracking-widest">
                            {/* Icon - Shrink-0 prevents it from getting squeezed */}
                            <FaGraduationCap className="text-cyan-500 shrink-0 mt-0.5 text-sm" />

                            <div className="flex flex-wrap items-center gap-y-1">
                              <span className="text-gray-400 font-bold mr-2 whitespace-nowrap">
                                Academic Background:
                              </span>

                              <div className="flex items-center flex-wrap gap-x-2">
                                <span className="text-white font-medium">
                                  {teacher?.education?.[0]?.institute}
                                </span>

                                {/* Dot Separator - hidden on very small screens if wrapped */}
                                <span className="hidden sm:inline opacity-30 text-white">•</span>

                                <span className="text-gray-400">
                                  {teacher?.education?.[0]?.department}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* If Teacher ID is NOT 1 (Highlighting Education for Nirjona Mam) */
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 font-black text-white text-[11px] uppercase tracking-[0.2em] opacity-60">
                            <FaGraduationCap className="text-cyan-500 text-lg" /> Educational Background
                          </h3>
                          {teacher?.education?.map((edu, index) => (
                            <div key={index} className="relative pl-5 before:absolute before:left-0 before:top-1 before:w-1 before:h-10 before:bg-cyan-500/20">
                              <p className="text-sm font-bold text-gray-200 leading-tight">{edu.institute}</p>
                              <p className="text-[10px] text-gray-500 uppercase mt-1">{edu.department}</p>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 font-black text-white text-[11px] uppercase tracking-[0.2em] opacity-60">
                            <FaAward className="text-cyan-500 text-lg" /> Expertise
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {teacher.expertise.map((skill) => (
                              <span key={skill} className="bg-white/5 text-gray-400 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-white/5 transition-all">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expertise Chips */}
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 font-black text-white text-[10px] uppercase tracking-[0.2em] opacity-50">
                      <FaLaptopCode className="text-cyan-500 text-lg" /> Specialized In
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {teacher.expertise.map((skill) => (
                        <span key={skill} className="bg-white/5 text-gray-400 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-cyan-500/30 transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social & Style Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-cyan-500/10 rounded-full text-[10px] font-bold text-cyan-400 border border-cyan-500/20">
                      STYLE: {teacher.teachingStyle}
                    </div>
                  </div>
                  <a
                    href={teacher.linkedIn}
                    target="_blank"
                    className="flex items-center gap-2 bg-white text-black hover:bg-cyan-500 transition-all px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider shadow-xl"
                  >
                    <FaLinkedin className="text-lg" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- 3. CLOSING TAGLINE --- */}
        <div className="mt-32 text-center">
          <div className="relative inline-block py-10 px-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-[50px]" />
            <h3 className="text-3xl md:text-5xl font-black text-white leading-[1.2] relative z-10 italic">
              আইসিটি-র জটিলতায় ইতি টেনে— <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 underline decoration-cyan-500/20">
                স্মার্ট লার্নিং জার্নি শুরু হোক আমাদের সাথে।
              </span>
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;