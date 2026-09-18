"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import LinkEffect from "./ui/LinkEffect";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Links = [
    {
      title: "Contact & Campus",
      content: [
        { title: "Near Sialkot Bypass, Model Sialkot Road, Gujranwala", src: "/ContactUs" },
        { title: "Phone: 0300-7441617", src: "tel:03007441617", blank: true },
        { title: "Landline: 055-3201617", src: "tel:0553201617", blank: true },
        { title: "Web: www.neetschoolsystem.com", src: "https://www.neetschoolsystem.com", blank: true },
      ],
    },
    {
      title: "Explore",
      content: [
        { title: "About NEET", src: "/AboutUs" },
        { title: "Chairman's Message", src: "/ChairmanMessage" },
        { title: "Our Philosophy", src: "/OurPhilosophy" },
        { title: "Curriculum & Programs", src: "/Curriculum/EarlyYears" },
        { title: "Careers at NEET", src: "/Careers" },
      ],
    },
    {
      title: "Admissions",
      content: [
        { title: "Apply Online (PG to Matric)", src: "/OnlineAdmission" },
        { title: "Registration Process", src: "/StudentLife/OLevel" },
        { title: "Parenting Support", src: "/ParentingWorkshop" },
        { title: "Contact Admissions Desk", src: "/ContactUs" },
      ],
    },
  ];

  return (
    <footer
      id="Contact"
      className="w-full relative overflow-hidden bg-white"
      style={{ clipPath: "inset(2px 0% 0% 0%)" }}
    >
      <div
        style={{ height: contentHeight }}
        className="pointer-events-none w-full relative z-20 min-h-16"
      >
        <div className="h-16 bg-white rounded-[0_0_2rem_2rem] sm:rounded-[0_0_5rem_5rem] absolute inset-x-0 top-0"></div>
      </div>

      <div
        ref={contentRef}
        className="pt-16 bg-[#001b44] text-light w-full fixed -bottom-0.5 z-10"
      >
        <div className="maxWSec px-4 sm:px-8 md:px-12 py-6 sm:py-12 gap-8 sm:gap-12 flex max-sm:flex-col justify-between w-full">
          <div className="flex flex-col gap-4 max-sm:items-center max-sm:text-center sm:max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-gold text-2xl">★</span>
              <span className="font-serif font-bold text-xl sm:text-2xl text-white tracking-wide">NEET School System</span>
            </Link>
            <p className="text-xs sm:text-sm text-gold italic font-serif">
              Learn Today. Lead Tomorrow.
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              Where Learning Becomes Leadership. Knowledge · Character · Discipline · Creativity · Leadership · Excellence.
            </p>

            <Link
              href="/OnlineAdmission"
              className="mt-2 inline-flex justify-center items-center rounded-xl bg-gold px-5 py-2.5 text-xs sm:text-sm font-bold text-dark hover:bg-main hover:text-white transition"
            >
              Apply for Admission
            </Link>
          </div>

          <div className="flex max-sm:flex-col items-start flex-grow sm:max-w-[70%] gap-6 sm:gap-8">
            {Links.map((item, index) => (
              <div key={index} className="w-full sm:flex-1 text-gray max-sm:text-left">
                <h5 className="font-berlin font-medium text-lg sm:text-xl text-white mb-2">
                  {item.title}
                </h5>
                <div className="flex flex-col gap-1.5">
                  {item.content.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.src}
                      target={subItem.blank ? "_blank" : "_self"}
                      rel={subItem.blank ? "noopener noreferrer" : ""}
                      className="text-xs sm:text-sm text-white/80 hover:text-gold transition-colors"
                    >
                      <LinkEffect noicon text={subItem.title} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t py-4 border-white/10">
          <div
            id="social"
            className="maxWSec max-sm:pb-8 text-xs sm:text-sm flex flex-wrap justify-between items-center px-4 max-sm:flex-col max-sm:gap-4 max-sm:text-center text-white/70"
          >
            <div>© 2026 NEET School System, Gujranwala. All rights reserved.</div>

            <div className="flex gap-4 items-center text-lg text-gold">
              <Link href="/" target="_blank" aria-label="LinkedIn" className="hover:text-white"><FaLinkedin /></Link>
              <Link href="/ContactUs" aria-label="Facebook" className="hover:text-white"><FaFacebook /></Link>
              <Link href="/ContactUs" aria-label="Instagram" className="hover:text-white"><FaInstagram /></Link>
              <Link href="/ContactUs" aria-label="X Twitter" className="hover:text-white"><FaXTwitter /></Link>
              <Link href="/ContactUs" aria-label="YouTube" className="hover:text-white"><FaYoutube /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
