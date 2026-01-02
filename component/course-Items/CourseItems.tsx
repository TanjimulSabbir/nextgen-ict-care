import { courses } from '@/data'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaCheckCircle, FaClock } from 'react-icons/fa'

export default function CourseItems() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
              <div
                  key={index}
                  className="group relative bg-[#0f172a] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-cyan-500/40 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
              >
                  {/* --- Top Decorative Header (No Image) --- */}
                  <div className={`relative h-32 w-full overflow-hidden flex items-center justify-center`}>
                      {/* Dynamic Gradient Background */}
                      <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${index === 0 ? 'from-emerald-500 via-teal-500 to-cyan-500' : index === 1 ? 'from-blue-600 via-indigo-500 to-purple-500' : 'from-red-500 via-orange-500 to-rose-500'}`} />

                      {/* Floating Abstract Circle */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

                      {/* Course Tag/Icon Replacement */}
                      <div className="relative z-10 flex flex-col items-center">
                          <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 backdrop-blur-md ${course.tagColor || 'bg-white/5 text-white'}`}>
                              {course.tag || 'Academic Batch'}
                          </span>
                      </div>
                  </div>

                  {/* --- Card Body --- */}
                  <div className="px-8 pb-8 pt-2">
                      <div className="mb-6">
                          <h4 className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                              <span className="w-8 h-[1px] bg-cyan-500/30"></span>
                              {course.subTitle}
                          </h4>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                              {course.title}
                          </h3>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-8 h-12 overflow-hidden">
                          {course.details}
                      </p>

                      {/* --- Feature List with Glass Icons --- */}
                      <div className="space-y-3 mb-10">
                          {course.topics.slice(0, 5).map((topic, i) => (
                              <div key={i} className="flex items-center gap-3 text-[13px] text-gray-300 group/item">
                                  <div className="flex-shrink-0 w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-cyan-500/50 transition-colors">
                                      <FaCheckCircle className="text-[10px] text-cyan-500/70 group-hover/item:text-cyan-400" />
                                  </div>
                                  <span className="group-hover/item:text-white transition-colors">{topic}</span>
                              </div>
                          ))}
                      </div>

                      {/* --- Pricing & Duration Section --- */}
                      <div className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 mb-8">
                          <div>
                              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">কোর্স ফি</div>
                              <div className="flex items-center gap-2">
                                  <span className="text-2xl font-black text-white">{course.discountPrice}</span>
                                  <span className="text-xs text-gray-500 line-through">{course.courseFee}</span>
                              </div>
                          </div>
                          <div className="text-right">
                              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">সময়কাল</div>
                              <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                                  <FaClock className="text-xs" />
                                  <span>{course.duration}</span>
                              </div>
                          </div>
                      </div>

                      {/* --- Action Button --- */}
                      <Link
                          href={course.courseDetailsLink}
                          className="group/btn relative flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden"
                      >
                          {/* Button Background & Hover Effect */}
                          <div className="absolute inset-0 bg-cyan-500 transition-transform duration-300 group-hover/btn:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

                          <span className="relative z-10 text-black flex items-center gap-2">
                              বিস্তারিত দেখুন
                              <FaArrowRight className="text-xs transition-transform group-hover/btn:translate-x-1" />
                          </span>
                      </Link>
                  </div>

                  {/* Floating Glow (Hover Only) */}
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
          ))}
      </div>
  )
}
