"use client";
import { useState } from "react";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";

const SubMenu = ({ item, handleClose }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const smoothDropdown = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.25, ease: [0.33, 1, 0.68, 1] },
    },
    visible: {
      height: "fit-content",
      opacity: 1,
      transition: { duration: 0.25, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <div className="border-b border-white/10 last:border-b-0">
      {item.content ? (
        <div
          onClick={showSubnav}
          className="transition-colors duration-150 flex justify-between items-center text-[16px] sm:text-[17px] font-medium text-[#f1ede2] py-3.5 px-1 hover:text-gold cursor-pointer select-none"
        >
          <span>{item.title}</span>
          <div
            className={`transition-transform duration-300 text-gold/80 ${
              subnav ? "rotate-180" : ""
            }`}
          >
            <IoChevronDown size={17} />
          </div>
        </div>
      ) : (
        <Link
          onClick={handleClose}
          href={item.slug}
          passHref
          target={item.blank ? "_blank" : "_self"}
          rel={item.blank ? "noopener noreferrer" : ""}
          className="transition-colors duration-150 flex justify-between items-center text-[16px] sm:text-[17px] font-medium text-[#f1ede2] py-3.5 px-1 hover:text-gold cursor-pointer"
        >
          <span>{item.title}</span>
        </Link>
      )}
      <motion.div
        initial="hidden"
        animate={subnav ? "visible" : "hidden"}
        variants={smoothDropdown}
        className="overflow-hidden flex flex-col bg-black/25 rounded-lg my-1.5"
      >
        {subnav &&
          item.content.map((subItem, index) => (
            <Link
              href={subItem.slug}
              passHref
              onClick={handleClose}
              key={index}
              className="flex items-center text-white/80 hover:text-white transition-colors py-2 px-3 hover:bg-white/5 rounded-md"
            >
              <span className="text-gold mr-2.5 text-xs">◆</span>
              <span className="text-sm font-medium">{subItem.title}</span>
            </Link>
          ))}
      </motion.div>
    </div>
  );
};

export default function SidebarComp({ data, handleClose }) {
  return (
    <div className="flex flex-col flex-1 justify-between">
      <div className="flex flex-col divide-y divide-white/10">
        {data.map((item, index) => (
          <SubMenu handleClose={handleClose} item={item} key={index} />
        ))}
      </div>
      <div className="pt-6 pb-2 mt-auto">
        <Link
          onClick={handleClose}
          href={"/OnlineAdmission"}
          name="admission link"
          className="block w-full"
        >
          <button className="w-full py-3.5 px-5 rounded-lg bg-[#0a274c] hover:bg-[#103a70] border border-[#1b4a85] text-[#f1ede2] font-semibold text-[16px] text-center shadow-md transition-all duration-200 active:scale-[0.98]">
            Apply for Admission
          </button>
        </Link>
      </div>
    </div>
  );
}
