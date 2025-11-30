import { NextPage } from "next";
import { motion } from "framer-motion";

const ProjectSkeleton: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col gap-4 h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="h-6 bg-secondary-100 rounded-md w-32 animate-pulse" />
      <motion.div
        className="w-full max-w-[370px] min-h-[315px] rounded-2xl border border-secondary-100 bg-line overflow-hidden shadow-sm animate-pulse"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-full h-36 relative overflow-hidden bg-secondary-100" />
        <div className="flex flex-col gap-5 p-5">
          <div className="h-4 bg-secondary-100 rounded-md w-48 mb-2" />
          <div className="h-4 bg-secondary-100 rounded-md w-72" />
          <div className="h-4 bg-secondary-100 rounded-md w-32" />
          <div className="h-10 bg-secondary-100 rounded-md w-24 mt-4" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectSkeleton;
