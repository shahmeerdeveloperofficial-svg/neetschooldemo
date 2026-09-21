"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaSmile,
  FaCompass,
  FaComments,
  FaCalendarCheck,
  FaUserFriends,
  FaChartBar,
  FaHandsHelping,
  FaGraduationCap,
} from "react-icons/fa";

const studentLife = [
  {
    title: "Reading & Expression",
    desc: "Developing language, confidence, communication and public presentation skills.",
    image: "/hero4.jpg",
    imagePos: "object-center",
    tag: "Expression",
  },
  {
    title: "Sports & Wellbeing",
    desc: "Promoting physical activity, sportsmanship, teamwork, discipline and healthy routines.",
    image: "/hero5.jpg",
    imagePos: "object-center",
    tag: "Physical Life",
  },
  {
    title: "Creative Activities",
    desc: "Encouraging imagination through art, design, interactive projects, and creative expression.",
    image: "/hero6.jpg",
    imagePos: "object-center",
    tag: "Creativity",
  },
  {
    title: "Competitions & Events",
    desc: "Opportunities to participate, perform, compete and build unshakeable self-confidence.",
    image: "/hero7.jpg",
    imagePos: "object-center",
    tag: "Excellence",
  },
  {
    title: "Assemblies & Values",
    desc: "Building communication skills, moral discipline, and ethical awareness through student participation.",
    image: "/hero.jpg",
    imagePos: "object-center",
    tag: "Leadership",
  },
  {
    title: "Educational Activities",
    desc: "Connecting classroom concepts with practical experience, experiments, and real-world learning.",
    image: "/hero9.jpg",
    imagePos: "object-center",
    tag: "Academics",
  },
];

const characterValues = [
  {
    title: "Respect",
    desc: "For parents, teachers, elders, classmates, community, and society.",
    icon: <FaHeart className="text-xl text-gold" />,
  },
  {
    title: "Honesty",
    desc: "Developing truthfulness, sincerity, and moral integrity in everyday life.",
    icon: <FaCompass className="text-xl text-gold" />,
  },
  {
    title: "Responsibility",
    desc: "Learning to take ownership of actions, studies, and civic duties.",
    icon: <FaAward className="text-xl text-gold" />,
  },
  {
    title: "Discipline",
    desc: "Developing positive habits, punctuality, self-control and steadfast commitment.",
    icon: <FaShieldAlt className="text-xl text-gold" />,
  },
  {
    title: "Kindness",
    desc: "Encouraging compassion, empathy, cooperation, and consideration for others.",
    icon: <FaSmile className="text-xl text-gold" />,
  },
  {
    title: "Leadership",
    desc: "Teaching students to lead through responsibility, service, and good example.",
    icon: <FaUsers className="text-xl text-gold" />,
  },
];

const parentPartnership = [
  {
    title: "Regular Parent Communication",
    desc: "Ongoing dialogue through notifications, direct contact, and timely notices.",
    icon: <FaComments className="text-lg text-gold" />,
  },
  {
    title: "Academic Progress Updates",
    desc: "Comprehensive feedback and reports on classroom work, tests, and assessments.",
    icon: <FaChartBar className="text-lg text-gold" />,
  },
  {
    title: "Parent–Teacher Meetings",
    desc: "Structured one-on-one sessions to review growth, strengths, and goals.",
    icon: <FaUserFriends className="text-lg text-gold" />,
  },
  {
    title: "Attendance Monitoring",
    desc: "Strict tracking of daily attendance and punctuality habits.",
    icon: <FaCalendarCheck className="text-lg text-gold" />,
  },
  {
    title: "Guidance on Student Development",
    desc: "Collaborative strategies to help children build positive study and life habits.",
    icon: <FaHandsHelping className="text-lg text-gold" />,
  },
  {
    title: "Participation in School Activities",
    desc: "Welcoming parents to celebrate milestones, exhibitions, and annual events.",
    icon: <FaGraduationCap className="text-lg text-gold" />,
  },
];

export default function CharacterStudentLife() {
  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Student Life Section */}
      <section id="StudentLife" className="maxWSec px-4 sm:px-8 md:px-12 flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs tracking-wider uppercase">
            A School Experience Beyond the Classroom
          </div>
          <h2 className="h2 text-dark">
            Student Life at <span className="text-main">NEET School System</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray leading-relaxed">
            School life is a balanced combination of learning, participation,
            friendship, responsibility, creativity and healthy activity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentLife.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#001738]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover ${item.imagePos || "object-top"} group-hover:scale-105 transition-transform duration-500`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur text-gold text-xs font-bold">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-berlin text-xl font-bold text-dark mb-2 group-hover:text-main transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-main font-semibold">
                  <Link href="/SocietyAndClubs" className="hover:underline flex items-center gap-1">
                    <span>Learn More</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Character Building Section */}
      <section className="bg-gradient-to-b from-[#f7faf8] to-white py-12 sm:py-16 border-y border-slate-200/80">
        <div className="maxWSec px-4 sm:px-8 md:px-12 flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sec/10 text-sec font-bold text-xs tracking-wider uppercase">
              Building Character for Life
            </div>
            <h2 className="h2 text-dark">
              Character <span className="text-main">& Islamic Values</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray leading-relaxed">
              We want our students to become not only successful learners but also
              good human beings, respectful children, and responsible citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {characterValues.map((val, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-gold/60 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#001b44] text-gold flex-shrink-0 shadow-sm">
                  {val.icon}
                </div>
                <div>
                  <h3 className="font-berlin text-lg sm:text-xl font-bold text-dark mb-1">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Partnership Section */}
      <section className="maxWSec px-4 sm:px-8 md:px-12 flex flex-col gap-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#001b44] via-[#082352] to-[#00122e] text-white p-6 sm:p-10 lg:p-14 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_80%,#d7a51b_0,transparent_50%)]"></div>

          <div className="relative z-10 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gold uppercase">
                Collaboration For Student Success
              </span>
              <h3 className="font-berlin text-2xl sm:text-4xl text-white">
                School & Parents — Partners in Every Child&apos;s Journey
              </h3>
              <p className="text-xs sm:text-base text-white/85 leading-relaxed">
                A child&apos;s education becomes stronger when school and family work
                together. Together, we help every child grow academically,
                morally, and socially.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {parentPartnership.map((partner, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur border border-white/15 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 rounded-lg bg-white/15">
                        {partner.icon}
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {partner.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      {partner.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link href="/ParentingWorkshop">
                <button className="px-6 py-3 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm shadow-md transition-all active:scale-95">
                  Learn About Parent Workshops & Meetings →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
