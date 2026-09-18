import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Link from "next/link";
import { FaGraduationCap, FaShieldAlt, FaLightbulb, FaAward, FaHeart, FaStar } from "react-icons/fa";

const OurPhilosophy = () => {
  const values = [
    { title: "Knowledge", desc: "Concept-based learning, critical inquiry, and academic depth.", icon: <FaGraduationCap className="text-gold" /> },
    { title: "Character", desc: "Islamic ethics, truthfulness, humility, and moral integrity.", icon: <FaHeart className="text-gold" /> },
    { title: "Discipline", desc: "Positive habits, punctuality, self-control, and responsibility.", icon: <FaShieldAlt className="text-gold" /> },
    { title: "Creativity", desc: "Imagination, problem-solving, and innovative thinking.", icon: <FaLightbulb className="text-gold" /> },
    { title: "Leadership", desc: "Guiding others through service, confidence, and good example.", icon: <FaAward className="text-gold" /> },
    { title: "Excellence", desc: "Continuous improvement and highest personal standards.", icon: <FaStar className="text-gold" /> },
  ];

  return (
    <main>
      <HeroHeader
        title={"Our Philosophy"}
        subtitle="Competence & Character Together"
        tagline="Where Learning Becomes Leadership"
        description="Knowledge, character, discipline, creativity, leadership, excellence — at NEET School System, we believe true education develops both competence and character."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 flex flex-col gap-12">
        <div className="rounded-3xl bg-gradient-to-br from-[#062319] via-[#0b3828] to-[#041c14] text-white p-8 sm:p-12 shadow-xl border border-emerald-900/40 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold text-gold uppercase tracking-widest">
            Core Belief
          </span>
          <h2 className="font-serif italic text-2xl sm:text-4xl text-white">
            &ldquo;True education develops both competence and character.&rdquo;
          </h2>
          <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl mx-auto">
            At NEET School System, we nurture knowledge, character, discipline,
            creativity, and leadership in every student — from their first day of Play
            Group to their final year of Matric in Gujranwala.
          </p>
        </div>

        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="font-berlin text-2xl sm:text-3xl text-dark">
              The 6 Pillars of NEET Philosophy
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-gold/60 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-3.5 rounded-xl bg-[#062319] text-xl flex-shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h4 className="font-berlin text-xl font-bold text-dark mb-1">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <Link href="/OnlineAdmission">
            <button className="px-8 py-3.5 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm sm:text-base shadow-md transition-all active:scale-95">
              Apply for Admission Today →
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default OurPhilosophy;

