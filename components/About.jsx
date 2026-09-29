"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaMosque,
  FaShieldAlt,
  FaLaptopCode,
  FaFutbol,
  FaHandshake,
  FaChartLine,
  FaBookOpen,
} from "react-icons/fa";

const features = [
  {
    title: "Strong Academic Foundation",
    color: "bg-[#0f4d36]",
    icon: <FaGraduationCap className="text-xl text-gold" />,
    desc: "We focus on concept clarity, understanding, practice and continuous improvement rather than relying only on rote memorization.",
  },
  {
    title: "Experienced & Dedicated Teachers",
    color: "bg-[#d97706]",
    icon: <FaChalkboardTeacher className="text-xl text-gold" />,
    desc: "Our teachers are committed to personal attention, effective instruction, guidance and encouragement for every student.",
  },
  {
    title: "Character & Moral Development",
    color: "bg-[#062319]",
    icon: <FaMosque className="text-xl text-gold" />,
    desc: "Academic education is supported by a strong emphasis on manners, honesty, responsibility, respect and Islamic values.",
  },
  {
    title: "Safe & Supportive Environment",
    color: "bg-[#0d3f2d]",
    icon: <FaShieldAlt className="text-xl text-gold" />,
    desc: "A secure, respectful, child-friendly atmosphere where students feel confident to learn, speak up and take active part.",
  },
  {
    title: "Modern Learning Approach",
    color: "bg-[#b45309]",
    icon: <FaLaptopCode className="text-xl text-gold" />,
    desc: "Students build communication, creativity, critical thinking, collaboration and 21st-century problem-solving skills.",
  },
  {
    title: "Co-Curricular Activities",
    color: "bg-[#16654a]",
    icon: <FaFutbol className="text-xl text-gold" />,
    desc: "Sports, presentations, creative activities, assemblies, competitions and events beyond the traditional classroom.",
  },
  {
    title: "Parent–Teacher Partnership",
    color: "bg-[#92400e]",
    icon: <FaHandshake className="text-xl text-gold" />,
    desc: "Regular communication and scheduled meetings help us understand each student's needs and support their progress.",
  },
  {
    title: "Student Progress Monitoring",
    color: "bg-[#042f20]",
    icon: <FaChartLine className="text-xl text-gold" />,
    desc: "Regular assessment and constructive feedback identify individual strengths and areas for additional focused support.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

function Card({ color, title, desc, icon }) {
  return (
    <div className="flex-1 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-5 sm:p-6 bg-white border border-slate-200/90 hover:border-gold/60 group flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-[#001b44]/5 group-hover:bg-[#001b44] transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-base sm:text-lg font-berlin font-bold text-dark group-hover:text-main transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-gray text-xs sm:text-sm md:text-[15px] leading-relaxed">
          {desc}
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-gold font-medium transition-colors">
        <span>NEET Advantage</span>
        <span>✓</span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="About" className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 flex gap-8 sm:gap-12 flex-col">
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs tracking-wider uppercase">
          What sets NEET School System apart
        </div>
        <h2 className="h2 text-dark">
          Why Families Choose <span className="text-main">NEET School System</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray font-normal">
          A value-driven school experience in Gujranwala designed for meaningful
          learning, individual care, and continuous progress.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="flex"
          >
            <Card {...feature} />
          </motion.div>
        ))}
      </div>

      {/* Official Campus & Vision Showcase Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-[#001b44] via-[#092556] to-[#00122e] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold font-bold text-xs uppercase tracking-wider">
            Campus &amp; Islamic Ethos
          </div>
          <div className="space-y-1">
            <p className="font-serif text-xl sm:text-2xl text-gold font-bold">
              وَقُل رَّبِّ زِدْنِي عِلْمًا
            </p>
            <p className="text-xs sm:text-sm text-white/80 italic font-serif">
              &ldquo;O my Lord! Increase me in knowledge.&rdquo; — Surah Taha (20:114)
            </p>
          </div>
          <h3 className="font-berlin text-2xl sm:text-4xl text-white leading-tight">
            Learn Today, Lead Tomorrow <br />
            <span className="text-gold">Building Futures, Inspiring Excellence</span>
          </h3>
          <p className="text-xs sm:text-base text-white/85 leading-relaxed">
            Located on <strong>Main Sialkot Road, Gujranwala</strong> (Opposite Resto Fast Food, Near Sheikh Saddiq Eye Hospital), our purpose-built campus provides a secure, disciplined, and nurturing environment from Play Group to Matric.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/AboutUs"
              className="px-6 py-3 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm shadow-md transition-all active:scale-95"
            >
              Learn More About NEET →
            </Link>
            <Link
              href="/ContactUs"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/30 backdrop-blur transition-all"
            >
              Visit Our Campus
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-[#001738]">
            <Image
              src="/neet-campus-poster.jpg"
              alt="NEET School System Campus Building - Learn Today Lead Tomorrow - Surah Taha"
              fill
              className="object-contain bg-[#001738]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
