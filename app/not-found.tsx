"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { PAGES } from "@/constants";
import Link from "next/link";

const NotFound: NextPage = () => (
  <motion.div
    className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-primary-100 to-primary-300 overflow-y-scroll py-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >
    <motion.div
      initial={{ rotate: -180 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      className="mb-8 flex justify-center items-center gap-5 px-4 w-full h-40 max-w-[550px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="flex-1 h-40 w-full text-accent-300"
        viewBox="0 0 178 207"
        fill="none"
      >
        <motion.path
          d="M103.247 168.453H0.621094V122.119L103.247 0.129883H152.347V124.747H177.796V168.453H152.347V206.35H103.247V168.453ZM103.247 124.747V60.9363L49.021 124.747H103.247Z"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="flex-1 h-40 w-full text-accent-300"
        viewBox="0 0 173 219"
        fill="none"
      >
        <motion.path
          d="M0.211914 108.77C0.211914 68.6464 7.4338 40.5686 21.8821 24.5362C36.3285 8.50568 58.334 0.489502 87.9016 0.489502C102.107 0.489502 113.77 2.24239 122.891 5.74501C132.01 9.25079 139.45 13.8086 145.209 19.4247C150.969 25.0399 155.504 30.9435 158.816 37.135C162.128 43.3266 164.791 50.5507 166.807 58.8056C170.742 74.5496 172.711 90.9647 172.711 108.05C172.711 146.352 166.232 174.382 153.272 192.14C140.313 209.9 117.995 218.779 86.3171 218.779C68.5566 218.779 54.2072 215.946 43.2638 210.283C32.3204 204.62 23.3438 196.315 16.3377 185.373C11.2483 177.597 7.28893 166.967 4.45831 153.479C1.62679 139.994 0.211914 125.091 0.211914 108.77ZM58.3836 108.915C58.3836 135.793 60.7593 154.152 65.5112 163.99C70.263 173.831 77.1496 178.749 86.174 178.749C92.125 178.749 97.2834 176.661 101.653 172.486C106.019 168.309 109.235 161.711 111.3 152.687C113.363 143.665 114.396 129.601 114.396 110.498C114.396 82.4696 112.02 63.6292 107.268 53.9816C102.516 44.3348 95.3888 39.5107 85.8856 39.5107C76.1887 39.5107 69.1826 44.4314 64.8631 54.2695C60.5436 64.1112 58.3836 82.3257 58.3836 108.915Z"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="flex-1 h-40 w-full text-accent-300"
        viewBox="0 0 178 207"
        fill="none"
      >
        <motion.path
          d="M103.095 168.453H0.46875V122.119L103.095 0.129883H152.195V124.747H177.644V168.453H152.195V206.35H103.095V168.453H103.095ZM103.095 124.747V60.9363L48.8687 124.747H103.095Z"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
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
      Houston, we have a problem!
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex gap-4 mb-8"
    >
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          transition: {
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 0.6,
          },
        }}
        className="w-4 h-4 bg-gradient-to-r from-accent-200 to-accent-400 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          transition: {
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 0.8,
          },
        }}
        className="w-4 h-4 bg-gradient-to-r from-accent-200 to-accent-400 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          transition: {
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 1,
          },
        }}
        className="w-4 h-4 bg-gradient-to-r from-accent-200 to-accent-400 rounded-full"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
      className="text-secondary-100 text-body text-center max-w-lg px-4"
    >
      The page you&apos;re looking for is lost in the vastness of space.
      Don&apos;t worry, our team of cyber explorers is on the case!
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex gap-4 mt-4 justify-center items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 bg-gradient-to-r from-accent-200 to-accent-400 rounded-lg shadow-md"
      >
        <Link className="text-primary-100 font-bold text-sm" href={PAGES.HOME}>
          Go Home
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 bg-gradient-to-r from-accent-200 to-accent-400 rounded-lg shadow-md"
      >
        <Link
          className="text-primary-100 font-bold text-sm"
          href={PAGES.CONTACT}
        >
          Report an Issue
        </Link>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default NotFound;
