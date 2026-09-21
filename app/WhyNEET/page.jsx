import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Link from "next/link";
import Image from "next/image";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaMosque,
  FaShieldAlt,
  FaLaptopCode,
  FaFutbol,
  FaHandshake,
  FaChartLine,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";

const advantages = [
  {
    title: "Strong Academic Foundation",
    icon: <FaGraduationCap className="text-xl text-gold" />,
    desc: "We prioritize concept clarity, deep understanding, regular practice and continuous improvement over rote memorization.",
  },
  {
    title: "21+ Years of Leadership",
    icon: <FaAward className="text-xl text-gold" />,
    desc: "Led by Sir Mujahid Ali Ansari (MA), an experienced educator with more than two decades of proven academic leadership.",
  },
  {
    title: "Dedicated & Caring Teachers",
    icon: <FaChalkboardTeacher className="text-xl text-gold" />,
    desc: "Our faculty offers individualized attention, encouraging supervision, and high pedagogical standards in every classroom.",
  },
  {
    title: "Character & Islamic Values",
    icon: <FaMosque className="text-xl text-gold" />,
    desc: "We embed honesty, respect, discipline, modesty, and Islamic ethics into daily school routines, assemblies, and interactions.",
  },
  {
    title: "Safe & Supportive Environment",
    icon: <FaShieldAlt className="text-xl text-gold" />,
    desc: "A secure, disciplined, and nurturing campus in Gujranwala where every child feels confident, respected, and eager to learn.",
  },
  {
    title: "Modern 21st-Century Skills",
    icon: <FaLaptopCode className="text-xl text-gold" />,
    desc: "Building confidence in communication, logical inquiry, digital awareness, collaboration, and structured problem-solving.",
  },
  {
    title: "Vibrant Co-Curricular Life",
    icon: <FaFutbol className="text-xl text-gold" />,
    desc: "Sports, reading clubs, art exhibitions, speech competitions, and educational activities beyond the traditional desk.",
  },
  {
    title: "Active Parent Partnership",
    icon: <FaHandshake className="text-xl text-gold" />,
    desc: "Continuous communication, scheduled parent-teacher meetings, and workshops to ensure consistent support between school and home.",
  },
];

const stats = [
  { value: "21+", label: "Years Leadership Experience" },
  { value: "PG–10", label: "Complete School Journey" },
  { value: "100%", label: "Individual Care & Focus" },
  { value: "1:1", label: "Parent–Teacher Collaboration" },
];

export default function WhyNEETPage() {
  return (
    <main className="bg-white text-dark">
      <HeroHeader
        title={"Why Choose NEET"}
        subtitle="A Value-Driven Educational Experience in Gujranwala"
        tagline="Where Learning Becomes Leadership"
        description="Discover why families in Gujranwala trust NEET School System for their children's complete intellectual, moral, and personal growth from Play Group to Matric."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-12 sm:py-16 flex flex-col gap-16">
        {/* Intro Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs uppercase tracking-wider">
              The NEET Difference
            </div>
            <h2 className="h2 text-dark">
              An Education Built on <br />
              <span className="text-main">Purpose, Care &amp; Excellence</span>
            </h2>
            <p className="text-sm sm:text-base text-gray leading-relaxed">
              Choosing the right school is one of the most important decisions a family
              makes. At NEET School System, we do not view education merely as textbook
              instruction — we shape confident, well-mannered, and intellectually capable
              young individuals prepared for the future.
            </p>
            <p className="text-sm sm:text-base text-gray leading-relaxed">
              Located conveniently near Sialkot Bypass on Model Sialkot Road,
              Gujranwala, our campus provides a secure, wholesome environment where
              teachers know their students by name and nurture their distinct talents.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/slider1.JPG"
              alt="NEET School Campus"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#001b44] to-[#0a275e] text-white text-center space-y-1 shadow-md border border-white/10"
            >
              <h3 className="font-berlin text-3xl sm:text-5xl text-gold font-bold">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 8 NEET Advantages */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="font-berlin text-2xl sm:text-4xl text-dark">
              8 Reasons Families Choose NEET School System
            </h3>
            <p className="text-sm sm:text-base text-gray leading-relaxed">
              Key pillars that make our educational environment exceptional for every student.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-gold/60 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#001b44]/5 group-hover:bg-[#001b44] transition-colors w-fit mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-berlin text-lg font-bold text-dark group-hover:text-main transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-gold font-bold">
                  <span>NEET Pillar</span>
                  <span>✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#001b44] via-[#092556] to-[#00122e] text-white p-8 sm:p-12 text-center space-y-4 border border-white/10 shadow-xl">
          <span className="text-xs font-bold text-gold uppercase tracking-widest">
            Admissions Open · Gujranwala
          </span>
          <h3 className="font-berlin text-2xl sm:text-4xl text-white">
            Experience the Difference Yourself
          </h3>
          <p className="text-xs sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Visit our campus to meet our teachers, view our classrooms, and discuss your child&apos;s academic future with our leadership team.
          </p>
          <div className="pt-2 flex justify-center gap-3 flex-wrap">
            <Link href="/OnlineAdmission">
              <button className="px-8 py-3.5 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95">
                Apply for Admission →
              </button>
            </Link>
            <Link href="/ContactUs">
              <button className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/30 backdrop-blur transition-all">
                Contact Admissions Office
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
