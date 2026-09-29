import React from "react";
import Image from "next/image";
import HeroHeader from "@/components/HeroHeader";
import AdmissionForm from "@/components/AdmissionForm";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaFileAlt,
  FaUserCheck,
  FaComments,
  FaCheckCircle,
  FaAward,
  FaShieldAlt,
  FaLaptopCode,
} from "react-icons/fa";

const steps = [
  {
    num: "01",
    title: "Enquiry & Campus Visit",
    desc: "Call or visit our Gujranwala campus to learn about classes, syllabus, campus facilities, and admission timelines.",
    icon: <FaPhoneAlt className="text-gold" />,
  },
  {
    num: "02",
    title: "Registration Form",
    desc: "Complete the official admission registration form online (below) or collect the physical prospectus from our admissions desk.",
    icon: <FaFileAlt className="text-gold" />,
  },
  {
    num: "03",
    title: "Diagnostic Assessment",
    desc: "An age-appropriate, supportive assessment for class placement and baseline academic evaluation.",
    icon: <FaUserCheck className="text-gold" />,
  },
  {
    num: "04",
    title: "Parent Interaction",
    desc: "A brief meeting with school leadership to discuss student goals, school routines, and partnership expectations.",
    icon: <FaComments className="text-gold" />,
  },
  {
    num: "05",
    title: "Admission Confirmation",
    desc: "Submission of required documents and fee payment to secure your child's seat at NEET School System.",
    icon: <FaGraduationCap className="text-gold" />,
  },
];

const documents = [
  "2 Passport-size recent photographs of the student",
  "Copy of Student B-Form (NADRA) or Birth Certificate",
  "Copy of Father / Guardian CNIC",
  "Previous School Leaving Certificate (SLC) for Class 1 and above",
  "Latest Progress Report Card from previous school",
];

export default function OnlineAdmission() {
  return (
    <main className="bg-white text-dark">
      <HeroHeader
        title={"Admissions Open"}
        subtitle="Play Group to Matric (Classes 9–10) · Gujranwala"
        tagline="Your Child's Bright Future Begins Today"
        description="Choose an educational environment in Gujranwala where your child will learn with conceptual clarity, develop strong moral character, and lead with confidence."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 space-y-16">
        {/* Quick Contact & Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#001b44] text-white space-y-2 border border-white/10 shadow-md">
            <div className="flex items-center gap-2 text-gold text-lg font-bold">
              <FaGraduationCap />
              <span>Classes Offered</span>
            </div>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
              Preschool (PG, Nursery, Prep), Primary (1–5), Middle (6–8), and Secondary (9–10 Matric Science &amp; Arts).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#d7a51b] to-[#b88308] text-white space-y-2 shadow-md">
            <div className="flex items-center gap-2 text-white text-lg font-bold">
              <FaPhoneAlt />
              <span>Admissions Helpline</span>
            </div>
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
              Direct: <strong>0300-7441617</strong> · <strong>055-3201617</strong> for immediate assistance, prospectus &amp; inquiries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a2558] text-white space-y-2 border border-white/10 shadow-md">
            <div className="flex items-center gap-2 text-gold text-lg font-bold">
              <FaMapMarkerAlt />
              <span>Campus Location &amp; Hours</span>
            </div>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
              Near Sialkot Bypass, Model Sialkot Road, Gujranwala. Admissions Office Open Monday–Saturday: 8:00 AM – 2:00 PM.
            </p>
          </div>
        </div>

        {/* Official Admissions Prospectus & Highlights Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#001b44] via-[#092556] to-[#00122e] text-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/15">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold font-bold text-xs uppercase tracking-wider">
              Official Admissions Notice · Limited Seats
            </div>
            <h2 className="text-2xl sm:text-4xl font-berlin font-bold text-white leading-tight">
              School Open for Learning <br />
              <span className="text-gold">Play Group to Matric</span>
            </h2>
            <p className="text-xs sm:text-base text-white/90 leading-relaxed">
              A Better Education, A Brighter Future. Under the leadership of <strong>Sir Mujahid Ali Ansari (Chairman &amp; Principal)</strong>, NEET School System offers conceptual learning, moral discipline, and modern facilities for your child&apos;s complete success.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm font-medium">
                <FaAward className="text-gold flex-shrink-0" />
                <span>Qualified Faculty</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm font-medium">
                <FaShieldAlt className="text-gold flex-shrink-0" />
                <span>Safe Campus</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm font-medium">
                <FaLaptopCode className="text-gold flex-shrink-0" />
                <span>Smart Labs</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm font-medium">
                <FaCheckCircle className="text-gold flex-shrink-0" />
                <span>Activity-Based</span>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#form"
                className="px-6 py-3 rounded-xl bg-gold hover:bg-main text-dark font-bold text-sm shadow-lg transition-all duration-200"
              >
                Fill Admission Form ↓
              </a>
              <a
                href="tel:03007441617"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/30 transition-all duration-200"
              >
                Call: 0300-7441617
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-[#001738]">
              <Image
                src="/neet-admission-poster.jpg"
                alt="NEET School System - Admissions Open Play Group to Matric - Sir Mujahid Ali Ansari"
                fill
                className="object-contain bg-[#001738]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* 5-Step Admission Process Section */}
        <div id="steps" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 text-main font-bold text-xs uppercase tracking-wider">
              Simple &amp; Transparent
            </div>
            <h2 className="h2 text-dark">
              Our 5-Step <span className="text-main">Admission Process</span>
            </h2>
            <p className="text-sm sm:text-base text-gray leading-relaxed">
              We make the admission journey smooth, clear, and supportive for parents and students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-gold/60 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#001b44] text-white">
                      {step.icon}
                    </div>
                    <span className="font-berlin text-2xl font-bold text-slate-300 group-hover:text-gold transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-berlin font-bold text-dark mb-2 group-hover:text-main transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-main">
                  <span>Step {step.num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#f8fafc] to-[#eef4ff] border border-[#cbd5e1] space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#001b44] text-gold">
              <FaFileAlt />
            </span>
            <h3 className="font-berlin text-xl sm:text-2xl text-dark">
              Required Documents for Admission
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {documents.map((doc, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-dark shadow-2xs"
              >
                <FaCheckCircle className="text-gold flex-shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Online Admission Application Form */}
        <div id="form" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-berlin text-2xl sm:text-4xl text-dark">
              Online Admission Registration Form
            </h3>
            <p className="text-xs sm:text-sm text-gray">
              Please fill out the details below. Our admissions team will review your application and contact you promptly.
            </p>
          </div>

          <AdmissionForm />
        </div>
      </section>
    </main>
  );
}
