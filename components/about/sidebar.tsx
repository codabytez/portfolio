"use client";
import { useState } from "react";
import { NextPage } from "next";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import terminal from "@/public/terminal.svg";
import bubble from "@/public/bubble.svg";
import console from "@/public/console.svg";
import { DropdownArrowFill } from "../dropdown-arrow";
import mail from "@/public/mail.svg";
import externalLink from "@/public/external-link.svg";
import Link from "next/link";
import { SOCIALS, spotifyPlaylists } from "@/constants";
import PersonalSidebar from "./personal/personal-sidebar";
import ProfSidebar from "./professional/prof-sidebar";
import HobbySidebar from "./hobby/hobby-sidebar";

const initialTabs = [
  { name: "professional-info", icon: terminal },
  { name: "personal-info", icon: bubble },
  { name: "hobbies", icon: console },
];

const sidebarVariants: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  },
};

const itemVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  },
};

const contentVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  },
};

const escapeRealityVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1], delay: 1.5 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  },
};

const contactMeVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 2,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  },
};

const listItemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  },
};

const AboutSidebar: NextPage<IAboutSidebarProps> = ({
  activeTab,
  setActiveTab,
  setContentTab,
}) => {
  const [isOpen, setIsOpen] = useState<string>("personal-info");

  const toggleOpen = (key: string) => {
    setIsOpen((prev) => (prev === key ? "" : key));
  };

  const handleTabClick = (tabName: string, defaultContent: string) => {
    setActiveTab(tabName);
    toggleOpen(tabName);
    setContentTab(defaultContent, tabName);
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full lg:w-[310px] border-r border-line lg:h-full flex transition-all duration-300 shrink-0"
    >
      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="hidden lg:block"
      >
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{ initial: {}, animate: {}, exit: {} }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
          className="w-[68px] flex flex-col gap-8 items-center border-r border-line h-full py-5 shrink-0"
        >
          {initialTabs.map(({ name, icon }) => (
            <motion.div key={name} variants={listItemVariants}>
              <button
                key={name}
                onClick={() =>
                  handleTabClick(
                    name,
                    name === "professional-info"
                      ? "experience"
                      : name === "hobbies"
                        ? "sports"
                        : "bio"
                  )
                }
                className={`${
                  activeTab === name ? "opacity-100" : "opacity-40"
                } hover:opacity-80`}
              >
                <Image src={icon} alt={name} className="shrink-0" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="flex flex-col h-full flex-1 gap-1 lg:gap-0">
        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="hidden lg:block"
        >
          <button
            className="h-10 flex gap-3 px-3 items-center w-full shrink-0 bg-line hover:opacity-60 lg:bg-transparent"
            onClick={() => toggleOpen(activeTab)}
            key={activeTab}
          >
            <DropdownArrowFill isOpen={isOpen === activeTab} />
            <p className="text-secondary-400 font-light">{activeTab}</p>
          </button>
          {isOpen === activeTab && (
            <AnimatePresence>
              {activeTab === "hobbies" ? (
                <motion.div
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: 1 }}
                >
                  <HobbySidebar setContentTab={setContentTab} />
                </motion.div>
              ) : activeTab === "professional-info" ? (
                <motion.div
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <ProfSidebar setContentTab={setContentTab} />
                </motion.div>
              ) : (
                <motion.div
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: 1 }}
                >
                  <PersonalSidebar setContentTab={setContentTab} />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:hidden"
        >
          <button
            className="h-10 flex gap-3 px-3 items-center border-y border-line w-full bg-line hover:opacity-60 lg:bg-transparent"
            onClick={() => {
              toggleOpen("personal-info");
              setActiveTab("personal-info");
              setContentTab("bio", "personal-info");
            }}
            key="personal-info"
          >
            <DropdownArrowFill isOpen={isOpen === "personal-info"} />
            <p className="text-secondary-400 font-light">personal-info</p>
          </button>

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen === "personal-info" ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen === "personal-info" && (
              <PersonalSidebar setContentTab={setContentTab} />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:hidden"
        >
          <button
            className="h-10 flex gap-3 px-3 items-center border-y border-line w-full bg-line hover:opacity-60 lg:bg-transparent"
            onClick={() => {
              toggleOpen("professional-info");
              setActiveTab("professional-info");
              setContentTab("experience", "professional-info");
            }}
            key="professional-info"
          >
            <DropdownArrowFill isOpen={isOpen === "professional-info"} />
            <p className="text-secondary-400 font-light">professional-info</p>
          </button>

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen === "professional-info" ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen === "professional-info" && (
              <ProfSidebar setContentTab={setContentTab} />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:hidden"
        >
          <button
            className="h-10 flex gap-3 px-3 items-center border-y border-line w-full bg-line hover:opacity-60 lg:bg-transparent"
            onClick={() => {
              toggleOpen("hobbies");
              setActiveTab("hobbies");
              setContentTab("sports", "hobbies");
            }}
            key="hobbies"
          >
            <DropdownArrowFill isOpen={isOpen === "hobbies"} />
            <p className="text-secondary-400 font-light">hobbies</p>
          </button>

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen === "hobbies" ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen === "hobbies" && (
              <HobbySidebar setContentTab={setContentTab} />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={escapeRealityVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <button
            className="h-10 flex gap-3 px-3 items-center border-y border-line w-full bg-line hover:opacity-60 lg:bg-transparent"
            onClick={() => toggleOpen("escapeReality")}
            key="escapeReality"
          >
            <DropdownArrowFill isOpen={isOpen === "escapeReality"} />
            <p className="text-secondary-400 font-light">escape-reality</p>
          </button>

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen === "escapeReality" ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen === "escapeReality" && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{ initial: {}, animate: {}, exit: {} }}
                transition={{ staggerChildren: 0.3 }}
                className={`flex flex-col gap-3 border-b border-line ${
                  isOpen === "escapeReality" ? "pt-5 pb-7 px-4" : "p-0"
                }`}
              >
                {spotifyPlaylists.map(({ name, url }) => (
                  <motion.div key={name} variants={listItemVariants}>
                    <Link
                      href={url}
                      target="_blank"
                      className="flex gap-2 items-center hover:text-secondary-400"
                    >
                      <Image
                        src={externalLink}
                        alt="external_link"
                        className="shrink-0"
                      />
                      {name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={contactMeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <button
            className="h-10 flex gap-3 px-3 items-center border-b border-line w-full bg-line hover:opacity-60 lg:bg-transparent"
            onClick={() => toggleOpen("contacts")}
            key="contacts"
          >
            <DropdownArrowFill isOpen />
            <p className="text-secondary-400 font-light">contacts</p>
          </button>

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2 transition-all duration-300 p-4"
          >
            <Link
              href={"mailto:" + SOCIALS.EMAIL}
              className="flex gap-2 items-center hover:text-secondary-400"
            >
              <Image src={mail} alt="mail" className="shrink-0" />
              send mail
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSidebar;
