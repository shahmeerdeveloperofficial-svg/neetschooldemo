import React from "react";
import HeroHeader from "@/components/HeroHeader";
import AdmissionForm from "@/components/AdmissionForm";
import { FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

const OnlineAdmission = () => {
  return (
    <main>
      <HeroHeader
        title={"Online Admission"}
        subtitle="Admissions Open: Play Group to Matric"
        tagline="Your Child's Future Begins Today"
        description="Choose an environment where your child can learn with confidence, grow with character and lead with purpose at NEET School System, Gujranwala."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-[#062319] text-white space-y-2 border border-emerald-900/40">
            <div className="flex items-center gap-2 text-gold text-lg font-bold">
              <FaGraduationCap />
              <span>Classes Offered</span>
            </div>
            <p className="text-xs sm:text-sm text-white/85">
              Preschool (PG, Nursery, Prep), Primary (1–5), Middle (6–8), and Secondary (9–10 Matric).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#d97706] text-white space-y-2">
            <div className="flex items-center gap-2 text-white text-lg font-bold">
              <FaPhoneAlt />
              <span>Admissions Helpline</span>
            </div>
            <p className="text-xs sm:text-sm text-white/95">
              Call directly: 0300-7441617 · 055-3201617 for immediate assistance and appointment booking.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b3828] text-white space-y-2 border border-emerald-900/40">
            <div className="flex items-center gap-2 text-gold text-lg font-bold">
              <FaMapMarkerAlt />
              <span>Campus Visit</span>
            </div>
            <p className="text-xs sm:text-sm text-white/85">
              Near Sialkot Bypass, Model Sialkot Road, Gujranwala. Open Monday–Saturday: 8am–2pm.
            </p>
          </div>
        </div>

        <AdmissionForm />
      </section>
    </main>
  );
};

export default OnlineAdmission;

