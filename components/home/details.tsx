"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import TypingAnimation from "./typing-animation";
import DiscordPresence from "../discord-presence";
import Button from "../UI/button";

const Details: NextPage = () => {
  return (
    <div
      className="flex flex-col gap-10 sm:gap-14 h-full justify-center"
      suppressHydrationWarning
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <p className="font-medium text-body text-[#E5E9F0]">
          Hello World!! I am
        </p>
        <motion.h1
          className="text-[#E5E9F0] text-headline font-light my-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          Obinna Chidi
        </motion.h1>
        <motion.h3
          className="text-secondary-300 text-xl sm:text-2xl lg:text-subheadline font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <TypingAnimation text="> Front-end developer" />
        </motion.h3>

        {/* CTA Button here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          className="mt-6"
        >
          <Button
            variant="primary"
            href="mailto:chidiobinna0001@gmail.com?subject=Let's work together&body=Hi Obinna, I'd like to discuss a project opportunity..."
            target="_blank"
          >
            Hire me
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1 }}
          className="hidden lg:block"
        >
          &#47;&#47; complete the game to continue
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.2 }}
          className="text-code-snippet lg:text-base"
        >
          &#47;&#47; find my profile on Github:
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.4 }}
          className="text-code-snippet lg:text-base font-medium"
        >
          <span className="text-secondary-300">const</span>{" "}
          <span className="text-accent-200">githubLink</span>{" "}
          <span className="text-secondary-400">=</span>{" "}
          <span className="text-[#E99287]">
            <TypingAnimation text='"https://github.com/codabytez"' />
          </span>
        </motion.p>
      </motion.div>

      <DiscordPresence />
    </div>
  );
};

export default Details;
