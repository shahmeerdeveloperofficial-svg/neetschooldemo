import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Link from "next/link";
import Image from "next/image";
import {
  FaBookReader,
  FaFutbol,
  FaPaintBrush,
  FaComments,
  FaMosque,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

const clubs = [
  {
    title: "Reading & Literary Club",
    icon: <FaBookReader className="text-xl text-gold" />,
    desc: "Dedicated reading sessions, book discussions, story writing, and vocabulary enhancement in both English and Urdu.",
    image: "/hero4.jpg",
    imagePos: "object-center",
  },
  {
    title: "Sports & Physical Wellness",
    icon: <FaFutbol className="text-xl text-gold" />,
    desc: "Table tennis, cricket, badminton, athletics, and annual sports days promoting fitness, discipline, and healthy team spirit.",
    image: "/hero5.jpg",
    imagePos: "object-center",
  },
  {
    title: "Art & Creative Expression",
    icon: <FaPaintBrush className="text-xl text-gold" />,
    desc: "Drawing, painting, craftwork, calligraphy, and seasonal exhibitions encouraging student imagination and aesthetic sense.",
    image: "/hero6.jpg",
    imagePos: "object-center",
  },
  {
    title: "Debating & Public Speaking",
    icon: <FaComments className="text-xl text-gold" />,
    desc: "Classroom presentations, assembly speeches, and declamation contests building confidence, articulation, and stage presence.",
    image: "/hero7.jpg",
    imagePos: "object-center",
  },
  {
    title: "Islamic Society & Ethics",
    icon: <FaMosque className="text-xl text-gold" />,
    desc: "Qirat, Naat competitions, Seerat-un-Nabi events, and moral education sessions embedding Islamic values in daily conduct.",
    image: "/hero.jpg",
    imagePos: "object-center",
  },
  {
    title: "Science & IT Club",
    icon: <FaLaptopCode className="text-xl text-gold" />,
    desc: "Practical lab experiments, science model exhibitions, digital awareness, and creative technology exploration.",
    image: "/hero9.jpg",
    imagePos: "object-center",
  },
];

export default function SocietyAndClubsPage() {
  return (
    <main className="bg-white text-dark">
      <HeroHeader
        title={"Societies & Clubs"}
        subtitle="Co-Curricular & Student Activities"
        tagline="Learning Beyond the Classroom"
        description="At NEET School System, student life is enriched through active societies, sports, arts, debates, and creative clubs designed to build confidence, teamwork, and leadership."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-12 sm:py-16 flex flex-col gap-16">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs uppercase tracking-wider">
            Student Life &amp; Co-Curriculars
          </div>
          <h2 className="h2 text-dark">
            Developing the <span className="text-main">Whole Child</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray leading-relaxed">
            Co-curricular activities are an integral pillar of education at NEET.
            They provide students with avenues to discover their passions, hone
            talents, and practice leadership in collaborative environments.
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold/50 transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#001738]">
                <Image
                  src={club.image}
                  alt={club.title}
                  fill
                  className={`object-cover ${club.imagePos || "object-top"} group-hover:scale-105 transition-transform duration-500`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-black/50 backdrop-blur">
                  {club.icon}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-berlin text-xl font-bold text-dark mb-2 group-hover:text-main transition-colors">
                    {club.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray leading-relaxed">
                    {club.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-gold font-bold">
                  <span>NEET Activity</span>
                  <span>★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#001b44] via-[#092556] to-[#00122e] text-white p-8 sm:p-12 text-center space-y-4 border border-white/10 shadow-xl">
          <h3 className="font-berlin text-2xl sm:text-4xl text-white">
            Join the Vibrant NEET Student Community
          </h3>
          <p className="text-xs sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Admissions are open for Play Group to Matric. Give your child a complete educational journey filled with learning, sports, and leadership.
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
