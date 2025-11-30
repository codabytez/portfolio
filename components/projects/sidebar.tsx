"use client";
import { NextPage } from "next";
import Image from "next/image";
import CustomCheckbox from "../UI/checkbox";
import react from "@/public/react.svg";
import html from "@/public/html.svg";
import css from "@/public/css.svg";
import vue from "@/public/vue.svg";
import flutter from "@/public/flutter.svg";
import tailwind from "@/public/tailwind.svg";
import nextjs from "@/public/nextjs.svg";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { DropdownArrowFill } from "../dropdown-arrow";

// Utility to normalize tech names
const normalizeTech = (name: string) =>
  name.toLowerCase().replace(/[\.\s\-]/g, "");

// Project types array now uses normalized keys and canonical names
const projectTypes = [
  { key: "nextjs", name: "Next.js", icon: nextjs },
  { key: "react", name: "React", icon: react },
  { key: "html", name: "HTML", icon: html },
  { key: "css", name: "CSS", icon: css },
  { key: "vue", name: "Vue", icon: vue },
  { key: "flutter", name: "Flutter", icon: flutter },
  { key: "tailwind", name: "Tailwind", icon: tailwind },
];

const listItemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const ProjectSidebar: NextPage<{
  handleSelect: (normalizedKey: string) => void;
  selectedTech: string[]; // This should hold normalized keys like "nextjs"
}> = ({ handleSelect, selectedTech }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <motion.div className="w-full lg:w-[310px] lg:border-r lg:border-line lg:h-full flex shrink-0">
      <div className="flex flex-col h-full flex-1">
        <button
          className="h-10 flex gap-3 px-3 items-center w-full shrink-0 bg-line hover:opacity-60 lg:bg-transparent"
          onClick={toggleIsOpen}
        >
          <DropdownArrowFill isOpen={isOpen} />
          <p className="text-secondary-400 font-light">projects</p>
        </button>

        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{ initial: {}, animate: {}, exit: {} }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
          className={`flex flex-col gap-4 border-t border-line ${
            isOpen ? "pt-5 pb-7 px-4" : ""
          }`}
        >
          {isOpen &&
            projectTypes.map(({ key, name, icon }) => {
              const isSelected = selectedTech
                .map(normalizeTech)
                .includes(normalizeTech(key));

              return (
                <motion.div
                  variants={listItemVariants}
                  key={key}
                  className="flex gap-6 items-center"
                >
                  <CustomCheckbox
                    onChange={() => handleSelect(normalizeTech(key))}
                  />
                  <div
                    className={`flex gap-2 items-center ${
                      isSelected ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <Image src={icon} alt={name} className="shrink-0" />
                    <p className={isSelected ? "text-secondary-400" : ""}>
                      {name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectSidebar;
