import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Link from "next/link";
import Image from "next/image";
import { FaBookOpen, FaShieldAlt, FaLightbulb, FaComments, FaAward, FaUsers, FaEye, FaBullseye } from "react-icons/fa";

const AboutUs = () => {
  const priorities = [
    {
      title: "Academic Excellence",
      desc: "Concept-based learning that builds real understanding, not memorization for its own sake.",
      icon: <FaBookOpen className="text-xl text-gold" />,
    },
    {
      title: "Character & Discipline",
      desc: "Islamic and moral values woven into daily school life, alongside habits of punctuality and self-control.",
      icon: <FaShieldAlt className="text-xl text-gold" />,
    },
    {
      title: "Creativity & Critical Thinking",
      desc: "Room for students to question, explore ideas and express themselves with confidence.",
      icon: <FaLightbulb className="text-xl text-gold" />,
    },
    {
      title: "Communication & Confidence",
      desc: "Skills built through participation, presentation and everyday classroom dialogue.",
      icon: <FaComments className="text-xl text-gold" />,
    },
    {
      title: "Leadership Development",
      desc: "Opportunities to take initiative, work in teams and make responsible decisions.",
      icon: <FaAward className="text-xl text-gold" />,
    },
    {
      title: "Physical Activity & Parent Partnership",
      desc: "Co-curricular life and an ongoing relationship between school and home.",
      icon: <FaUsers className="text-xl text-gold" />,
    },
  ];

  return (
    <main>
      <HeroHeader
        title={"About Us"}
        subtitle="A New Era of Educational Transformation"
        tagline="Where Learning Becomes Leadership"
        description="NEET School System is committed to providing meaningful, modern and values-based education for students from Play Group to Matric here in Gujranwala."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 flex flex-col gap-12 sm:gap-16">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs uppercase tracking-wider">
              Our Educational Story
            </div>
            <h2 className="h2 text-dark">
              NEET — A New Era of <br />
              <span className="text-main">Educational Transformation</span>
            </h2>
            <p className="text-sm sm:text-base text-gray leading-relaxed">
              NEET School System is committed to providing meaningful, modern and
              values-based education for students from Play Group to Matric. Our
              approach focuses on developing the whole child — academically, morally,
              socially, emotionally and physically.
            </p>
            <p className="text-sm sm:text-base text-gray leading-relaxed">
              We believe every child has unique potential, and our responsibility
              is to provide the right environment, guidance, opportunities and
              encouragement so that potential can flourish.
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

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-[#001b44] text-white shadow-lg space-y-4 border border-white/10">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-white/10 text-gold text-xl">
                <FaEye />
              </span>
              <h3 className="font-berlin text-2xl text-white">Our Vision</h3>
            </div>
            <blockquote className="text-sm sm:text-base text-white/90 italic leading-relaxed border-l-2 border-gold/60 pl-3">
              &ldquo;To become a leading centre of educational excellence that
              nurtures confident, principled, innovative and future-ready learners
              who lead with knowledge, character, discipline and purpose.&rdquo;
            </blockquote>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#d7a51b] to-[#b88308] text-white shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-white/20 text-white text-xl">
                <FaBullseye />
              </span>
              <h3 className="font-berlin text-2xl text-white">Our Mission</h3>
            </div>
            <blockquote className="text-sm sm:text-base text-white/95 italic leading-relaxed border-l-2 border-white/40 pl-3">
              &ldquo;To provide a stimulating and inclusive learning environment
              where every student is empowered through quality education, strong
              character building, creativity, critical thinking and leadership —
              preparing them to succeed in a changing world.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Educational Priorities */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-berlin text-2xl sm:text-3xl text-dark">
              Our Educational Priorities
            </h3>
            <p className="text-xs sm:text-sm text-gray">
              Core pillars guiding everyday academic instruction and student life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {priorities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-gold/60 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#001b44]/5 group-hover:bg-[#001b44] transition-colors w-fit mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-berlin text-lg font-bold text-dark group-hover:text-main transition-colors mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray leading-relaxed">
                    {item.desc}
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

export default AboutUs;

