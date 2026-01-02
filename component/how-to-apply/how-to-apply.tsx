import { FaFileInvoiceDollar, FaLaptopCode, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa'

export default function HowToApply() {
  return <>
    {/* --- Enrollment Process & Mentor Info --- */}
    < div className="grid lg:grid-cols-2 gap-16 items-start bg-white/[0.02] border border-white/5 p-8 md:p-16 rounded-[4rem]" >
      {/* Process Steps */}
      < div >
        <h3 className="text-3xl font-bold text-white mb-10">ভর্তি হওয়ার ধাপসমূহ</h3>
        <div className="space-y-10 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-dashed bg-cyan-500/20 border-l-2 border-dashed border-cyan-500/30" />

          {[
            { icon: <FaLaptopCode />, title: "অনলাইনে ফর্ম পূরণ", desc: "প্রথমে আমাদের ওয়েবসাইটের লিঙ্কে গিয়ে প্রাথমিক তথ্য দিয়ে ফর্মটি পূরণ করুন।" },
            { icon: <FaMapMarkerAlt />, title: "সরাসরি ভিজিট করুন", desc: "আমাদের অফিসে এসে মেন্টরদের সাথে সরাসরি কথা বলুন এবং পরিবেশ দেখে নিন।" },
            { icon: <FaFileInvoiceDollar />, title: "পেমেন্ট ও রসিদ", desc: "পছন্দসই ব্যাচে পেমেন্ট সম্পন্ন করে আপনার মানি রসিদ ও ক্লাস রুটিন বুঝে নিন।" },
            { icon: <FaUserTie />, title: "ক্লাস শুরু", desc: "নির্ধারিত তারিখে ল্যাপটপ নিয়ে চলে আসুন আমাদের ইন্টারেক্টিভ অফলাইন ক্লাসে।" }
          ].map((step, i) => (
            <div key={i} className="flex gap-8 relative z-10 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-black shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                {step.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  </>
}
