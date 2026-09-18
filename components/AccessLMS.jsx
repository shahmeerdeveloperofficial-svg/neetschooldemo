import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const AccessLMS = () => {
  return (
    <section id="LMS" className="maxWSec w-full px-4 sm:px-8 md:px-12 py-8 sm:py-12 flex">
      <div className="w-full flex bg-main/10 rounded-2xl sm:rounded-3xl flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 flex flex-col justify-center p-5 sm:p-8 md:p-10 gap-3 sm:gap-4">
          <h2 className="h2">
            Admissions and <br />
            <span className="text-main">Parent Support</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray leading-relaxed max-w-[50ch] mb-2 sm:mb-4">
            Need help with admission, class information, or general school
            guidance? Reach out directly and our team will help you with the
            next step.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4">
            <a href="/OnlineAdmission">
              <Button>
                <span>Open Admission Form</span>
                <svg
                  className="h-auto w-4"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                    fill="#fff"
                  />
                </svg>
              </Button>
            </a>

            <a href="tel:+923007441617">
              <Button
                btnType="custom"
                className="bg-black text-white border-black hover:opacity-90"
              >
                <span>Call +92 300 7441617</span>
                <svg
                  className="h-auto w-4"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                    fill="#fff"
                  />
                </svg>
              </Button>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center p-4">
          <Image
            src={"/neetlogo.jpeg"}
            width={1000}
            height={600}
            alt="NEET School System logo"
            className="w-full max-w-[280px] sm:max-w-md rounded-2xl sm:rounded-3xl object-contain p-2 sm:p-6"
          />
        </div>
      </div>
    </section>
  );
};

export default AccessLMS;
