import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Link from "next/link";
import {
  FaUserFriends,
  FaLightbulb,
  FaCompass,
  FaHeart,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const areas = [
  {
    title: "Academic Mentoring & Goal Setting",
    icon: <FaChartLine className="text-xl text-gold" />,
    desc: "Personalized study strategies, exam preparation guidance, subject improvement roadmaps, and routine planning for each student.",
  },
  {
    title: "Emotional & Behavioral Support",
    icon: <FaHeart className="text-xl text-gold" />,
    desc: "A safe, respectful, and confidential environment where students can discuss concerns, overcome exam stress, and build positive peer relationships.",
  },
  {
    title: "Career & Subject Guidance (Matric)",
    icon: <FaCompass className="text-xl text-gold" />,
    desc: "Helping senior students choose appropriate academic streams (Pre-Medical, Pre-Engineering, Computer Science, Arts) and understand future college options.",
  },
  {
    title: "Confidence & Communication Building",
    icon: <FaLightbulb className="text-xl text-gold" />,
    desc: "Special focus on helping hesitant or shy students overcome stage fear, speak up in class, and express their ideas with self-assurance.",
  },
];

export default function StudentCounsellingPage() {
  return (
    <main className="bg-white text-dark">
      <HeroHeader
        title={"Student Counselling & Mentoring"}
        subtitle="Individual Guidance, Care & Future Direction"
        tagline="Nurturing Confidence & Character"
        description="At NEET School System, student counselling is an essential pillar of school life — ensuring every student receives personalized attention, moral mentorship, and academic encouragement."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-12 sm:py-16 flex flex-col gap-16">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs uppercase tracking-wider">
            Holistic Student Care
          </div>
          <h2 className="h2 text-dark">
            Mentoring Every Student to <span className="text-main">Thrive</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray leading-relaxed">
            Every child experiences unique developmental milestones and academic challenges.
            Our faculty and mentors work closely with students to help them build resilience,
            positive habits, and self-belief.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {areas.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-gold/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-[#001b44] text-gold w-fit mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-berlin text-xl sm:text-2xl font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-main">
                <span>Mentorship Core</span>
                <span className="ml-auto text-gold">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#001b44] via-[#092556] to-[#00122e] text-white p-8 sm:p-12 text-center space-y-4 border border-white/10 shadow-xl">
          <span className="text-xs font-bold text-gold uppercase tracking-widest">
            Parent &amp; Student Inquiries
          </span>
          <h3 className="font-berlin text-2xl sm:text-4xl text-white">
            Schedule a Mentoring Consultation
          </h3>
          <p className="text-xs sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Parents seeking detailed guidance regarding their child&apos;s academic performance or stream selection can schedule a meeting with our principal and teachers.
          </p>
          <div className="pt-2 flex justify-center gap-3 flex-wrap">
            <Link href="/ContactUs">
              <button className="px-8 py-3.5 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95">
                Contact Guidance Office →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
