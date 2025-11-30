"use client";
import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { DropdownArrowFill } from "../dropdown-arrow";
import externalLink from "@/public/external-link.svg";
import mail from "@/public/mail.svg";
import Link from "next/link";
import { SOCIALS } from "@/constants";
import { motion } from "framer-motion";

const links = [
  { href: SOCIALS.INSTAGRAM, text: "instagram-account" },
  { href: SOCIALS.BENTO, text: "bento-profile" },
  { href: SOCIALS.WAKATIME, text: "wakatime-profile" },
];

const sidebarVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const contactMeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

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

const ContactSidebar: NextPage = () => {
  const [isOpen, setIsOpen] = useState<string>("contact");
  const toggleIsOpen = (key: string) => {
    setIsOpen((prev) => (prev === key ? "" : key));
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full lg:w-[310px] lg:border-r border-line lg:h-full flex flex-col gap-1 lg:gap-0 shrink-0"
    >
      <motion.div
        variants={contactMeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <button
          className="h-10 flex gap-3 px-3 items-center w-full shrink-0 bg-line hover:opacity-60 lg:bg-transparent"
          key="contact"
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
          className="flex flex-col gap-2 transition-all duration-300"
        >
          <Link
            href={"mailto:" + SOCIALS.EMAIL}
            className="flex gap-2 items-center hover:text-secondary-400 border-t border-line p-4"
          >
            <Image src={mail} alt="mail" className="shrink-0" />
            send-mail
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <button
          className="h-10 flex gap-3 px-3 items-center border-y border-line w-full shrink-0 bg-line hover:opacity-60 lg:bg-transparent"
          onClick={() => toggleIsOpen("findMe")}
          key="findMe"
        >
          <DropdownArrowFill isOpen={isOpen === "findMe"} />
          <p className="text-secondary-400 font-light">find-me-also-on</p>
        </button>

        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen === "findMe" ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen === "findMe" && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{ initial: {}, animate: {}, exit: {} }}
              transition={{ staggerChildren: 0.3 }}
              className="flex flex-col gap-3 pt-5 pb-7 px-4"
            >
              {links.map(({ href, text }) => (
                <motion.div key={href} variants={listItemVariants}>
                  <Link
                    href={href}
                    target="_blank"
                    className="flex gap-2 items-center hover:text-secondary-400 w-max"
                  >
                    <Image
                      src={externalLink}
                      alt="external link"
                      className="shrink-0"
                    />
                    {text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSidebar;
