import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Link from "next/link";
import { FaChalkboardTeacher, FaUserGraduate, FaHeart, FaLightbulb, FaChartLine, FaUsers, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Careers = () => {
  const areas = [
    { title: "Teaching", desc: "Passionate classroom instruction across Early Years, Primary, Middle and Matric levels.", icon: <FaChalkboardTeacher className="text-xl text-gold" /> },
    { title: "Student Development", desc: "Mentoring, counselling, and guiding students towards holistic growth.", icon: <FaUserGraduate className="text-xl text-gold" /> },
    { title: "Character Building", desc: "Instilling positive discipline, ethics, honesty, and Islamic values.", icon: <FaHeart className="text-xl text-gold" /> },
    { title: "Innovative Education", desc: "Applying modern pedagogical tools, active learning, and concept-based methods.", icon: <FaLightbulb className="text-xl text-gold" /> },
    { title: "Professional Growth", desc: "Continuous teacher training, peer collaboration, and career development.", icon: <FaChartLine className="text-xl text-gold" /> },
    { title: "Teamwork & Leadership", desc: "Contributing to a harmonious, respectful, and forward-thinking school community.", icon: <FaUsers className="text-xl text-gold" /> },
  ];

  return (
    <main>
      <HeroHeader
        title={"Join Our Team"}
        subtitle="Careers at NEET School System"
        tagline="Dedicated Teachers. Inspired Learners."
        description="We believe great schools are built by committed, capable and caring educators. Become part of our educational journey — submit your CV to apply for a position."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 flex flex-col gap-12 sm:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-main uppercase tracking-widest">
              Work With Us
            </span>
            <h2 className="h2 text-dark">
              Build the Future of <br />
              <span className="text-main">Education in Gujranwala</span>
            </h2>
            <p className="text-sm sm:text-base text-gray leading-relaxed">
              At NEET School System, our educators are the heart of our mission. We provide
              a collaborative, respectful, and stimulating environment where teachers are
              valued, empowered, and supported in their professional journey.
            </p>
            <p className="text-sm sm:text-base text-gray leading-relaxed">
              If you have a strong academic background, clear concept mastery, and a genuine
              passion for nurturing young minds from Play Group to Matric, we would love to
              hear from you.
            </p>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#062319] text-white shadow-xl border border-emerald-900/40 space-y-5">
            <h3 className="font-berlin text-xl sm:text-2xl text-white">
              Submit Your Application
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
              Please email your updated CV and cover letter, or visit our campus office
              during school hours (8:00 AM – 2:00 PM).
            </p>
            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-gold" />
                <span>Call: 0300-7441617 · 055-3201617</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gold" />
                <span>Email: careers@neetschoolsystem.com</span>
              </div>
            </div>
            <a
              href="tel:03007441617"
              className="block text-center py-3 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm shadow-md transition-all active:scale-95"
            >
              Contact Administration
            </a>
          </div>
        </div>

        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="font-berlin text-2xl sm:text-3xl text-dark">
              We Welcome Professionals Passionate About:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-gold/60 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#062319]/5 group-hover:bg-[#062319] transition-colors w-fit mb-3">
                    {area.icon}
                  </div>
                  <h4 className="font-berlin text-lg font-bold text-dark group-hover:text-main transition-colors mb-1">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;

