"use client";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaMosque,
  FaShieldAlt,
  FaLaptopCode,
  FaFutbol,
  FaHandshake,
  FaChartLine,
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
    </section>
  );
}
