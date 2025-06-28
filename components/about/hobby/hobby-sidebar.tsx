import { NextPage } from "next";
import Image from "next/image";
import markdown from "@/public/markdown.svg";
import { DropdownArrow } from "@/components/dropdown-arrow";
import { motion } from "framer-motion";
import { useState } from "react";

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

const HobbySidebar: NextPage<{
  setContentTab: (key: string, category: string) => void;
}> = ({ setContentTab }) => {
  const [isOpen, setIsOpen] = useState<string>("sports");

  const toggleIsOpen = (key: string) => {
    setIsOpen((prev) => (prev === key ? prev : key));
    setContentTab(key, "hobbies");
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
        className="flex gap-3 items-center"
        key={10}
        variants={listItemVariants}
        onClick={() => toggleIsOpen("sports")}
      >
        <DropdownArrow isHidden />
        <div className="flex gap-2 items-center">
          <Image src={markdown} alt="markdown" className="shrink-0" />

          <p
            className={`font-light ${
              isOpen === "sports" ? "text-secondary-400" : ""
            }`}
          >
            sports
          </p>
        </div>
      </motion.button>

      <motion.button
        className="flex gap-3 items-center"
        key={11}
        variants={listItemVariants}
        onClick={() => toggleIsOpen("music")}
      >
        <DropdownArrow isHidden />
        <div className="flex gap-2 items-center">
          <Image src={markdown} alt="markdown" className="shrink-0" />
          <p
            className={`font-light ${
              isOpen === "music" ? "text-secondary-400" : ""
            }`}
          >
            music
          </p>
        </div>
      </motion.button>

      <motion.button
        className="flex gap-3 items-center"
        key={12}
        variants={listItemVariants}
        onClick={() => toggleIsOpen("movies")}
      >
        <DropdownArrow isHidden />
        <div className="flex gap-2 items-center">
          <Image src={markdown} alt="markdown" className="shrink-0" />
          <p
            className={`font-light ${
              isOpen === "movies" ? "text-secondary-400" : ""
            }`}
          >
            movies
          </p>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default HobbySidebar;
