import HeroHeader from "@/components/HeroHeader";
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe, FaGraduationCap, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <main>
      <HeroHeader
        title={"Contact Us"}
        subtitle="Admissions & General Enquiries"
        tagline="Let's Connect"
        description="For admissions, school information, appointments and general enquiries, get in touch with NEET School System, Gujranwala."
      />

      <section className="maxWSec px-4 sm:px-8 md:px-12 py-10 sm:py-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 p-6 sm:p-10 bg-white shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-main uppercase tracking-wider">Campus Information</span>
            <h2 className="h3 text-dark">NEET School System</h2>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-grayD">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-[#001b44] text-gold flex-shrink-0 mt-0.5">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-bold text-dark text-sm uppercase tracking-wider">Address</p>
                <p className="text-gray leading-relaxed">
                  Near Sialkot Bypass, Model Sialkot Road, Gujranwala, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-[#001b44] text-gold flex-shrink-0 mt-0.5">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-bold text-dark text-sm uppercase tracking-wider">Phone & Mobile</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-0.5">
                  <a href="tel:03007441617" className="text-main font-semibold hover:underline">
                    0300-7441617
                  </a>
                  <span className="text-slate-300">·</span>
                  <a href="tel:0553201617" className="text-main font-semibold hover:underline">
                    055-3201617
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-[#001b44] text-gold flex-shrink-0 mt-0.5">
                <FaGlobe />
              </div>
              <div>
                <p className="font-bold text-dark text-sm uppercase tracking-wider">Website</p>
                <a
                  href="https://www.neetschoolsystem.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main font-semibold hover:underline"
                >
                  www.neetschoolsystem.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-[#001b44] text-gold flex-shrink-0 mt-0.5">
                <FaGraduationCap />
              </div>
              <div>
                <p className="font-bold text-dark text-sm uppercase tracking-wider">Admissions</p>
                <p className="text-gray">
                  Play Group to Matric — apply anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#001b44] to-[#0a2558] text-light p-6 sm:p-10 flex flex-col justify-between shadow-xl border border-white/10 space-y-6">
          <div>
            <span className="text-xs font-bold text-gold uppercase tracking-widest">Admissions & Parent Help</span>
            <h2 className="font-berlin text-2xl sm:text-3xl text-white mt-1 mb-3">
              We&apos;re Here to Guide You
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              Parents are welcome to visit our campus or contact our administration
              for admissions guidance, class placement details, registration forms,
              and fee structure. Our admission team is happy to assist you every step
              of the way.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
            <p className="text-xs font-bold uppercase tracking-wider text-gold mb-1">Campus Timings</p>
            <p className="text-sm text-white/90">Monday – Saturday: 8:00 AM – 2:00 PM</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/OnlineAdmission"
              className="rounded-xl bg-gold hover:bg-main px-6 py-3.5 font-bold text-dark text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Apply Online</span>
              <span>→</span>
            </a>
            <a
              href="tel:03007441617"
              className="rounded-xl border border-white/30 hover:bg-white/10 px-6 py-3.5 font-semibold text-white text-sm transition-all"
            >
              Call 0300-7441617
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;

