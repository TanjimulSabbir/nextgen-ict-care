import Image from "next/image";
import React from "react";
import { aboutUs, instructors } from "@/data";

const AboutUs: React.FC = () => {
  return (
    <section className="py-10 px-6 font-siliguri">

      {/* About Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
          {aboutUs.subtitle}
        </h1>

        <div className="space-y-6 text-lg leading-relaxed">
          {aboutUs.description.split("\n\n").map((para, index) => (
            <p key={index}>
              {para}
            </p>
          ))}
        </div>
      </div>


      {/* Instructor Cards */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {instructors.map((teacher) => (
          <div
            key={teacher.id}
            className="
        bg-slate-900/80
        border border-slate-800
        rounded-2xl
        p-6
        shadow-lg
        hover:shadow-blue-500/10
        hover:-translate-y-1
        transition-all duration-300
      "
          >
            {/* Profile */}
            <div className="flex items-center gap-5 mb-6">
              <Image
                src={teacher.image}
                alt={teacher.name}
                width={96}
                height={96}
                className="rounded-full object-cover border-4 border-blue-500/30"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-100">
                  {teacher.name}
                </h2>
                <p className="text-blue-400 font-medium">{teacher.designation}</p>
                {/* Workplace */}
                {teacher.workplace && (
                  <p className="text-gray-400 text-sm mt-1">{teacher.workplace}</p>
                )}
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-300 mb-5 leading-relaxed">{teacher.bio}</p>

            {/* Education + Workplace */}
            <div className="mb-5">
              <h3 className="font-semibold text-gray-200 mb-3">🎓 Education</h3>
              <ul className="space-y-3">
                {teacher.education.map((edu, index) => (
                  <li
                    key={index}
                    className="border-l-4 border-blue-500/60 pl-4 text-sm"
                  >
                    <p className="font-medium text-gray-200">{edu.institute}</p>
                    <p className="text-gray-400">{edu.department}</p>
                  </li>
                ))}
              </ul>

              {/* Workplace */}
              {teacher.workplace && (
                <div className="mt-4 inline-flex items-center gap-x-2 flex-wrap">
                  <span className="bg-blue-500/20 text-blue-400 font-medium px-3 py-1 rounded-full text-sm border border-blue-500/40 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v4a2 2 0 002 2h14a2 2 0 002-2V7M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2M3 7h18"
                      />
                    </svg>
                    <span>    {teacher.workplace}</span>
                  </span>
                </div>
              )}
            </div>
            {/* Expertise */}
            <div className="mb-5">
              <h3 className="font-semibold text-gray-200 mb-3">💡 Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {teacher.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="
                bg-blue-500/10
                text-blue-400
                px-3 py-1
                rounded-full
                text-sm
                border border-blue-500/20
              "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Strengths */}
            {teacher.strengths && (
              <div className="mb-5">
                <h3 className="font-semibold text-gray-200 mb-3">⭐ Strengths</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {teacher.strengths.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Teaching Style */}
            <p className="text-sm text-gray-400 mb-4">
              <span className="text-gray-200 font-medium">Teaching Style:</span>{" "}
              {teacher.teachingStyle}
            </p>

            {/* LinkedIn */}
            <a
              href={teacher.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="
          inline-flex items-center gap-2
          text-blue-400
          font-medium
          hover:text-blue-300
          transition
        "
            >
              View LinkedIn →
            </a>
          </div>
        ))}
      </div>


    </section>
  );
};

export default AboutUs;
