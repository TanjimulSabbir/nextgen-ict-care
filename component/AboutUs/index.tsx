import Image from "next/image";
import React from "react";
import TanjimulSabbir from "@/public/media/mentors/TanjimulSabbir.jpeg"
import Nirjona from "@/public/media/mentors/Nirjona.jpeg"

/* ================= TYPES ================= */

interface Education {
  institute: string;
  department: string;
}

interface Instructor {
  id: number;
  name: string;
  designation: string;
  image: string;
  experience: string;
  bio: string;
  education: Education[];
  expertise: string[];
  teachingStyle: string;
  linkedIn: string;
}

interface AboutUsInfo {
  title: string;
  subtitle: string;
  description: string;
}

/* ================= DATA ================= */

const aboutUs: AboutUsInfo = {
  title: "About Us",
  subtitle: "Building Strong ICT Foundations for HSC Students",
  description:
    "আমরা দীর্ঘদিন ধরে ব্যাচ আকারে HSC ICT পড়িয়ে আসছি এবং এই পথচলায় শত শত শিক্ষার্থীর সাথে কাজ করার অভিজ্ঞতা আমাদের আছে। সময়ের সাথে আমরা বুঝেছি—ভালোভাবে না পড়াতে পারলে শিক্ষার্থীরা কখনোই আমাদের গ্রহণ করবে না, আর এই সত্যটাই আমাদের সবচেয়ে বড় দায়িত্ববোধ তৈরি করেছে।\n\nএই বিশ্বাস থেকেই আমরা নতুনভাবে আরও বেশি শিক্ষার্থীর কাছে পৌঁছাতে চাই। আমাদের দুইজন মেন্টর প্রতিটি শিক্ষার্থীকে খুব যত্ন ও গুরুত্বের সাথে গাইড করবে, কারণ আমাদের মূল লক্ষ্য শুধু পড়ানো নয়—ভালোভাবে পড়ানো। HSC ICT-এর পুরো সিলেবাস আমরা গভীরভাবে বিশ্লেষণ করেছি। কোন টপিক কঠিন, কোনটা মাঝারি, আর কোনটা সহজ—সবকিছু আলাদা করে সাজিয়ে একটি পরিষ্কার ও কার্যকর কোর্স আউটলাইন তৈরি করেছি। ক্লাসে নিয়মিত অংশ নিলে এবং কয়েকদিন মনোযোগ দিয়ে পড়লেই শিক্ষার্থীরা বিষয়গুলো স্পষ্টভাবে বুঝতে পারবে—এই আত্মবিশ্বাস আমাদের আছে।\n\nআমরা চাই শিক্ষার্থীরা আমাদের কাছে আসুক, আমাদের পড়ানোর পদ্ধতি দেখুক এবং নিজেরাই সিদ্ধান্ত নিক। আমরা আমাদের সর্বোচ্চ চেষ্টা দিয়ে শেখাতে প্রতিজ্ঞাবদ্ধ, কারণ আমরা দুজনই সত্যিকার অর্থে পড়ানোকে ভালোবাসি। এই ভালোবাসা থেকেই আমাদের এই প্ল্যাটফর্ম গড়ে তোলা।\n\nতোমরা এসো, আমাদের সাথে শেখো—ইনশাআল্লাহ ভালো লাগবেই।",
};


const instructors: Instructor[] = [
  {
    id: 1,
    name: "Tanjimul Islam Sabbir",
    designation: "Software Engineer & ICT Mentor",
    image: TanjimulSabbir,
    experience: "3+ Years",
    bio: "Software engineer passionate about teaching HSC ICT using real-world examples, problem-solving techniques, and exam-oriented guidance.",
    education: [
      {
        institute: "Rajshahi University",
        department: "Bachelor of Philosophy",
      },
    ],
    expertise: [
      "HSC ICT",
      "Programming Basics",
      "Web Technology",
      "Problem Solving",
    ],
    teachingStyle: "Concept-based, practical, exam-focused",
    linkedIn: "https://www.linkedin.com/in/tanjimulsabbir",
  },
  {
    id: 2,
    name: "Ayesha Ahmmed Nirjona",
    designation: "ICT Lecturer",
    image: Nirjona,
    experience: "2+ Years",
    bio: "Dedicated ICT lecturer with strong academic expertise, helping students understand complex ICT topics in a simple and friendly way.",
    education: [
      {
        institute: "University of Asia Pacific",
        department: "BSc in Computer Science & Engineering",
      },
      {
        institute: "Bangladesh University of Professionals",
        department: "MSc in Information & Communication Technology",
      },
    ],
    expertise: [
      "HSC ICT",
      "Academic Teaching",
      "Concept Explanation",
      "Student Guidance",
    ],
    teachingStyle: "Friendly, structured, student-focused",
    linkedIn: "https://www.linkedin.com/in/ayesha-ahmmed-nirjona",
  },
];

/* ================= COMPONENT ================= */

const AboutUs: React.FC = () => {
  return (
    <section className="bg-[#0b1120] py-20 px-6 font-siliguri">

      {/* About Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-100 mb-6">
          {aboutUs.subtitle}
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
          {aboutUs.description}
        </p>
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
                <p className="text-blue-400 font-medium">
                  {teacher.designation}
                </p>
                <p className="text-sm text-gray-400">
                  Experience: {teacher.experience}
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-300 mb-5 leading-relaxed">
              {teacher.bio}
            </p>

            {/* Education */}
            <div className="mb-5">
              <h3 className="font-semibold text-gray-200 mb-3">
                🎓 Education
              </h3>

              <ul className="space-y-3">
                {teacher.education.map((edu, index) => (
                  <li
                    key={index}
                    className="border-l-4 border-blue-500/60 pl-4 text-sm"
                  >
                    <p className="font-medium text-gray-200">
                      {edu.institute}
                    </p>
                    <p className="text-gray-400">
                      {edu.department}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="mb-5">
              <h3 className="font-semibold text-gray-200 mb-3">
                💡 Expertise
              </h3>
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

            {/* Teaching Style */}
            <p className="text-sm text-gray-400 mb-4">
              <span className="text-gray-200 font-medium">
                Teaching Style:
              </span>{" "}
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
