import React from "react";
import { motion, Variants } from "framer-motion";

const skeletonVariants: Variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const contentVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2, // Animate children with a delay
    },
  },
};

const SnippetSkeleton = () => {
  return (
    <motion.div
      className="flex flex-col gap-3"
      variants={contentVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="flex justify-between gap-5 items-center"
        variants={skeletonVariants}
      >
        <motion.div
          className="flex gap-3 items-center"
          variants={skeletonVariants}
        >
          <motion.div
            className="rounded-full w-9 h-9 bg-line animate-pulse"
            variants={skeletonVariants}
          />
          <motion.div
            className="w-32 h-4 bg-line rounded animate-pulse"
            variants={skeletonVariants}
          />
        </motion.div>
        <motion.div
          className="flex gap-5 items-center"
          variants={skeletonVariants}
        >
          <motion.div
            className="w-24 h-4 bg-line rounded animate-pulse"
            variants={skeletonVariants}
          />
          <motion.div
            className="w-32 h-4 bg-line rounded animate-pulse"
            variants={skeletonVariants}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full h-64 bg-line rounded animate-pulse"
        variants={skeletonVariants}
      />
    </motion.div>
  );
};

export default SnippetSkeleton;
