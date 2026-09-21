import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Link from "next/link";
import {
  FaUserFriends,
  FaHandsHelping,
  FaComments,
  FaCalendarCheck,
  FaHeart,
  FaAward,
} from "react-icons/fa";

const topics = [
  {
    title: "Positive Parenting & Child Psychology",
    icon: <FaHeart className="text-xl text-gold" />,
    desc: "Understanding emotional changes, building strong communication with children, and encouraging positive home habits.",
  },
  {
    title: "Supporting Academic Routines at Home",
    icon: <FaCalendarCheck className="text-xl text-gold" />,
    desc: "Practical techniques to help children manage study time, minimize screen distraction, and prepare effectively for assessments.",
  },
  {
    title: "Character, Values & Digital Discipline",
    icon: <FaAward className="text-xl text-gold" />,
    desc: "Guiding children through Islamic morals, respectful behavior, screen-time balance, and safe digital usage.",
  },
  {
    title: "Structured Parent–Teacher Meetings (PTMs)",
    icon: <FaComments className="text-xl text-gold" />,
    desc: "Regular one-on-one sessions between parents and educators to review student progress, strengths, and areas for focused support.",
  },
];

export default function ParentingWorkshopPage() {
  return (
    <main className="bg-white text-dark">
      <HeroHeader
        title={"Parenting Workshops & PTMs"}
        subtitle="School & Home — Partners in Every Child's Growth"
        tagline="Together for Student Excellence"
        description="NEET School System strongly believes that a child's education flourishes when school and family work in harmony. Our workshops and meetings equip parents with actionable insights to support their children's development."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-12 sm:py-16 flex flex-col gap-16">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs uppercase tracking-wider">
            Parent Partnership
          </div>
          <h2 className="h2 text-dark">
            Building a Stronger <span className="text-main">Home–School Bridge</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray leading-relaxed">
            Our specialized interactive workshops provide parents with guidance on
            contemporary parenting challenges, study habits, and character development.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {topics.map((item, idx) => (
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
                <span>Partnership Initiative</span>
                <span className="ml-auto text-gold">★</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#001b44] via-[#092556] to-[#00122e] text-white p-8 sm:p-12 text-center space-y-4 border border-white/10 shadow-xl">
          <h3 className="font-berlin text-2xl sm:text-4xl text-white">
            Connect with NEET School System
          </h3>
          <p className="text-xs sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Admissions open for Play Group to Matric in Gujranwala. Experience our caring, collaborative community firsthand.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link href="/OnlineAdmission">
              <button className="px-8 py-3.5 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95">
                Apply for Admission →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
