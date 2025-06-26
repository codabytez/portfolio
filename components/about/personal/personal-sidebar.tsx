import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import orangeFolder from "@/public/orange-folder.svg";
import greenFolder from "@/public/green-folder.svg";
import blueFolder from "@/public/blue-folder.svg";
import { DropdownArrow } from "@/components/dropdown-arrow";
import { motion } from "framer-motion";

const listItemVariants = {
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

const PersonalSidebar: NextPage<{
  setContentTab: (key: string, category: string) => void;
}> = ({ setContentTab }) => {
  const [isOpen, setIsOpen] = useState<string>("bio");

  const toggleIsOpen = (key: string) => {
    setIsOpen((prev) => (prev === key ? prev : key));
    setContentTab(key, "personal-info");
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{ initial: {}, animate: {}, exit: {} }}
      transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
      className="flex flex-col gap-2 border-t border-line pt-5 pb-7 px-4"
    >
      <motion.button
        className="flex gap-3 items-center w-max group"
        onClick={() => toggleIsOpen("bio")}
        key={"bio"}
        variants={listItemVariants}
      >
        <DropdownArrow isOpen={isOpen === "bio"} />
        <div className="flex gap-2 items-center">
          <Image src={orangeFolder} alt="orange_folder" className="shrink-0" />
          <p
            className={`font-light group-hover:text-secondary-400 group-hover:opacity-70 transition-all duration-300 ${
              isOpen === "bio" ? "text-secondary-400" : ""
            }`}
          >
            bio
          </p>
        </div>
      </motion.button>

      <motion.button
        className="flex gap-3 items-center w-max group"
        onClick={() => toggleIsOpen("interests")}
        key={"interests"}
        variants={listItemVariants}
      >
        <DropdownArrow isOpen={isOpen === "interests"} />
        <div className="flex gap-2 items-center">
          <Image src={greenFolder} alt="green_folder" className="shrink-0" />
          <p
            className={`font-light group-hover:text-secondary-400 group-hover:opacity-70 transition-all duration-300 ${
              isOpen === "interests" ? "text-secondary-400" : ""
            }`}
          >
            interests
          </p>
        </div>
      </motion.button>

      <motion.button
        className="flex gap-3 items-center w-max group"
        key={"education"}
        variants={listItemVariants}
        onClick={() => toggleIsOpen("education")}
      >
        <DropdownArrow isOpen={isOpen === "education"} />
        <div className="flex gap-2 items-center">
          <Image src={blueFolder} alt="blue_folder" className="shrink-0" />
          <p
            className={`font-light group-hover:text-secondary-400 group-hover:opacity-70 transition-all duration-300 ${
              isOpen === "education" ? "text-secondary-400" : ""
            }`}
          >
            education
          </p>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default PersonalSidebar;
