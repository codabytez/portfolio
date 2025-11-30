"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";

const ComingSoon: NextPage = () => (
  <motion.div
    className="flex flex-col items-center justify-center h-full w-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      className="mb-8"
    >
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-32 text-accent-300"
      >
        <motion.path
          d="M64 116C94.9706 116 120 90.9706 120 60C120 29.0294 94.9706 4 64 4C33.0294 4 8 29.0294 8 60C8 90.9706 33.0294 116 64 116Z"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.path
          d="M92 60H64"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.path
          d="M36 60H64"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </svg>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
      className="text-accent-200 text-subheadline lg:text-headline font-bold mb-4 text-center"
    >
      Coming Soon
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex gap-4 mb-8"
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.5, 1],
            transition: {
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
              delay: 0.6 + index * 0.2,
            },
          }}
          className="w-4 h-4 bg-gradient-to-r from-accent-200 to-accent-400 rounded-full"
        />
      ))}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
      className="text-secondary-100 lg:text-body text-center max-w-lg px-4"
    >
      We&apos;re crafting a mind-blowing experience for you. Stay tuned for
      updates and get ready to be amazed!
    </motion.div>
  </motion.div>
);

export default ComingSoon;
